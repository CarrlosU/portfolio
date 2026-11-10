import { describe, it, expect } from "vitest";
import {
  shuffledIndices,
  shuffledExcludingFirst,
} from "@/shared/presentation/components/hero-visual/shuffle";

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) % 2147483648;
    return s / 2147483648;
  };
}

describe("shuffle", () => {
  it("returns a full permutation of 0..n-1", () => {
    const order = shuffledIndices(10, seededRandom(7));
    expect(order).toHaveLength(10);
    expect([...order].sort((a, b) => a - b)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("never opens with the excluded index when n > 1", () => {
    for (let seed = 1; seed <= 20; seed++) {
      const order = shuffledExcludingFirst(10, 4, seededRandom(seed));
      expect(order[0]).not.toBe(4);
      expect([...order].sort((a, b) => a - b)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
  });

  it("a full bag walk has no immediate repeats", () => {
    const seen: number[] = [];
    let last = -1;
    for (let round = 0; round < 3; round++) {
      const order = shuffledExcludingFirst(10, last, seededRandom(100 + round));
      for (const idx of order) {
        expect(idx).not.toBe(last);
        last = idx;
        seen.push(idx);
      }
    }
    expect(seen).toHaveLength(30);
  });
});
