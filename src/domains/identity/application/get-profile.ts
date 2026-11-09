import type { Profile } from "../domain/identity.types";
import { siteConfig } from "@/config/site.config";

export async function getProfile(): Promise<Profile> {
  return {
    name: siteConfig.name,
    role: {
      es: "Software Engineer | Full Stack Engineer",
      en: "Software Engineer | Full Stack Engineer",
    },
    summary: {
      es: "Estudiante de noveno semestre de Ingeniería en Sistemas y Software Engineer con experiencia en backend, plataformas SaaS y web. Enfocado en sistemas escalables, seguros y mantenibles.",
      en: "9th-semester Systems Engineering student and Software Engineer with experience in backend, SaaS platforms and web. Focused on scalable, secure and maintainable systems.",
    },
    email: siteConfig.email,
    phone: siteConfig.phone,
    linkedin: siteConfig.linkedin,
    github: siteConfig.github,
    available: { es: "Disponible para oportunidades", en: "Available for opportunities" },
  };
}
