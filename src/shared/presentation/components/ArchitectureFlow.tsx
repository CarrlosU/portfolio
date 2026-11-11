"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Boxes, FileCode2, Globe, Package } from "lucide-react";
import { BrandIcon, BRAND_TONE } from "@/shared/presentation/components/BrandIcon";
import { architectureNodes, type ArchNodeIcon } from "@/content/architecture";
import type { Locale } from "@/shared/domain/types";

const CONCEPT_ICONS = {
  domains: Boxes,
  content: FileCode2,
  export: Package,
  cdn: Globe,
} as const;

function NodeIcon({ icon }: { icon: ArchNodeIcon }) {
  if (icon === "nextdotjs") {
    return (
      <BrandIcon
        brand="nextdotjs"
        size={28}
        className={BRAND_TONE.nextdotjs}
      />
    );
  }
  const Icon = CONCEPT_ICONS[icon];
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-2)] text-[var(--muted)]">
      <Icon size={22} aria-hidden="true" />
    </span>
  );
}

// Conector animado una sola vez al entrar en pantalla (sin movimiento
// permanente). Con movimiento reducido: línea estática.
function Connector({ vertical }: { vertical?: boolean }) {
  const reduce = useReducedMotion();
  if (vertical) {
    return (
      <div aria-hidden="true" className="mx-auto h-6 w-px bg-[var(--border)] lg:hidden">
        {!reduce && (
          <motion.span
            className="block h-full w-full origin-top bg-[#6C3BFF]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        )}
      </div>
    );
  }
  return (
    <div aria-hidden="true" className="relative hidden h-px w-10 shrink-0 self-center overflow-hidden bg-[var(--border)] lg:block">
      {!reduce && (
        <motion.span
          className="absolute inset-y-0 left-0 w-1/3 bg-[#6C3BFF]"
          initial={{ x: "-110%" }}
          whileInView={{ x: "320%" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}

// Diagrama de arquitectura del portafolio: flujo horizontal en escritorio,
// vertical en móvil. Entrada progresiva una sola vez por visualización.
export function ArchitectureFlow({ locale }: { locale: Locale }) {
  const reduce = useReducedMotion();
  return (
    <div className="flex min-w-0 flex-col lg:flex-row lg:items-stretch">
      {architectureNodes.map((node, i) => (
        <div key={node.id} className="flex min-w-0 flex-1 flex-col lg:flex-row lg:items-stretch">
          <motion.article
            className="flex min-w-0 flex-1 flex-col items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center transition-colors duration-300 hover:border-[#6C3BFF]/50"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: reduce ? 0 : i * 0.08, ease: "easeOut" }}
          >
            <NodeIcon icon={node.icon} />
            <h4 className="mt-3 font-semibold text-[var(--text)]">{node.name}</h4>
            <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent-text)]">
              {node.sub[locale]}
            </p>
            <p className="mt-1.5 text-xs leading-5 text-[var(--muted)]">{node.detail[locale]}</p>
          </motion.article>
          {i < architectureNodes.length - 1 && (
            <>
              <Connector vertical />
              <Connector />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
