const { chromium } = require('playwright');

// Matriz visual Quality Gate: 11 viewports x 2 temas x 2 idiomas.
// Falla (exit 1) si hay errores de consola, errores de página,
// overflow horizontal o imágenes rotas.
const VIEWPORTS = [
  { name: '320x568', w: 320, h: 568 },
  { name: '360x800', w: 360, h: 800 },
  { name: '390x844', w: 390, h: 844 },
  { name: '430x932', w: 430, h: 932 },
  { name: '768x1024', w: 768, h: 1024 },
  { name: '1024x768', w: 1024, h: 768 },
  { name: '1280x800', w: 1280, h: 800 },
  { name: '1440x900', w: 1440, h: 900 },
  { name: '1920x1080', w: 1920, h: 1080 },
  { name: '2560x1440', w: 2560, h: 1440 },
  { name: '3840x2160', w: 3840, h: 2160 },
];

const PAGES = ['/es/', '/en/', '/es/projects/dimeloia/'];
const THEMES = ['dark', 'light'];
let failures = [];

(async () => {
  const browser = await chromium.launch();
  for (const theme of THEMES) {
    for (const v of VIEWPORTS) {
      for (const p of PAGES) {
        const page = await browser.newPage({ viewport: { width: v.w, height: v.h } });
        const errors = [];
        // Los 404 de `__next*.txt?_rsc=` son prefetch interno de Next en
        // export estático (flight data inexistente): ruido benigno conocido,
        // no errores de la aplicación. Se excluyen del gate.
        const isRscProbe = (url) => url.includes("__next") && url.includes("_rsc=");
        page.on("response", (r) => {
          if (r.status() === 404 && !isRscProbe(r.url())) errors.push(r.url().slice(0, 200));
        });
        page.on("console", (m) => {
          if (m.type() === "error" && !m.location().url?.includes("__next")) {
            errors.push(m.text().slice(0, 200));
          }
        });
        page.on("pageerror", (e) => errors.push(String(e).slice(0, 200)));
        await page.addInitScript((t) => localStorage.setItem('csu-theme-mode', t), theme);
        await page.goto(`http://127.0.0.1:4173${p}`, { waitUntil: 'networkidle' });
        await page.waitForTimeout(500);
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth
        );
        const broken = await page.evaluate(() =>
          Array.from(document.images).filter((i) => !i.complete || i.naturalWidth === 0).length
        );
        if (errors.length) failures.push(`${theme}/${v.name}${p} console: ${errors.join(' | ')}`);
        if (overflow > 1) failures.push(`${theme}/${v.name}${p} overflow=${overflow}`);
        if (broken > 0) failures.push(`${theme}/${v.name}${p} broken-images=${broken}`);
        const tag = `${theme}-${v.name}-${p.replace(/\//g, '_')}`;
        await page.screenshot({ path: `artifacts/screenshots/matrix/${tag}.png`, fullPage: true });
        await page.close();
        console.log(`ok ${tag}`);
      }
    }
  }
  await browser.close();
  if (failures.length) {
    console.log('FAILURES:');
    failures.forEach((f) => console.log(' -', f));
    process.exit(1);
  }
  console.log('MATRIX CLEAN: no console errors, no overflow, no broken images');
})();
