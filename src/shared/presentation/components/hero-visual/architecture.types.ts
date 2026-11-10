// Tipos del panel interactivo de arquitectura del Hero.
// Módulo de tipos puros: sin lógica, sin IO, sin dependencias.
export type StageId = "frontend" | "backend" | "data" | "infra";

export type CodeTone = "kw" | "fn" | "str" | "plain" | "muted";

export interface CodeToken {
  text: string;
  tone: CodeTone;
}

export type CodeLine = CodeToken[];

export interface ArchitectureStage {
  id: StageId;
  index: string;
  title: string;
  techs: string[];
  language: string;
  code: CodeLine[];
}

// --- Live coding experience (fuente: live-scenes.data.ts) ---

export type LiveLanguage =
  | "tsx"
  | "python"
  | "sql"
  | "dockerfile"
  | "nginx"
  | "go";

export type LiveSceneId =
  | "dashboard"
  | "routes"
  | "query"
  | "cache"
  | "docker"
  | "nginx"
  | "worker";

import type { Locale } from "@/shared/domain/types";

export interface LiveScene {
  id: LiveSceneId;
  index: string;
  file: string;
  language: LiveLanguage;
  languageLabel: string;
  techs: Record<Locale, string[]>;
  code: CodeLine[];
}
