import { test, expect } from "@playwright/test";

// Selector de tema: solo dark/light, icono según estado,
// cursor pointer, persistencia y funcionamiento en ES/EN.
for (const locale of ["es", "en"] as const) {
  test(`theme toggle ${locale}: dark por defecto, cambia a claro y persiste`, async ({
    page,
  }) => {
    const toLight = locale === "es" ? "Cambiar a tema claro" : "Switch to light theme";
    const toDark = locale === "es" ? "Cambiar a tema oscuro" : "Switch to dark theme";

    await page.goto(`/${locale}/`);
    await expect(page.locator("html")).toHaveClass(/dark/);

    // En móvil el selector vive dentro del menú hamburguesa.
    const menuBtn = page.getByRole("button", { name: /open menu/i });
    if (await menuBtn.isVisible()) await menuBtn.click();

    const toggle = page.getByRole("button", { name: toLight });
    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveCSS("cursor", "pointer");
    await toggle.click();
    await expect(page.locator("html")).not.toHaveClass(/dark/);
    expect(await page.evaluate(() => localStorage.getItem("csu-theme-mode"))).toBe("light");

    await page.reload();
    await expect(page.locator("html")).not.toHaveClass(/dark/);

    if (await menuBtn.isVisible()) await menuBtn.click();
    await page.getByRole("button", { name: toDark }).click();
    await expect(page.locator("html")).toHaveClass(/dark/);
    expect(await page.evaluate(() => localStorage.getItem("csu-theme-mode"))).toBe("dark");
  });
}
