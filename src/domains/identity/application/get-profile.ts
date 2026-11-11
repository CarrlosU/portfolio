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
      es: "Ingeniero de Sistemas especializado en desarrollo backend y Full Stack. Experiencia construyendo plataformas SaaS y aplicaciones web, con enfoque en arquitectura, rendimiento, seguridad y escalabilidad.",
      en: "Systems Engineer specializing in backend and full-stack development. Experienced in building SaaS platforms and web applications, focused on architecture, performance, security and scalability.",
    },
    aboutHeadline: {
      es: "Ingeniería orientada a resolver problemas.",
      en: "Engineering focused on solving problems.",
    },
    aboutBody: {
      es: [
        "Desarrollo soluciones digitales combinando arquitectura de software sólida, código mantenible y experiencias de usuario intuitivas. Priorizo la seguridad, el rendimiento y la confiabilidad, aplicando buenas prácticas de ingeniería durante todo el ciclo de desarrollo.",
      ],
      en: [
        "I build digital solutions combining solid software architecture, maintainable code and intuitive user experiences. I prioritize security, performance and reliability, applying good engineering practices throughout the development cycle.",
      ],
    },
    principles: [
      {
        id: "architecture",
        title: { es: "Arquitectura y escalabilidad", en: "Architecture & scalability" },
        detail: {
          es: "Sistemas modulares, organizados y preparados para evolucionar.",
          en: "Modular, organized systems ready to evolve.",
        },
      },
      {
        id: "security",
        title: { es: "Seguridad y rendimiento", en: "Security & performance" },
        detail: {
          es: "Eficiencia, protección de datos y sistemas confiables.",
          en: "Efficiency, data protection and reliable systems.",
        },
      },
      {
        id: "quality",
        title: { es: "Calidad de ingeniería", en: "Engineering quality" },
        detail: {
          es: "Código mantenible, buenas prácticas y soluciones bien estructuradas.",
          en: "Maintainable code, good practices and well-structured solutions.",
        },
      },
    ],
    email: siteConfig.email,
    phone: siteConfig.phone,
    linkedin: siteConfig.linkedin,
    github: siteConfig.github,
  };
}
