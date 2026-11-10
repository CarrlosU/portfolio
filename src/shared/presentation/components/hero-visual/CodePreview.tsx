"use client";

import { motion } from "framer-motion";
import type { CodeLine, CodeTone } from "./architecture.types";

const TONE_CLASS: Record<CodeTone, string> = {
  kw: "text-[#6C3BFF]",
  fn: "text-[#FAFAFA] font-medium",
  str: "text-[#7dd3a8]",
  plain: "text-[#FAFAFA]",
  muted: "text-[#A1A1AA]",
};

function renderLine(line: CodeLine, key: number) {
  return (
    <span key={key} className="block min-h-[1.25rem]">
      {line.map((tok, i) => (
        <span key={i} className={TONE_CLASS[tok.tone]}>
          {tok.text}
        </span>
      ))}
    </span>
  );
}

export function CodePreview({
  code,
  language,
  reduceMotion,
}: {
  code: CodeLine[];
  language: string;
  reduceMotion: boolean;
}) {
  return (
    <div className="min-w-0">
      <pre
        aria-hidden="true"
        data-language={language}
        className="mt-2 min-w-0 overflow-x-auto font-mono text-xs leading-5"
      >
        <code className="block min-w-0">
          {code.map((line, idx) =>
            reduceMotion ? (
              renderLine(line, idx)
            ) : (
              <motion.span
                key={`${language}-${idx}`}
                className="block min-h-[1.25rem]"
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.15 + idx * 0.22, ease: "easeOut" }}
              >
                {line.map((tok, i) => (
                  <span key={i} className={TONE_CLASS[tok.tone]}>
                    {tok.text}
                  </span>
                ))}
              </motion.span>
            )
          )}
        </code>
      </pre>
    </div>
  );
}
