import { test, expect } from "@playwright/test";

test("E2E-001 home hero visible ES", async ({ page }) => {
  await page.goto("/es/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("E2E-007 ES->EN switch", async ({ page }) => {
  await page.goto("/es/");
  const menuBtn = page.getByRole("button", { name: /menu/i });
  if (await menuBtn.isVisible()) {
    await menuBtn.click();
  }
  await page.getByRole("link", { name: "English" }).first().click();
  await expect(page).toHaveURL(/\/en\//);
});

test("E2E-003 open DimeloIA", async ({ page }) => {
  await page.goto("/es/projects/dimeloia/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("DimeloIA");
});

test("E2E-009 CV ES accessible", async ({ page }) => {
  const res = await page.request.get("/cv/CV-Carlos-Urrego-ES.pdf");
  expect(res.status()).toBe(200);
});

test("E2E-010 CV EN accessible", async ({ page }) => {
  const res = await page.request.get("/cv/CV-Carlos-Urrego-EN.pdf");
  expect(res.status()).toBe(200);
});

test("no horizontal overflow at 320px", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto("/es/");
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
});

test("E2E-017 404 page", async ({ page }) => {
  await page.goto("/es/no-existe-xyz/");
  await expect(page.getByText("404")).toBeVisible();
});
