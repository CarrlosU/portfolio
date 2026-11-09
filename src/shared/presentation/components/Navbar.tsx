"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationConfig } from "@/config/navigation.config";
import type { Locale } from "@/shared/domain/types";

export function Navbar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#27272a] bg-[#09090B]/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href={`/${locale}/`} className="text-lg font-bold tracking-tight">
          CSU<span className="text-[#6C3BFF]">.</span>
        </Link>
        <div className="hidden items-center gap-5 text-sm text-[#A1A1AA] md:flex">
          {navigationConfig.map((n) => (
            <Link key={n.id} href={n.href[locale]} className="rounded px-1 py-1 hover:text-white focus-visible:outline-2 focus-visible:outline-[#6C3BFF]">
              {n.label[locale]}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-2 text-sm md:flex" role="group" aria-label="Language">
          <Link href="/es/" aria-label="Español" className={`rounded px-2 py-1 ${locale === "es" ? "bg-[#1c1c22] text-white" : "text-[#A1A1AA]"}`}>ES</Link>
          <Link href="/en/" aria-label="English" className={`rounded px-2 py-1 ${locale === "en" ? "bg-[#1c1c22] text-white" : "text-[#A1A1AA]"}`}>EN</Link>
        </div>
        <button
          className="rounded p-2 text-[#A1A1AA] md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-[#27272a] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm">
            {navigationConfig.map((n) => (
              <Link key={n.id} href={n.href[locale]} onClick={() => setOpen(false)} className="rounded py-2 text-[#A1A1AA] hover:text-white">
                {n.label[locale]}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Link href="/es/" aria-label="Español" className="rounded border border-[#27272a] px-4 py-2">ES</Link>
              <Link href="/en/" aria-label="English" className="rounded border border-[#27272a] px-4 py-2">EN</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
