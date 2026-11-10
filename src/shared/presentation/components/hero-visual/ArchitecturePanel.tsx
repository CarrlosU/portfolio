"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { LIVE_CATEGORIES } from "./live-scenes.data";
import { shuffledExcludingFirst } from "./shuffle";
import { CodeTyping } from "./CodeTyping";
import { CodeEditor } from "./CodeEditor";
import type { Locale } from "@/shared/domain/types";

const HOLD_MS = 2200;

const STRINGS = {
  es: {
    panelLabel: "Entorno de desarrollo",
    live: "Live preview",
    pause: "Pausar animación",
    play: "Reanudar animación",
    prev: "Categoría anterior",
    next: "Categoría siguiente",
    goTo: (t: string) => `Ir a categoría ${t}`,
    writing: "Escribiendo código…",
    paused: "En pausa",
    nextUp: "Siguiente categoría…",
    autoPlay: "Auto play",
  },
  en: {
    panelLabel: "Development environment",
    live: "Live preview",
    pause: "Pause animation",
    play: "Resume animation",
    prev: "Previous category",
    next: "Next category",
    goTo: (t: string) => `Go to category ${t}`,
    writing: "Writing code…",
    paused: "Paused",
    nextUp: "Next category…",
    autoPlay: "Auto play",
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
  const [manualPlaying, setManualPlaying] = useState(true);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [phase, setPhase] = useState<"typing" | "holding">("typing");

  const playing = !reduce && manualPlaying && !hoverPaused;
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
  const status = !manualPlaying || hoverPaused ? t.paused : phase === "holding" ? t.nextUp : t.writing;

  return (
    <motion.div
      initial={reduce ? {} : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full min-w-0 max-w-full rounded-2xl border border-[#27272a] bg-[#15151B] p-4 sm:p-5"
      aria-label={t.panelLabel}
      aria-roledescription="lobby"
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
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A1A1AA]">
          Development environment
        </p>
        <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-[#6C3BFF]/40 px-2 py-0.5">
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full bg-[#6C3BFF] ${reduce ? "" : "animate-pulse"}`}
          />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#FAFAFA]">
            {t.live}
          </span>
        </span>
      </div>

      <div className="mt-4 grid min-w-0 grid-cols-4 gap-1.5" role="tablist" aria-label={t.panelLabel}>
        {LIVE_CATEGORIES.map((c, i) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={i === categoryIndex}
            aria-label={t.goTo(c.title[locale])}
            onClick={() => goToCategory(i)}
            className={`min-w-0 truncate rounded-lg border px-2 py-1.5 font-mono text-[10px] transition-colors ${
              i === categoryIndex
                ? "border-[#6C3BFF]/50 bg-[#0d0d12] text-white shadow-[0_0_24px_-8px_rgba(108,59,255,0.7)]"
                : "border-[#27272a] bg-[#1c1c22] text-[#A1A1AA] hover:border-[#6C3BFF]/30"
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

      <div className="mt-3 flex min-w-0 items-center justify-between gap-2">
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            aria-label={t.prev}
            onClick={() => goToCategory(categoryIndex - 1)}
            className="rounded-lg border border-[#27272a] p-1.5 text-[#A1A1AA] hover:border-[#6C3BFF]/50 hover:text-white"
          >
            <ChevronLeft size={14} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={manualPlaying ? t.pause : t.play}
            aria-pressed={!manualPlaying}
            onClick={() => setManualPlaying((p) => !p)}
            className="rounded-lg border border-[#27272a] p-1.5 text-[#A1A1AA] hover:border-[#6C3BFF]/50 hover:text-white"
          >
            {manualPlaying ? (
              <Pause size={14} aria-hidden="true" />
            ) : (
              <Play size={14} aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            aria-label={t.next}
            onClick={() => goToCategory(categoryIndex + 1)}
            className="rounded-lg border border-[#27272a] p-1.5 text-[#A1A1AA] hover:border-[#6C3BFF]/50 hover:text-white"
          >
            <ChevronRight size={14} aria-hidden="true" />
          </button>
        </div>
        <p className="min-w-0 truncate font-mono text-[10px] text-[#A1A1AA]" aria-hidden="true">
          {category.index} / 04 · {category.title[locale]} · {snippet.file}
        </p>
        <p className="shrink-0 text-[11px] text-[#A1A1AA]" aria-live="polite">
          {reduce ? t.autoPlay : status}
        </p>
      </div>
    </motion.div>
  );
}
