"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import type { Locale } from "@/shared/domain/types";

const LABELS = {
  es: {
    toLight: "Cambiar a tema claro",
    toDark: "Cambiar a tema oscuro",
  },
  en: {
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
  },
} as const;

export function ThemeToggle({ locale, controlClassName }: { locale: Locale; controlClassName?: string }) {
  const { mode, toggle } = useTheme();
  // Puerta de montaje: el icono depende del tema guardado (solo cliente),
  // así el primer render coincide con el SSR y no hay hydration mismatch.
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- mounted gate anti-hydration-mismatch
  useEffect(() => setMounted(true), []);

  const t = LABELS[locale];
  // Etiqueta coherente con el icono: antes del montaje se renderiza
  // el estado oscuro (igual que el SSR) para evitar hydration mismatch.
  const next = !mounted || mode === "dark" ? t.toLight : t.toDark;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={next}
      title={next}
      className={
        controlClassName ??
        "inline-flex cursor-pointer items-center justify-center rounded-lg border border-[var(--border)] p-1.5 text-[var(--muted)] transition-colors duration-200 hover:border-[#6C3BFF]/50 hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C3BFF]"
      }
    >
      {!mounted || mode === "dark" ? (
        <Sun size={16} aria-hidden="true" />
      ) : (
        <Moon size={16} aria-hidden="true" />
      )}
    </button>
  );
}
