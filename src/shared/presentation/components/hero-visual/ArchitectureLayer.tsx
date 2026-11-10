"use client";

import { motion } from "framer-motion";
import { Database, Zap, Server, MonitorSmartphone } from "lucide-react";
import type { ArchitectureStage, StageId } from "./architecture.types";

const STAGE_ICON: Record<StageId, typeof Server> = {
  frontend: MonitorSmartphone,
  backend: Server,
  data: Database,
  infra: Zap,
};

export function ArchitectureLayer({
  stage,
  active,
  reduceMotion,
  onSelect,
}: {
  stage: ArchitectureStage;
  active: boolean;
  reduceMotion: boolean;
  onSelect: () => void;
}) {
  const Icon = STAGE_ICON[stage.id];
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      onMouseEnter={onSelect}
      onFocus={onSelect}
      aria-pressed={active}
      aria-label={`${stage.index} ${stage.title}: ${stage.techs.join(", ")}`}
      animate={reduceMotion ? {} : { scale: active ? 1.015 : 1 }}
      transition={{ duration: 0.25 }}
      className={`w-full min-w-0 rounded-xl border px-3 py-2.5 text-left transition-colors ${
        active
          ? "border-[#6C3BFF]/50 bg-[#0d0d12] shadow-[0_0_36px_-12px_rgba(108,59,255,0.6)]"
          : "border-[#27272a] bg-[#1c1c22] hover:border-[#6C3BFF]/30"
      }`}
    >
      <span className="flex items-center gap-2">
        <span
          className={`font-mono text-[10px] font-bold ${active ? "text-[#6C3BFF]" : "text-[#A1A1AA]"}`}
          aria-hidden="true"
        >
          {stage.index}
        </span>
        <Icon size={13} aria-hidden="true" className={active ? "text-[#6C3BFF]" : "text-[#A1A1AA]"} />
        <span className="truncate text-xs font-semibold uppercase tracking-widest text-[#A1A1AA]">
          {stage.title}
        </span>
      </span>
      <span className="mt-1 block truncate text-sm font-medium text-[#FAFAFA]">
        {stage.techs.join(" · ")}
      </span>
    </motion.button>
  );
}
