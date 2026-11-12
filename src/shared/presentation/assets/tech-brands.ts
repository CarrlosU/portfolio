import type { LucideIcon } from "lucide-react";
import { Database, Drama, Sparkles, Webhook } from "lucide-react";
import type { Brand } from "@/shared/presentation/components/BrandIcon";

export type TechIcon = { kind: "brand"; brand: Brand } | { kind: "lucide"; icon: LucideIcon };

// Definición única de marca por tecnología: cada id se declara una sola vez
// y se muestra igual en todas las categorías donde aparezca (sin duplicados).
// Marcas sin logotipo Simple Icons (SQL, REST, IA, Playwright) usan Lucide.
export const TECH_ICONS: Record<string, TechIcon> = {
  python: { kind: "brand", brand: "python" },
  javascript: { kind: "brand", brand: "javascript" },
  ts: { kind: "brand", brand: "typescript" },
  sql: { kind: "lucide", icon: Database },
  fastapi: { kind: "brand", brand: "fastapi" },
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
  "ai-int": { kind: "lucide", icon: Sparkles },
  pytest: { kind: "brand", brand: "pytest" },
  vitest: { kind: "brand", brand: "vitest" },
  playwright: { kind: "lucide", icon: Drama },
};
