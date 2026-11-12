import type { Locale } from "@/shared/domain/types";

export interface Experience {
  id: string;
  company: string;
  siteUrl?: string;
  brand?: "dimeloia";
  position: Record<Locale, string>;
  period: string;
  bullets: Record<Locale, string[]>;
}

export const experienceContent: Experience[] = [
  {
    id: "dimeloia",
    company: "DimeloIA",
    siteUrl: "https://dimeloia.com",
    brand: "dimeloia",
    position: {
      es: "Software Engineer | Backend & Full Stack",
      en: "Software Engineer | Backend & Full Stack",
    },
    period: "2026 – Actualidad",
    bullets: {
      es: [
        "Desarrollo de APIs REST y lógica de negocio con Python, FastAPI y SQLAlchemy.",
        "Desarrollo de la plataforma web con TypeScript, React y tecnologías modernas de frontend.",
        "Desarrollo de aplicaciones móviles para Android e iOS, integradas con las APIs y servicios.",
        "Diseño y optimización de PostgreSQL, incluyendo modelos, relaciones, consultas e índices.",
        "Implementación de funcionalidades de IA y automatización para productos, clientes y cotizaciones.",
        "Infraestructura y servicios con Redis, Docker y Git, orientados a rendimiento y escalabilidad.",
      ],
      en: [
        "REST APIs and business logic with Python, FastAPI and SQLAlchemy.",
        "Web platform with TypeScript, React and modern frontend technologies.",
        "Mobile apps for Android and iOS integrated with platform APIs.",
        "PostgreSQL design and optimization: models, relations, queries and indexes.",
        "AI and automation features for products, clients and quoting.",
        "Infrastructure with Redis, Docker and Git focused on performance and scalability.",
      ],
    },
  },
];
