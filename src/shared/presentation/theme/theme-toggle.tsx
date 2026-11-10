"use client";

import { useEffect, useState } from "react";
import { MonitorSmartphone, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import type { Locale } from "@/shared/domain/types";

const LABELS = {
  es: {
    toLight: "Cambiar a tema claro",
    toSystem: "Usar apariencia del sistema",
    toDark: "Cambiar a tema oscuro",
  },
  en: {
    toLight: "Switch to light theme",
    toSystem: "Use system appearance",
    toDark: "Switch to dark theme",
  },
} as const;

export function ThemeToggle({ locale }: { locale: Locale }) {
  const { mode, cycle } = useTheme();
  // Puerta de montaje: el icono depende del tema guardado (solo cliente),
  // así el primer render coincide con el SSR y no hay hydration mismatch.
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- mounted gate anti-hydration-mismatch
  useEffect(() => setMounted(true), []);

  const t = LABELS[locale];
  const next = mode === "dark" ? t.toLight : mode === "light" ? t.toSystem : t.toDark;

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={next}
      title={next}
      className="rounded-lg border border-[var(--border)] p-1.5 text-[var(--muted)] hover:border-[#6C3BFF]/50 hover:text-[var(--text)]"
    >
      {!mounted || mode === "dark" ? (
        <Moon size={16} aria-hidden="true" />
      ) : mode === "light" ? (
        <Sun size={16} aria-hidden="true" />
      ) : (
        <MonitorSmartphone size={16} aria-hidden="true" />
      )}
    </button>
  );
}
