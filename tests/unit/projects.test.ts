import { describe, it, expect } from "vitest";
import { getProjects, getProjectBySlug } from "@/domains/projects";

describe("projects repository", () => {
  it("returns 4 projects", async () => {
    const all = await getProjects("es");
    expect(all).toHaveLength(4);
    expect(all.map((p) => p.slug)).toContain("dimeloia");
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
