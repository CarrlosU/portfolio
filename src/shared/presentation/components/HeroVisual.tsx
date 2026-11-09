"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Database, Zap } from "lucide-react";
import type { Locale } from "@/shared/domain/types";

// Ilustración conceptual del Hero: panel de arquitectura (frontend → API → datos).
// No representa infraestructura real en producción ni código ejecutable.
export function HeroVisual({ locale }: { locale: Locale }) {
  const reduce = useReducedMotion();
  const anim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: "easeOut" as const },
        };

  return (
    <motion.div
      {...anim(0.1)}
      className="w-full min-w-0 max-w-full rounded-2xl border border-[#27272a] bg-[#15151B] p-4 sm:p-5"
      aria-label={locale === "es" ? "Resumen de arquitectura" : "Architecture overview"}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A1A1AA]">
          Architecture overview
        </p>
        <span className="h-2 w-2 shrink-0 rounded-full bg-[#6C3BFF]" aria-hidden="true" />
      </div>

      <motion.div {...anim(0.2)} className="mt-4 min-w-0 rounded-xl border border-[#27272a] bg-[#1c1c22] px-3 py-2.5">
        <p className="text-[11px] uppercase tracking-widest text-[#A1A1AA]">Frontend</p>
        <p className="mt-0.5 truncate text-sm font-medium">React · Next.js</p>
      </motion.div>

      <div className="mx-auto h-4 w-px bg-gradient-to-b from-[#6C3BFF]/70 to-[#6C3BFF]/10" aria-hidden="true" />

      <motion.div
        {...anim(0.3)}
        className="min-w-0 rounded-xl border border-[#6C3BFF]/40 bg-[#0d0d12] p-3 shadow-[0_0_48px_-12px_rgba(108,59,255,0.55)]"
      >
        <p className="text-[11px] uppercase tracking-widest text-[#A1A1AA]">Backend · API</p>
        <pre aria-hidden="true" className="mt-2 overflow-x-auto font-mono text-xs leading-5">
          <code>
            <span className="text-[#6C3BFF]">from</span> <span className="text-[#FAFAFA]">fastapi</span> <span className="text-[#6C3BFF]">import</span> <span className="text-[#FAFAFA]">FastAPI, Depends</span>{"\n"}
            <span className="text-[#6C3BFF]">from</span> <span className="text-[#FAFAFA]">sqlalchemy</span> <span className="text-[#6C3BFF]">import</span> <span className="text-[#FAFAFA]">select</span>{"\n"}
            {"\n"}
            <span className="text-[#A1A1AA]">app</span> <span className="text-[#FAFAFA]">=</span> <span className="text-[#7dd3a8]">FastAPI()</span>{"\n"}
            {"\n"}
            <span className="text-[#6C3BFF]">@app.get</span><span className="text-[#FAFAFA]">(</span><span className="text-[#7dd3a8]">&quot;/quotes&quot;</span><span className="text-[#FAFAFA]">)</span>{"\n"}
            <span className="text-[#6C3BFF]">async def</span> <span className="text-[#FAFAFA]">list_quotes(db=Depends(get_db)):</span>{"\n"}
            {"    "}<span className="text-[#FAFAFA]">result =</span> <span className="text-[#6C3BFF]">await</span> <span className="text-[#FAFAFA]">db.execute(select(Quote))</span>{"\n"}
            {"    "}<span className="text-[#6C3BFF]">return</span> <span className="text-[#FAFAFA]">result.scalars().all()</span>
          </code>
        </pre>
        <p className="mt-2 text-[11px] text-[#A1A1AA]">
          {locale === "es" ? "Ejemplo ilustrativo" : "Illustrative example"}
        </p>
      </motion.div>

      <div className="mx-auto h-4 w-px bg-gradient-to-b from-[#6C3BFF]/70 to-[#6C3BFF]/10" aria-hidden="true" />

      <motion.div {...anim(0.4)} className="grid min-w-0 grid-cols-2 gap-2">
        <div className="min-w-0 rounded-xl border border-[#27272a] bg-[#1c1c22] px-3 py-2.5">
          <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#A1A1AA]">
            <Database size={12} aria-hidden="true" /> Data
          </p>
          <p className="mt-0.5 truncate text-sm font-medium">PostgreSQL</p>
        </div>
        <div className="min-w-0 rounded-xl border border-[#27272a] bg-[#1c1c22] px-3 py-2.5">
          <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#A1A1AA]">
            <Zap size={12} aria-hidden="true" /> Cache
          </p>
          <p className="mt-0.5 truncate text-sm font-medium">Redis</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
