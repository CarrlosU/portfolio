"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ARCHITECTURE_STAGES } from "./architecture.data";
import { ArchitectureLayer } from "./ArchitectureLayer";
import { CodePreview } from "./CodePreview";
import { DataFlow } from "./DataFlow";
import type { Locale } from "@/shared/domain/types";

const CYCLE_MS = 4200;

export function ArchitecturePanel({ locale }: { locale: Locale }) {
  const reduce = useReducedMotion() ?? false;
  const [activeIndex, setActiveIndex] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => {
      setActiveIndex((i) => (i + 1) % ARCHITECTURE_STAGES.length);
    }, CYCLE_MS);
    return () => clearInterval(t);
  }, [reduce, paused]);

  const select = useCallback((i: number) => setActiveIndex(i), []);
  const active = ARCHITECTURE_STAGES[activeIndex];

  return (
    <div
      className="w-full min-w-0 max-w-full rounded-2xl border border-[#27272a] bg-[#15151B] p-4 sm:p-5"
      aria-label={locale === "es" ? "Resumen de arquitectura" : "Architecture overview"}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A1A1AA]">
          Architecture overview
        </p>
        <span className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#6C3BFF]" />
          <span className="font-mono text-[10px] text-[#A1A1AA]">
            {active.index}/04 · {active.title}
          </span>
        </span>
      </div>

      <div className="mt-4 flex min-w-0 flex-col" role="list">
        {ARCHITECTURE_STAGES.map((stage, i) => (
          <div key={stage.id} role="listitem" className="min-w-0">
            {i > 0 && (
              <DataFlow active={i - 1 === activeIndex || i === activeIndex} reduceMotion={reduce} />
            )}
            <ArchitectureLayer
              stage={stage}
              active={i === activeIndex}
              reduceMotion={reduce}
              onSelect={() => select(i)}
            />
          </div>
        ))}
      </div>

      <div className="mt-3 min-w-0 overflow-hidden rounded-xl border border-[#6C3BFF]/40 bg-[#0d0d12] p-3 shadow-[0_0_48px_-12px_rgba(108,59,255,0.55)]">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[11px] uppercase tracking-widest text-[#A1A1AA]">
            {active.title} · {active.language}
          </p>
          <div className="flex gap-1" aria-hidden="true">
            {ARCHITECTURE_STAGES.map((s, i) => (
              <span
                key={s.id}
                className={`h-1 w-4 rounded-full transition-colors ${
                  i === activeIndex ? "bg-[#6C3BFF]" : "bg-[#27272a]"
                }`}
              />
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={reduce ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? {} : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <CodePreview code={active.code} language={active.language} reduceMotion={reduce} />
          </motion.div>
        </AnimatePresence>
        <p className="mt-2 text-[11px] text-[#A1A1AA]">
          {locale === "es" ? "Ejemplo ilustrativo" : "Illustrative example"}
          {" · "}
          {active.techs.join(" · ")}
        </p>
      </div>
    </div>
  );
}
