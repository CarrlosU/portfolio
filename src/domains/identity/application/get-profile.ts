import type { Profile } from "../domain/identity.types";
import { siteConfig } from "@/config/site.config";

export async function getProfile(): Promise<Profile> {
  return {
    name: siteConfig.name,
    role: {
      es: "Ingeniero de Sistemas | Software Engineer",
      en: "Systems Engineer | Software Engineer",
    },
    summary: {
      es: "Ingeniero de Sistemas especializado en desarrollo backend y Full Stack, con experiencia construyendo plataformas SaaS y aplicaciones web. Enfocado en arquitectura de software, rendimiento, seguridad y desarrollo de sistemas escalables y mantenibles.",
      en: "Systems Engineer specializing in backend and full-stack development, with experience building SaaS platforms and web applications. Focused on software architecture, performance, security, and building scalable, maintainable systems.",
    },
    email: siteConfig.email,
    phone: siteConfig.phone,
    linkedin: siteConfig.linkedin,
    github: siteConfig.github,
    available: { es: "Disponible para oportunidades", en: "Available for opportunities" },
  };
}
