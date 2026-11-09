import { describe, it, expect } from "vitest";
import { locales, defaultLocale } from "@/shared/domain/types";
import { isValidLocale } from "@/domains/localization";

describe("localization", () => {
  it("supports es and en", () => {
    expect(locales).toContain("es");
    expect(locales).toContain("en");
    expect(defaultLocale).toBe("es");
  });
  it("validates locales", () => {
    expect(isValidLocale("es")).toBe(true);
    expect(isValidLocale("en")).toBe(true);
    expect(isValidLocale("fr")).toBe(false);
  });
});
