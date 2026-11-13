import { describe, it, expect } from "vitest";
import { getProjects, getProjectBySlug } from "@/domains/projects";

describe("projects repository", () => {
  it("returns 3 projects", async () => {
    const all = await getProjects("es");
    expect(all).toHaveLength(3);
    expect(all.map((p) => p.slug)).toEqual(["dimeloia", "jumpproxy-engine", "captcha-bypass"]);
    expect(all.map((p) => p.slug)).not.toContain("jetx-collector");
  });
  it("finds by slug in both locales", async () => {
    const es = await getProjectBySlug("dimeloia", "es");
    const en = await getProjectBySlug("dimeloia", "en");
    expect(es?.name).toBe("DimeloIA");
    expect(en?.tagline.en).toContain("SaaS");
  });
  it("returns null for unknown slug", async () => {
    expect(await getProjectBySlug("nope", "es")).toBeNull();
  });
});
