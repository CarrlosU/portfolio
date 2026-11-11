import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { IMAGES } from "@/shared/presentation/assets/images";

const PUBLIC_DIR = join(process.cwd(), "public");

function collectPaths(obj: unknown): string[] {
  if (typeof obj === "string") return [obj];
  if (obj && typeof obj === "object") return Object.values(obj).flatMap(collectPaths);
  return [];
}

describe("IMAGES registry", () => {
  it("every registered path exists under public/", () => {
    const paths = collectPaths(IMAGES);
    expect(paths.length).toBeGreaterThan(0);
    for (const p of paths) {
      expect(p.startsWith("/images/")).toBe(true);
      expect(existsSync(join(PUBLIC_DIR, p))).toBe(true);
    }
  });
});
