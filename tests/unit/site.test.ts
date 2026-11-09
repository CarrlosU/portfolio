import { describe, it, expect } from "vitest";
import { siteConfig } from "@/config/site.config";

describe("site config", () => {
  it("points to CarrlosU remote (no CarlosUrregoJ)", () => {
    expect(siteConfig.repo).toBe("https://github.com/CarrlosU/portfolio");
    expect(siteConfig.repo).not.toContain("CarlosUrregoJ");
    expect(siteConfig.github).toContain("CarrlosU");
  });
  it("has contact channels", () => {
    expect(siteConfig.email).toContain("@");
    expect(siteConfig.linkedin).toContain("linkedin.com");
  });
});
