const { chromium } = require('playwright');

// Captura las 7 escenas del editor live (panel) en ES y EN a 1440px,
// más full-page responsive 320/1440 para verificar que no hay overflow.
const SCENES = 7;

(async () => {
  const browser = await chromium.launch();
  for (const locale of ['es', 'en']) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`http://127.0.0.1:4173/${locale}/`, { waitUntil: 'networkidle' });
    const panel = page.getByTestId('live-panel');
    await panel.scrollIntoViewIfNeeded();
    const tabs = page.getByRole('tab');
    const count = await tabs.count();
    console.log(`${locale}: ${count} tabs`);
    for (let i = 0; i < Math.min(count, SCENES); i++) {
      await tabs.nth(i).click();
      // Apartar el cursor: el panel pausa la escritura al hover.
      await page.mouse.move(10, 10);
      // Esperar a que termine la escritura de la escena antes de capturar.
      await page.waitForTimeout(9000);
      await panel.screenshot({ path: `artifacts/screenshots/live/${locale}-scene-0${i + 1}.png` });
      console.log(`ok live/${locale}-scene-0${i + 1}`);
    }
    await page.close();
  }
  // Full-page responsive ES
  for (const v of [{ name: '320', w: 320, h: 568 }, { name: '1440', w: 1440, h: 900 }]) {
    const page = await browser.newPage({ viewport: { width: v.w, height: v.h } });
    await page.goto('http://127.0.0.1:4173/es/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.screenshot({ path: `artifacts/screenshots/live/full-es-${v.name}.png`, fullPage: true });
    await page.close();
    console.log(`ok live/full-es-${v.name}`);
  }
  await browser.close();
})();
