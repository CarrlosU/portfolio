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
