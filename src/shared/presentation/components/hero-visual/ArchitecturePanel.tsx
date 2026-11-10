"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LIVE_CATEGORIES } from "./live-scenes.data";
import { shuffledExcludingFirst } from "./shuffle";
import { CodeTyping } from "./CodeTyping";
import { CodeEditor } from "./CodeEditor";
import type { Locale } from "@/shared/domain/types";

const HOLD_MS = 3000;

const STRINGS = {
  es: {
    panelLabel: "Ingeniería de software",
    goTo: (index: string, short: string, title: string) => `Ir a categoría ${index} ${short}: ${title}`,
    active: "Animación activa",
    paused: "Animación en pausa",
    holding: "Cambiando de ejemplo",
  },
  en: {
    panelLabel: "Software Engineering",
    goTo: (index: string, short: string, title: string) => `Go to category ${index} ${short}: ${title}`,
    active: "Animation active",
    paused: "Animation paused",
    holding: "Switching example",
  },
} as const;

interface Bag {
  order: number[];
  pos: number;
  last: number | null;
}

export function ArchitecturePanel({ locale }: { locale: Locale }) {
  const t = STRINGS[locale];
  const reduce = useReducedMotion() ?? false;

  const [categoryIndex, setCategoryIndex] = useState(0);
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [phase, setPhase] = useState<"typing" | "holding">("typing");

  const playing = !reduce && !hoverPaused;
  const category = LIVE_CATEGORIES[categoryIndex];
  const bagsRef = useRef<Record<string, Bag>>({});
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Bolsa aleatoria sin repetición por categoría. Se consume solo en
  // manejadores de eventos (post-hidratación): el primer render es
  // determinista (01 Frontend, primer fragmento), como exige la espec.
  const drawFromBag = useCallback((catId: string, count: number): number => {
    let bag = bagsRef.current[catId];
    if (!bag || bag.pos >= bag.order.length) {
      const order = shuffledExcludingFirst(count, bag?.last ?? -1);
      bag = { order, pos: 0, last: null };
      bagsRef.current[catId] = bag;
    }
    const idx = bag.order[bag.pos];
    bag.pos += 1;
    bag.last = idx;
    return idx;
  }, []);

  const goToCategory = useCallback(
    (i: number, randomize = true) => {
      if (holdTimer.current) clearTimeout(holdTimer.current);
      const next = (i + LIVE_CATEGORIES.length) % LIVE_CATEGORIES.length;
      const cat = LIVE_CATEGORIES[next];
      setCategoryIndex(next);
      setSnippetIndex(randomize && !reduce ? drawFromBag(cat.id, cat.snippets.length) : 0);
      setPhase("typing");
    },
    [reduce, drawFromBag]
  );

  const handleComplete = useCallback(() => setPhase("holding"), []);

  useEffect(() => {
    if (reduce || !playing || phase !== "holding") return;
    holdTimer.current = setTimeout(() => goToCategory(categoryIndex + 1), HOLD_MS);
    return () => {
      if (holdTimer.current) clearTimeout(holdTimer.current);
    };
  }, [phase, playing, reduce, categoryIndex, goToCategory]);

  useEffect(
    () => () => {
      if (holdTimer.current) clearTimeout(holdTimer.current);
    },
    []
  );

  const snippet = category.snippets[snippetIndex] ?? category.snippets[0];
  const dotState = !playing ? "paused" : phase === "holding" ? "holding" : "active";
  const dotLabel = dotState === "active" ? t.active : dotState === "paused" ? t.paused : t.holding;

  return (
    <motion.div
      initial={reduce ? {} : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full min-w-0 max-w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5"
      aria-label={t.panelLabel}
      data-testid="live-panel"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocusCapture={() => setHoverPaused(true)}
      onBlurCapture={() => setHoverPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") goToCategory(categoryIndex + 1);
        if (e.key === "ArrowLeft") goToCategory(categoryIndex - 1);
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
          Software Engineering
        </p>
        <span
          role="status"
          aria-label={dotLabel}
          title={dotLabel}
          className={`h-2 w-2 shrink-0 rounded-full ${
            dotState === "active"
              ? "bg-[#6C3BFF] shadow-[0_0_10px_var(--primary)] animate-pulse"
              : dotState === "holding"
                ? "bg-[#c4b5fd]"
                : "bg-[#71717A]"
          }`}
        />
      </div>
      <span className="sr-only" aria-live="polite">
        {dotLabel} · {category.index} / 04 · {category.title[locale]} · {snippet.file}
      </span>

      <div className="mt-4 grid min-w-0 grid-cols-4 gap-1.5" role="tablist" aria-label={t.panelLabel}>
        {LIVE_CATEGORIES.map((c, i) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={i === categoryIndex}
            aria-label={t.goTo(c.index, c.short, c.title[locale])}
            onClick={() => goToCategory(i)}
            className={`min-w-0 truncate rounded-lg border px-2 py-1.5 font-mono text-[10px] transition-colors ${
              i === categoryIndex
                ? "border-[#6C3BFF]/50 bg-[var(--code-bg)] text-[var(--text)] shadow-[0_0_24px_-8px_rgba(108,59,255,0.7)]"
                : "border-[var(--border)] bg-[var(--surface-2)] text-[var(--muted)] hover:border-[#6C3BFF]/30"
            }`}
          >
            {c.index} {c.short}
          </button>
        ))}
      </div>

      <div className="mt-3 min-w-0">
        <CodeEditor
          file={snippet.file}
          languageLabel={snippet.languageLabel}
          indexLabel={`${category.index} / 04`}
          code={snippet.code}
        >
          <CodeTyping
            key={`${category.id}-${snippet.id}-${reduce ? "static" : "live"}`}
            code={snippet.code}
            playing={playing}
            reduceMotion={reduce}
            onComplete={handleComplete}
          />
        </CodeEditor>
      </div>
    </motion.div>
  );
}
