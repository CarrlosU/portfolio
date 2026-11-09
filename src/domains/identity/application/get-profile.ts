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
    aboutHeadline: {
      es: "Ingeniería orientada a resolver problemas.",
      en: "Engineering focused on solving problems.",
    },
    aboutBody: {
      es: [
        "Me interesa diseñar y desarrollar soluciones digitales que combinen arquitectura sólida, código mantenible y experiencias de usuario intuitivas.",
        "Mi trabajo se centra en construir sistemas confiables, optimizar procesos y aplicar buenas prácticas de ingeniería durante todo el ciclo de desarrollo.",
      ],
      en: [
        "I enjoy designing and building digital solutions that combine solid architecture, maintainable code and intuitive user experiences.",
        "My work focuses on building reliable systems, optimizing processes and applying good engineering practices throughout the development cycle.",
      ],
    },
    principles: [
      {
        id: "arquitectura",
        title: { es: "Arquitectura y escalabilidad", en: "Architecture & scalability" },
        detail: {
          es: "Diseño de sistemas modulares, organizados y preparados para evolucionar.",
          en: "Design of modular, organized systems ready to evolve.",
        },
      },
      {
        id: "seguridad",
        title: { es: "Seguridad y rendimiento", en: "Security & performance" },
        detail: {
          es: "Desarrollo enfocado en eficiencia, protección de datos y confiabilidad.",
          en: "Development focused on efficiency, data protection and reliability.",
        },
      },
      {
        id: "calidad",
        title: { es: "Calidad de ingeniería", en: "Engineering quality" },
        detail: {
          es: "Código mantenible, buenas prácticas y resolución estructurada de problemas.",
          en: "Maintainable code, good practices and structured problem-solving.",
        },
      },
    ],
    email: siteConfig.email,
    phone: siteConfig.phone,
    linkedin: siteConfig.linkedin,
    github: siteConfig.github,
    available: { es: "Disponible para oportunidades", en: "Available for opportunities" },
  };
}
