"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { ResolvedTheme, ThemeMode } from "./theme.types";

export const THEME_STORAGE_KEY = "csu-theme-mode";

/**
 * Script de inicialización que corre antes del primer pintado.
 * Lee la preferencia guardada (oscuro por defecto) y fija la clase
 * `dark` en <html> para evitar cualquier destello del tema incorrecto.
 * Compatible con `output: export` (no depende del servidor).
 */
export const THEME_INIT_SCRIPT = `(function(){try{var m=localStorage.getItem("${THEME_STORAGE_KEY}")||"dark";var r=m==="system"?(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):m;document.documentElement.classList.toggle("dark",r==="dark")}catch(e){document.documentElement.classList.add("dark")}})();`;

function readStoredMode(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === "light" || stored === "system" ? stored : "dark";
  } catch {
    return "dark";
  }
}

function subscribeMediaQuery(onChange: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function usePrefersDark(): boolean {
  return useSyncExternalStore(
    subscribeMediaQuery,
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    () => false
  );
}

function applyTheme(resolved: ResolvedTheme) {
  document.documentElement.classList.toggle("dark", resolved === "dark");
}

interface ThemeContextValue {
  mode: ThemeMode;
  resolved: ResolvedTheme;
  setMode: (mode: ThemeMode) => void;
  cycle: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  mode: "dark",
  resolved: "dark",
  setMode: () => {},
  cycle: () => {},
});

const ORDER: ThemeMode[] = ["dark", "light", "system"];

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Estado inicial perezoso: en el cliente coincide con lo que ya aplicó
  // el script de inicialización, así no hay parpadeo ni setState en efectos.
  const [mode, setModeState] = useState<ThemeMode>(readStoredMode);
  const prefersDark = usePrefersDark();
  const resolved: ResolvedTheme = mode === "system" ? (prefersDark ? "dark" : "light") : mode;

  // Efecto solo con efectos externos (DOM + persistencia), sin setState.
  useEffect(() => {
    applyTheme(resolved);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch {
      // almacenamiento no disponible: el tema sigue funcionando en memoria
    }
  }, [mode, resolved]);

  const setMode = useCallback((next: ThemeMode) => setModeState(next), []);
  const cycle = useCallback(
    () => setModeState((m) => ORDER[(ORDER.indexOf(m) + 1) % ORDER.length]),
    []
  );

  return (
    <ThemeContext.Provider value={{ mode, resolved, setMode, cycle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
