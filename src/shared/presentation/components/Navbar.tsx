"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationConfig } from "@/config/navigation.config";
import { ThemeToggle } from "@/shared/presentation/theme/theme-toggle";
import type { Locale } from "@/shared/domain/types";

// Controles uniformes (toggle de tema + ES/EN): misma altura, ancho mínimo,
// bordes, estados hover/focus y separación, en móvil y escritorio.
const controlClass =
  "inline-flex h-10 min-w-10 items-center justify-center rounded-lg border border-[var(--border)] px-3 text-sm font-medium text-[var(--muted)] transition-colors duration-200 cursor-pointer hover:border-[#6C3BFF]/50 hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C3BFF]";

export function Navbar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href={`/${locale}/`} className="text-lg font-bold tracking-tight">
          CSU<span className="text-[var(--accent-text)]">.</span>
        </Link>
        <div className="hidden items-center gap-5 text-sm text-[var(--muted)] md:flex">
          {navigationConfig.map((n) => (
            <Link key={n.id} href={n.href[locale]} className="rounded px-1 py-1 hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-[#6C3BFF]">
              {n.label[locale]}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle locale={locale} controlClassName={controlClass} />
          <div className="flex items-center gap-2 text-sm" role="group" aria-label="Language">
          <Link href="/es/" aria-label="ES - Español" className={`${controlClass} ${locale === "es" ? "bg-[var(--surface-2)] text-[var(--text)]" : "text-[var(--muted)]"}`}>ES</Link>
          <Link href="/en/" aria-label="EN - English" className={`${controlClass} ${locale === "en" ? "bg-[var(--surface-2)] text-[var(--text)]" : "text-[var(--muted)]"}`}>EN</Link>
          </div>
        </div>
        <button
          className="rounded p-2 text-[var(--muted)] md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-[var(--border)] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm">
            {navigationConfig.map((n) => (
              <Link key={n.id} href={n.href[locale]} onClick={() => setOpen(false)} className="rounded py-2 text-[var(--muted)] hover:text-[var(--text)]">
                {n.label[locale]}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <ThemeToggle locale={locale} controlClassName={controlClass} />
              <Link href="/es/" aria-label="ES - Español" className={controlClass}>ES</Link>
              <Link href="/en/" aria-label="EN - English" className={controlClass}>EN</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
