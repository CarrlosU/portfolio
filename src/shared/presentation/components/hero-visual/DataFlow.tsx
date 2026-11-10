"use client";

import { motion } from "framer-motion";

export function DataFlow({
  active,
  reduceMotion,
}: {
  active: boolean;
  reduceMotion: boolean;
}) {
  return (
    <div className="relative mx-auto h-4 w-px bg-[#27272a]" aria-hidden="true">
      <div
        className={`absolute inset-0 bg-gradient-to-b ${
          active ? "from-[#6C3BFF]/80 to-[#6C3BFF]/10" : "from-[#6C3BFF]/30 to-[#6C3BFF]/5"
        }`}
      />
      {active && !reduceMotion && (
        <motion.span
          className="absolute left-1/2 top-0 h-1.5 w-1.5 rounded-full bg-[#6C3BFF]"
          style={{ x: "-50%", boxShadow: "0 0 12px rgba(108,59,255,0.9)" }}
          initial={{ top: 0, opacity: 0 }}
          animate={{ top: ["0%", "80%"], opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}
