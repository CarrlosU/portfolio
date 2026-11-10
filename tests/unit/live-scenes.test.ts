import { describe, it, expect } from "vitest";
import { LIVE_SCENES } from "@/shared/presentation/components/hero-visual/live-scenes.data";

describe("live-scenes.data", () => {
  it("defines 7 scenes with unique ids, files and non-empty code", () => {
    expect(LIVE_SCENES).toHaveLength(7);
    const ids = LIVE_SCENES.map((s) => s.id);
    expect(new Set(ids).size).toBe(7);
    const files = LIVE_SCENES.map((s) => s.file);
    expect(new Set(files).size).toBe(7);
    for (const s of LIVE_SCENES) {
      expect(s.file.length).toBeGreaterThan(0);
      expect(s.languageLabel.length).toBeGreaterThan(0);
      for (const loc of ["es", "en"] as const) {
        expect(s.techs[loc].length).toBeGreaterThanOrEqual(3);
      }
      expect(s.code.length).toBeGreaterThanOrEqual(3);
      for (const line of s.code) {
        expect(line.length).toBeGreaterThan(0);
        for (const tok of line) {
          expect(tok.text.length).toBeGreaterThan(0);
        }
      }
    }
  });

  it("covers frontend, backend, data, cache, containers, infra and concurrency", () => {
    const ids = LIVE_SCENES.map((s) => s.id);
    expect(ids).toEqual([
      "dashboard",
      "routes",
      "query",
      "cache",
      "docker",
      "nginx",
      "worker",
    ]);
  });
});
