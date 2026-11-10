"use client";

import type { CodeLine } from "./architecture.types";

function plainText(code: CodeLine[]): string {
  return code.map((l) => l.map((t) => t.text).join("")).join("\n");
}

export function CodeEditor({
  file,
  languageLabel,
  indexLabel,
  code,
  children,
}: {
  file: string;
  languageLabel: string;
  indexLabel: string;
  code: CodeLine[];
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0 overflow-hidden rounded-xl border border-[#6C3BFF]/40 bg-[var(--code-bg)] shadow-[0_0_48px_-12px_rgba(108,59,255,0.55)]">
      <div className="flex min-w-0 items-center justify-between gap-2 border-b border-[var(--border)] px-3 py-2">
        <p className="min-w-0 truncate font-mono text-xs text-[var(--text)]" aria-hidden="true">
          {file}
        </p>
        <span className="flex shrink-0 items-center gap-2">
          <span className="rounded-full border border-[var(--border)] px-2 py-0.5 font-mono text-[10px] text-[var(--muted)]">
            {languageLabel}
          </span>
          <span className="font-mono text-[10px] text-[var(--muted)]" aria-hidden="true">
            {indexLabel}
          </span>
        </span>
      </div>
      <pre aria-hidden="true" className="min-w-0 overflow-x-auto p-3 font-mono text-xs leading-5">
        <code className="block min-w-0">{children}</code>
      </pre>
      <span className="sr-only">{plainText(code)}</span>
    </div>
  );
}
