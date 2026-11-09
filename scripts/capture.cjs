const { chromium } = require('playwright');
const viewports = [
  { name: '320', w: 320, h: 568 },
  { name: '360', w: 360, h: 800 },
  { name: '390', w: 390, h: 844 },
  { name: '768', w: 768, h: 1024 },
  { name: '1024', w: 1024, h: 768 },
  { name: '1280', w: 1280, h: 800 },
  { name: '1440', w: 1440, h: 900 },
  { name: '1920', w: 1920, h: 1080 },
];
const pages = [
  { name: 'home-es', url: 'http://127.0.0.1:4173/es/' },
  { name: 'home-en', url: 'http://127.0.0.1:4173/en/' },
  { name: 'dimeloia-es', url: 'http://127.0.0.1:4173/es/projects/dimeloia/' },
  { name: 'dimeloia-en', url: 'http://127.0.0.1:4173/en/projects/dimeloia/' },
];
(async () => {
  const browser = await chromium.launch();
  for (const v of viewports) {
    for (const p of pages) {
      const page = await browser.newPage({ viewport: { width: v.w, height: v.h } });
      await page.goto(p.url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(400);
      await page.screenshot({ path: `artifacts/screenshots/${v.name}/${p.name}.png`, fullPage: true });
      await page.close();
      console.log(`ok ${v.name}/${p.name}`);
    }
  }
  await browser.close();
})();
