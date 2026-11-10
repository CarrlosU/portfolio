"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
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
export const THEME_INIT_SCRIPT = `(function(){try{var m=localStorage.getItem("${THEME_STORAGE_KEY}")||"dark";document.documentElement.classList.toggle("dark",m!=="light")}catch(e){document.documentElement.classList.add("dark")}})();`;

function readStoredMode(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function applyTheme(resolved: ResolvedTheme) {
  document.documentElement.classList.toggle("dark", resolved === "dark");
}

interface ThemeContextValue {
  mode: ThemeMode;
  resolved: ResolvedTheme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  mode: "dark",
  resolved: "dark",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Estado inicial perezoso: en el cliente coincide con lo que ya aplicó
  // el script de inicialización, así no hay parpadeo ni setState en efectos.
  const [mode, setModeState] = useState<ThemeMode>(readStoredMode);

  // Efecto solo con efectos externos (DOM + persistencia), sin setState.
  useEffect(() => {
    applyTheme(mode);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch {
      // almacenamiento no disponible: el tema sigue funcionando en memoria
    }
  }, [mode]);

  const toggle = useCallback(() => setModeState((m) => (m === "dark" ? "light" : "dark")), []);

  return (
    <ThemeContext.Provider value={{ mode, resolved: mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
