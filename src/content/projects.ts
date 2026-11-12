import type { Project } from "@/domains/projects/domain/project.types";

export const projectsContent: Project[] = [
  {
    id: "dimeloia",
    slug: "dimeloia",
    name: "DimeloIA",
    brand: "dimeloia",
    tagline: {
      es: "Plataforma SaaS de cotizaciones con IA y procesamiento de voz.",
      en: "SaaS quoting platform with AI and voice processing.",
    },
    description: {
      es: "Desarrollo integral SaaS multi-tenant: arquitectura, backend, frontend, móvil, PostgreSQL e IA.",
      en: "End-to-end multi-tenant SaaS: architecture, backend, frontend, mobile, PostgreSQL and AI.",
    },
    problem: {
      es: "Crear cotizaciones comerciales era lento y manual.",
      en: "Creating commercial quotes was slow and manual.",
    },
    role: {
      es: "Software Engineer | Backend & Full Stack — APIs REST, frontend React, PostgreSQL, Redis, Docker.",
      en: "Software Engineer | Backend & Full Stack — REST APIs, React frontend, PostgreSQL, Redis, Docker.",
    },
    stack: [
      { id: "python", name: "Python", category: "backend" },
      { id: "fastapi", name: "FastAPI", category: "backend" },
      { id: "postgres", name: "PostgreSQL", category: "database" },
      { id: "react", name: "React", category: "frontend" },
      { id: "ts", name: "TypeScript", category: "frontend" },
    ],
    featured: true,
    siteUrl: "https://dimeloia.com",
  },
  {
    id: "jumpproxy",
    slug: "jumpproxy-engine",
    name: "JumpProxy Engine",
    tagline: {
      es: "Infraestructura de validación, análisis y gestión de proxies.",
      en: "Proxy validation, analysis and management infrastructure.",
    },
    description: {
      es: "Sistemas asíncronos, validación concurrente, Redis, PostgreSQL y análisis de anomalías.",
      en: "Async systems, concurrent validation, Redis, PostgreSQL and anomaly analysis.",
    },
    problem: {
      es: "Validar miles de proxies de forma fiable y rápida.",
      en: "Validating thousands of proxies reliably and fast.",
    },
    role: {
      es: "Diseño de orquestación asíncrona y persistencia.",
      en: "Async orchestration and persistence design.",
    },
    stack: [
      { id: "python", name: "Python", category: "backend" },
      { id: "redis", name: "Redis", category: "database" },
      { id: "postgres", name: "PostgreSQL", category: "database" },
    ],
    featured: true,
  },
  {
    id: "captcha",
    slug: "captcha-bypass",
    name: "Captcha Bypass",
    tagline: {
      es: "Automatización y reconocimiento de audio con múltiples proveedores IA.",
      en: "Automation and audio recognition with multiple AI providers.",
    },
    description: {
      es: "Python, Playwright/Patchright, Whisper y STT con orquestación de proveedores.",
      en: "Python, Playwright/Patchright, Whisper and STT with provider orchestration.",
    },
    problem: {
      es: "Resolver captchas de audio de forma robusta.",
      en: "Solving audio captchas robustly.",
    },
    role: {
      es: "Automatización, STT y fallback entre proveedores.",
      en: "Automation, STT and provider fallback.",
    },
    stack: [
      { id: "python", name: "Python", category: "backend" },
      { id: "playwright", name: "Playwright", category: "testing" },
    ],
    featured: false,
  },
  {
    id: "jetx",
    slug: "jetx-collector",
    name: "JetX Data Collector",
    tagline: {
      es: "Recopilación y análisis estadístico en tiempo real.",
      en: "Real-time collection and statistical analysis.",
    },
    description: {
      es: "SignalR/WebSockets, Redis Streams, PostgreSQL, feature engineering y ML experimental.",
      en: "SignalR/WebSockets, Redis Streams, PostgreSQL, feature engineering and experimental ML.",
    },
    problem: {
      es: "Obtener datos en tiempo real para análisis.",
      en: "Getting real-time data for analysis.",
    },
    role: {
      es: "Ingesta streaming y análisis estadístico.",
      en: "Streaming ingestion and statistical analysis.",
    },
    stack: [
      { id: "redis", name: "Redis Streams", category: "database" },
      { id: "postgres", name: "PostgreSQL", category: "database" },
    ],
    featured: false,
  },
];
