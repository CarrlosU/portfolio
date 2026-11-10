"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CodeLine, CodeTone } from "./architecture.types";

const TONE_CLASS: Record<CodeTone, string> = {
  kw: "text-[var(--accent-text)]",
  fn: "text-[var(--text)] font-medium",
  str: "text-[var(--code-str)]",
  plain: "text-[var(--text)]",
  muted: "text-[var(--muted)]",
};

function totalChars(code: CodeLine[]): number {
  return code.reduce(
    (acc, line) => acc + line.reduce((a, t) => a + t.text.length, 0),
    0
  );
}

function delayFor(count: number, code: CodeLine[]): number {
  // Pausa más larga al terminar una línea (simula salto de línea natural).
  let acc = 0;
  for (const line of code) {
    const len = line.reduce((a, t) => a + t.text.length, 0);
    acc += len;
    if (count === acc) return 220 + Math.random() * 140;
  }
  // Velocidad variable base: escritura natural, no mecánica.
  return 14 + Math.random() * 30;
}

export function CodeTyping({
  code,
  playing,
  reduceMotion,
  onComplete,
}: {
  code: CodeLine[];
  playing: boolean;
  reduceMotion: boolean;
  onComplete: () => void;
}) {
  const total = useMemo(() => totalChars(code), [code]);
  // El reinicio por escena lo gestiona el padre con `key`: cada escena monta
  // una instancia nueva, así no hay setState sincrónico dentro de efectos.
  const [count, setCount] = useState(() => (reduceMotion ? totalChars(code) : 0));
  const doneRef = useRef(false);

  // Avance carácter por carácter con un único temporizador controlado.
  useEffect(() => {
    if (reduceMotion) return;
    if (!playing) return;
    if (count >= total) {
      if (!doneRef.current) {
        doneRef.current = true;
        onComplete();
      }
      return;
    }
    const t = setTimeout(
      () => setCount((c) => Math.min(c + 1, total)),
      delayFor(count, code)
    );
    return () => clearTimeout(t);
  }, [count, playing, reduceMotion, total, code, onComplete]);

  // Render con highlighting: reparte el presupuesto de caracteres por token.
  let remaining = reduceMotion ? Number.POSITIVE_INFINITY : count;
  const lines = code.map((line, li) => {
    const spans: React.ReactNode[] = [];
    line.forEach((tok, ti) => {
      if (remaining <= 0) return;
      const take = Math.min(tok.text.length, remaining);
      remaining -= take;
      if (take > 0) {
        spans.push(
          <span key={ti} className={TONE_CLASS[tok.tone]}>
            {tok.text.slice(0, take)}
          </span>
        );
      }
    });
    return (
      <span key={li} className="block min-h-[1.25rem]">
        {spans}
      </span>
    );
  });

  const done = count >= total;

  return (
    <span className="block">
      {lines}
      {!reduceMotion && (
        <span
          aria-hidden="true"
          className={`ml-0.5 inline-block h-4 w-[7px] translate-y-[3px] bg-[#6C3BFF] ${
            done || !playing ? "opacity-70" : "animate-pulse"
          }`}
          style={{ boxShadow: "0 0 10px rgba(108,59,255,0.8)" }}
        />
      )}
    </span>
  );
}
