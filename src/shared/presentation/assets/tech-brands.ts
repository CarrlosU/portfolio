import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Bot,
  Boxes,
  Building2,
  Coffee,
  Database,
  Drama,
  Layers,
  Network,
  Sparkles,
  Webhook,
  Workflow,
  Zap,
} from "lucide-react";
import type { Brand } from "@/shared/presentation/components/BrandIcon";

export type TechIcon = { kind: "brand"; brand: Brand } | { kind: "lucide"; icon: LucideIcon };

// Definición única de marca por tecnología: cada id se declara una sola vez
// y se muestra igual en todas las categorías donde aparezca (sin duplicados).
// Marcas sin logotipo Simple Icons (SQL, REST, IA, Playwright) usan Lucide.
export const TECH_ICONS: Record<string, TechIcon> = {
  python: { kind: "brand", brand: "python" },
  javascript: { kind: "brand", brand: "javascript" },
  ts: { kind: "brand", brand: "typescript" },
  java: { kind: "lucide", icon: Coffee },
  sql: { kind: "lucide", icon: Database },
  fastapi: { kind: "brand", brand: "fastapi" },
  springboot: { kind: "brand", brand: "springboot" },
  sqlalchemy: { kind: "brand", brand: "sqlalchemy" },
  rest: { kind: "lucide", icon: Webhook },
  go: { kind: "brand", brand: "go" },
  react: { kind: "brand", brand: "react" },
  next: { kind: "brand", brand: "nextdotjs" },
  tailwind: { kind: "brand", brand: "tailwindcss" },
  postgres: { kind: "brand", brand: "postgresql" },
  redis: { kind: "brand", brand: "redis" },
  mongodb: { kind: "brand", brand: "mongodb" },
  docker: { kind: "brand", brand: "docker" },
  linux: { kind: "brand", brand: "linux" },
  git: { kind: "brand", brand: "git" },
  nginx: { kind: "brand", brand: "nginx" },
  cicd: { kind: "lucide", icon: Workflow },
  wordpress: { kind: "brand", brand: "wordpress" },
  "ai-agents": { kind: "lucide", icon: Bot },
  mcp: { kind: "lucide", icon: Network },
  "agent-skills": { kind: "lucide", icon: BookOpen },
  automation: { kind: "lucide", icon: Zap },
  "modular-monolith": { kind: "lucide", icon: Boxes },
  "domain-arch": { kind: "lucide", icon: Network },
  "layered-arch": { kind: "lucide", icon: Layers },
  "multi-tenant": { kind: "lucide", icon: Building2 },
  "ai-int": { kind: "lucide", icon: Sparkles },
  pytest: { kind: "brand", brand: "pytest" },
  vitest: { kind: "brand", brand: "vitest" },
  playwright: { kind: "lucide", icon: Drama },
};
