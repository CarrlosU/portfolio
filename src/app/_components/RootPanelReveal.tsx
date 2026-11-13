"use client";

import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Envoltorio cliente aislado: solo anima el panel lateral.
// El contenido principal (h1 + botones) queda en el Server Component
// y se pinta de inmediato sin esperar JS, para no afectar el LCP.
export function RootPanelReveal({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion() ?? false;
  return (
    <MotionConfig reducedMotion="user">
      <motion.aside
        initial={reduce ? {} : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mx-auto w-full min-w-0 max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.035] p-7 shadow-2xl shadow-purple-950/30 backdrop-blur-xl sm:p-9"
      >
        {children}
      </motion.aside>
    </MotionConfig>
  );
}
