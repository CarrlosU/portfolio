"use client";

import { useEffect } from "react";

// Redirección cliente aislada: compatible con `output: export`
// (sin middleware ni redirects nativos). `replace` no ensucia el historial.
export function RootRedirect() {
  useEffect(() => {
    window.location.replace("/es/");
  }, []);
  return null;
}
