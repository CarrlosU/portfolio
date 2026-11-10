import { test, expect } from "@playwright/test";

// Regresión visual del Hero en ambos temas (ES). Se usa reduced-motion para
// congelar la escritura del editor y obtener capturas deterministas.
for (const theme of ["dark", "light"] as const) {
  test(`hero ${theme}`, async ({ page }) => {
    await page.addInitScript((t) => {
      localStorage.setItem("csu-theme-mode", t);
    }, theme);
    await page.goto("/es/");
    const panel = page.getByTestId("live-panel");
    await panel.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await expect(page).toHaveScreenshot(`hero-${theme}.png`);
  });
}
