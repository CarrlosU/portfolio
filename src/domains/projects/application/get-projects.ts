import type { Locale } from "@/shared/domain/types";
import type { Project } from "../domain/project.types";
import { projectsContent } from "@/content/projects";

export async function getProjects(_locale: Locale): Promise<Project[]> {
  return projectsContent.map((p) => p);
}

export async function getProjectBySlug(slug: string, __locale: Locale): Promise<Project | null> {
  return projectsContent.find((p) => p.slug === slug) ?? null;
}
