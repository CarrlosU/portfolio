import type { TechnologyReference } from "@/shared/domain/types";

interface TechGroup {
  id: string;
  title: { es: string; en: string };
  items: TechnologyReference[];
  context: { es: string; en: string };
}

export const technologyContent: TechGroup[] = [
  {
    id: "languages",
    title: { es: "Lenguajes", en: "Languages" },
    items: [
      { id: "python", name: "Python", category: "backend" },
      { id: "ts", name: "TypeScript", category: "frontend" },
      { id: "sql", name: "SQL", category: "database" },
    ],
    context: { es: "Uso diario en APIs, SaaS y datos.", en: "Daily use in APIs, SaaS and data." },
  },
  {
    id: "backend",
    title: { es: "Backend", en: "Backend" },
    items: [
      { id: "fastapi", name: "FastAPI", category: "backend" },
      { id: "sqlalchemy", name: "SQLAlchemy", category: "backend" },
      { id: "rest", name: "REST API", category: "backend" },
    ],
    context: { es: "APIs REST en producción en DimeloIA.", en: "Production REST APIs at DimeloIA." },
  },
  {
    id: "frontend",
    title: { es: "Frontend", en: "Frontend" },
    items: [
      { id: "react", name: "React", category: "frontend" },
      { id: "next", name: "Next.js", category: "frontend" },
      { id: "tailwind", name: "Tailwind CSS", category: "frontend" },
    ],
    context: { es: "Plataforma web y este portafolio.", en: "Web platform and this portfolio." },
  },
  {
    id: "data",
    title: { es: "Datos", en: "Data" },
    items: [
      { id: "postgres", name: "PostgreSQL", category: "database" },
      { id: "redis", name: "Redis", category: "database" },
    ],
    context: { es: "Modelado, índices y caché.", en: "Modeling, indexes and caching." },
  },
  {
    id: "devops",
    title: { es: "DevOps", en: "DevOps" },
    items: [
      { id: "docker", name: "Docker", category: "devops" },
      { id: "linux", name: "Linux", category: "devops" },
      { id: "git", name: "Git", category: "devops" },
    ],
    context: { es: "Entornos, CI/CD y despliegue.", en: "Environments, CI/CD and deploy." },
  },
  {
    id: "ai",
    title: { es: "IA", en: "AI" },
    items: [{ id: "ai-int", name: "Integración IA", category: "ai" }],
    context: { es: "Voz, NLP y automatización.", en: "Voice, NLP and automation." },
  },
  {
    id: "testing",
    title: { es: "Testing", en: "Testing" },
    items: [
      { id: "pytest", name: "Pytest", category: "testing" },
      { id: "vitest", name: "Vitest", category: "testing" },
      { id: "playwright", name: "Playwright", category: "testing" },
    ],
    context: { es: "Unit, integración y E2E.", en: "Unit, integration and E2E." },
  },
];
