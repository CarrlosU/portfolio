import { describe, it, expect } from "vitest";
import { LIVE_CATEGORIES } from "@/shared/presentation/components/hero-visual/live-scenes.data";

describe("live-scenes.data", () => {
  it("defines 4 categories in fixed order with 10 snippets each", () => {
    expect(LIVE_CATEGORIES.map((c) => c.id)).toEqual([
      "frontend",
      "backend",
      "data",
      "infra",
    ]);
    for (const c of LIVE_CATEGORIES) {
      expect(c.snippets).toHaveLength(10);
      expect(c.short.length).toBeGreaterThan(0);
      expect(c.techs.es.length).toBeGreaterThanOrEqual(3);
      expect(c.techs.en.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("has 40 unique snippet ids and files with non-empty code", () => {
    const all = LIVE_CATEGORIES.flatMap((c) => c.snippets);
    expect(all).toHaveLength(40);
    expect(new Set(all.map((s) => s.id)).size).toBe(40);
    expect(new Set(all.map((s) => s.file)).size).toBe(40);
    for (const s of all) {
      expect(s.file.length).toBeGreaterThan(0);
      expect(s.languageLabel.length).toBeGreaterThan(0);
      expect(s.code.length).toBeGreaterThanOrEqual(2);
      for (const line of s.code) {
        expect(line.length).toBeGreaterThan(0);
        for (const tok of line) {
          expect(tok.text.length).toBeGreaterThan(0);
        }
      }
    }
  });
});
