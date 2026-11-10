"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { LIVE_SCENES } from "./live-scenes.data";
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
    prev: "Escena anterior",
    next: "Escena siguiente",
    goTo: (i: string, f: string) => `Ir a escena ${i}: ${f}`,
    writing: "Escribiendo código…",
    paused: "En pausa",
    nextUp: "Siguiente escena…",
    autoPlay: "Auto play",
  },
  en: {
    panelLabel: "Development environment",
    live: "Live preview",
    pause: "Pause animation",
    play: "Resume animation",
    prev: "Previous scene",
    next: "Next scene",
    goTo: (i: string, f: string) => `Go to scene ${i}: ${f}`,
    writing: "Writing code…",
    paused: "Paused",
    nextUp: "Next scene…",
    autoPlay: "Auto play",
  },
} as const;

export function ArchitecturePanel({ locale }: { locale: Locale }) {
  const t = STRINGS[locale];
  const reduce = useReducedMotion() ?? false;

  const [sceneIndex, setSceneIndex] = useState(0);
  const [manualPlaying, setManualPlaying] = useState(true);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [phase, setPhase] = useState<"typing" | "holding">("typing");

  const playing = !reduce && manualPlaying && !hoverPaused;
  const scene = LIVE_SCENES[sceneIndex];
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (i: number) => {
      if (holdTimer.current) clearTimeout(holdTimer.current);
      setSceneIndex((i + LIVE_SCENES.length) % LIVE_SCENES.length);
      setPhase("typing");
    },
    []
  );

  const handleComplete = useCallback(() => setPhase("holding"), []);

  // Avance automático tras la pausa de lectura, con limpieza estricta.
  useEffect(() => {
    if (reduce || !playing || phase !== "holding") return;
    holdTimer.current = setTimeout(() => goTo(sceneIndex + 1), HOLD_MS);
    return () => {
      if (holdTimer.current) clearTimeout(holdTimer.current);
    };
  }, [phase, playing, reduce, sceneIndex, goTo]);

  // Limpieza al desmontar.
  useEffect(
    () => () => {
      if (holdTimer.current) clearTimeout(holdTimer.current);
    },
    []
  );

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
        if (e.key === "ArrowRight") goTo(sceneIndex + 1);
        if (e.key === "ArrowLeft") goTo(sceneIndex - 1);
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

      <div className="mt-4 min-w-0">
        <CodeEditor
          file={scene.file}
          languageLabel={scene.languageLabel}
          indexLabel={`${scene.index} / 07`}
          techs={scene.techs[locale]}
          code={scene.code}
        >
          <CodeTyping
            key={`${scene.id}-${reduce ? "static" : "live"}`}
            code={scene.code}
            playing={playing}
            reduceMotion={reduce}
            onComplete={handleComplete}
          />
        </CodeEditor>
      </div>

      <div className="mt-3 flex min-w-0 items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-1" role="tablist" aria-label={t.panelLabel}>
          {LIVE_SCENES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === sceneIndex}
              aria-label={t.goTo(s.index, s.file)}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-colors ${
                i === sceneIndex ? "w-5 bg-[#6C3BFF]" : "w-2.5 bg-[#27272a] hover:bg-[#6C3BFF]/50"
              }`}
            />
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            aria-label={t.prev}
            onClick={() => goTo(sceneIndex - 1)}
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
            onClick={() => goTo(sceneIndex + 1)}
            className="rounded-lg border border-[#27272a] p-1.5 text-[#A1A1AA] hover:border-[#6C3BFF]/50 hover:text-white"
          >
            <ChevronRight size={14} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-2 flex min-w-0 items-center justify-between gap-2">
        <p className="min-w-0 truncate font-mono text-[10px] text-[#A1A1AA]" aria-hidden="true">
          {scene.index} / 07 · {scene.file}
        </p>
        <p className="shrink-0 text-[11px] text-[#A1A1AA]" aria-live="polite">
          {reduce ? t.autoPlay : status}
        </p>
      </div>
    </motion.div>
  );
}
