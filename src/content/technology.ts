import type { Locale, TechnologyReference } from "@/shared/domain/types";

export const stackIntro: Record<Locale, string> = {
  es: "He trabajado con distintos lenguajes, frameworks y ecosistemas tecnológicos para desarrollar aplicaciones, APIs y plataformas SaaS. Este stack representa parte de mi experiencia, no un conjunto limitado de herramientas: selecciono y adopto nuevas tecnologías según las necesidades de cada proyecto.",
  en: "I have worked with different programming languages, frameworks, and technology ecosystems to build applications, APIs, and SaaS platforms. This stack represents part of my experience, not a fixed set of tools: I select and adopt new technologies according to each project's needs.",
};

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
      { id: "javascript", name: "JavaScript", category: "frontend" },
      { id: "ts", name: "TypeScript", category: "frontend" },
      { id: "java", name: "Java", category: "backend" },
      { id: "sql", name: "SQL", category: "database" },
    ],
    context: { es: "Fundamentos aplicados al desarrollo de aplicaciones, APIs y datos.", en: "Fundamentals applied to application, API and data development." },
  },
  {
    id: "backend",
    title: { es: "Backend", en: "Backend" },
    items: [
      { id: "fastapi", name: "FastAPI", category: "backend" },
      { id: "springboot", name: "Spring Boot", category: "backend" },
      { id: "sqlalchemy", name: "SQLAlchemy", category: "backend" },
      { id: "rest", name: "REST API", category: "backend" },
      { id: "go", name: "Go", category: "backend" },
    ],
    context: { es: "Desarrollo e integración de APIs, servicios y lógica de negocio.", en: "API development and integration, services and business logic." },
  },
  {
    id: "frontend",
    title: { es: "Frontend", en: "Frontend" },
    items: [
      { id: "react", name: "React", category: "frontend" },
      { id: "next", name: "Next.js", category: "frontend" },
      { id: "tailwind", name: "Tailwind CSS", category: "frontend" },
      { id: "wordpress", name: "WordPress", category: "frontend" },
    ],
    context: { es: "Interfaces web, aplicaciones y gestión de contenidos mediante CMS.", en: "Web interfaces, applications, and content management using CMS platforms." },
  },
  {
    id: "data",
    title: { es: "Datos", en: "Data" },
    items: [
      { id: "postgres", name: "PostgreSQL", category: "database" },
      { id: "redis", name: "Redis", category: "database" },
      { id: "mongodb", name: "MongoDB", category: "database" },
    ],
    context: { es: "Persistencia, modelado, consultas y caché.", en: "Persistence, modeling, queries and caching." },
  },
  {
    id: "architecture",
    title: { es: "Arquitectura de software", en: "Software architecture" },
    items: [
      { id: "modular-monolith", name: "Modular Monolith", category: "architecture" },
      { id: "domain-arch", name: "Domain Architecture", category: "architecture" },
      { id: "layered-arch", name: "Layered Architecture", category: "architecture" },
      { id: "multi-tenant", name: "Multi-tenant", category: "architecture" },
    ],
    context: { es: "Diseño y estructuración de sistemas.", en: "System design and structuring." },
  },
  {
    id: "devops",
    title: { es: "DevOps e infraestructura", en: "DevOps & infrastructure" },
    items: [
      { id: "docker", name: "Docker", category: "devops" },
      { id: "linux", name: "Linux", category: "devops" },
      { id: "git", name: "Git", category: "devops" },
      { id: "nginx", name: "Nginx", category: "devops" },
      { id: "cicd", name: "CI/CD", category: "devops" },
    ],
    context: { es: "Contenedorización, entornos, automatización y despliegue.", en: "Containerization, environments, automation and deployment." },
  },
  {
    id: "ai",
    title: { es: "IA y agentes", en: "AI & agents" },
    items: [
      { id: "ai-int", name: "AI Integration", category: "ai" },
      { id: "ai-agents", name: "AI Agents", category: "ai" },
      { id: "mcp", name: "MCP", category: "ai" },
      { id: "agent-skills", name: "Agent Skills", category: "ai" },
      { id: "automation", name: "Automation", category: "ai" },
    ],
    context: { es: "Integración de IA, agentes y automatización en flujos de trabajo.", en: "AI, agent and automation integration into workflows." },
  },
  {
    id: "testing",
    title: { es: "Testing", en: "Testing" },
    items: [
      { id: "pytest", name: "Pytest", category: "testing" },
      { id: "vitest", name: "Vitest", category: "testing" },
      { id: "playwright", name: "Playwright", category: "testing" },
    ],
    context: { es: "Pruebas unitarias, integración y extremo a extremo.", en: "Unit, integration and end-to-end testing." },
  },
];
