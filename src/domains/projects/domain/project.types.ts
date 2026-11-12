import type { Locale, TechnologyReference } from "@/shared/domain/types";

export type ProjectSlug =
  | "dimeloia"
  | "jumpproxy-engine"
  | "captcha-bypass"
  | "jetx-collector";

export interface Project {
  id: string;
  slug: ProjectSlug;
  name: string;
  brand?: "dimeloia";
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  problem: Record<Locale, string>;
  role: Record<Locale, string>;
  stack: TechnologyReference[];
  featured: boolean;
  siteUrl?: string;
  repoUrl?: string;
}

export interface ProjectRepository {
  findAll(locale: Locale): Promise<Project[]>;
  findBySlug(slug: string, locale: Locale): Promise<Project | null>;
}
