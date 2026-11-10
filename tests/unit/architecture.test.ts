import { describe, it, expect } from "vitest";
import { ARCHITECTURE_STAGES } from "@/shared/presentation/components/hero-visual/architecture.data";

describe("architecture.data", () => {
  it("defines 4 stages with unique ids and non-empty code", () => {
    expect(ARCHITECTURE_STAGES).toHaveLength(4);
    const ids = ARCHITECTURE_STAGES.map((s) => s.id);
    expect(new Set(ids).size).toBe(4);
    for (const s of ARCHITECTURE_STAGES) {
      expect(s.title.length).toBeGreaterThan(0);
      expect(s.techs.length).toBeGreaterThanOrEqual(3);
      expect(s.code.length).toBeGreaterThanOrEqual(3);
      for (const line of s.code) {
        expect(line.length).toBeGreaterThan(0);
      }
    }
  });

  it("covers frontend, backend, data and infra", () => {
    const ids = ARCHITECTURE_STAGES.map((s) => s.id);
    expect(ids).toEqual(["frontend", "backend", "data", "infra"]);
  });
});
