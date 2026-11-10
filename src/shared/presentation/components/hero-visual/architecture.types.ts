// Tipos del panel live del Hero.
// Módulo de tipos puros: sin lógica, sin IO, sin dependencias.
import type { Locale } from "@/shared/domain/types";

export type CodeTone = "kw" | "fn" | "str" | "plain" | "muted";

export interface CodeToken {
  text: string;
  tone: CodeTone;
}

export type CodeLine = CodeToken[];

export type LiveLanguage =
  | "tsx"
  | "python"
  | "sql"
  | "dockerfile"
  | "nginx"
  | "go"
  | "yaml"
  | "shell";

export type LiveCategoryId = "frontend" | "backend" | "data" | "infra";

export interface LiveSnippet {
  id: string;
  file: string;
  language: LiveLanguage;
  languageLabel: string;
  code: CodeLine[];
}

export interface LiveCategory {
  id: LiveCategoryId;
  index: string;
  title: Record<Locale, string>;
  short: string;
  techs: Record<Locale, string[]>;
  snippets: LiveSnippet[];
}
