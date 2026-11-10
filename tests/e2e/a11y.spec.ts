import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// Auditoría de accesibilidad (WCAG): home ES/EN en ambos temas.
// Sin violaciones de impacto serio o crítico.
for (const theme of ["dark", "light"] as const) {
  for (const locale of ["es", "en"] as const) {
    test(`a11y ${locale} ${theme} sin violaciones serias`, async ({ page }) => {
      await page.addInitScript((t) => {
        localStorage.setItem("csu-theme-mode", t);
      }, theme);
      await page.goto(`/${locale}/`);
      // Dejar que terminen las animaciones de entrada antes de auditar,
      // para no medir colores mezclados a mitad de transición.
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(1500);
      const results = await new AxeBuilder({ page }).analyze();
      const blocking = results.violations.filter((v) =>
        ["serious", "critical"].includes(v.impact ?? "")
      );
      expect(blocking, JSON.stringify(blocking, null, 2)).toEqual([]);
    });
  }
}
