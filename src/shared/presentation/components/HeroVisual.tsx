"use client";

import { ArchitecturePanel } from "./hero-visual/ArchitecturePanel";
import type { Locale } from "@/shared/domain/types";

// Wrapper del Hero: delega en el panel interactivo de arquitectura.
// No representa infraestructura real en producción ni código ejecutable.
export function HeroVisual({ locale }: { locale: Locale }) {
  return <ArchitecturePanel locale={locale} />;
}
