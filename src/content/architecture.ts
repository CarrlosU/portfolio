import type { Locale } from "@/shared/domain/types";

export type ArchNodeIcon = "nextdotjs" | "domains" | "content" | "export" | "cdn";

export interface ArchNode {
  id: string;
  icon: ArchNodeIcon;
  name: string;
  sub: Record<Locale, string>;
  detail: Record<Locale, string>;
}

export const architectureIntro: Record<Locale, string> = {
  es: "Monolito modular orientado a dominios, con contenido versionado y exportación estática. Distribución global de recursos mediante CDN, sin backend propio en esta versión.",
  en: "Domain-oriented modular monolith with versioned content and static export. Global asset delivery via CDN, no dedicated backend in this version.",
};

export const architectureNodes: ArchNode[] = [
  {
    id: "nextjs",
    icon: "nextdotjs",
    name: "Next.js",
    sub: { es: "App", en: "App" },
    detail: { es: "Renderizado y rutas del portafolio.", en: "Portfolio rendering and routing." },
  },
  {
    id: "domains",
    icon: "domains",
    name: "Domains",
    sub: { es: "Módulos", en: "Modules" },
    detail: { es: "Lógica separada por dominios.", en: "Logic split by domains." },
  },
  {
    id: "content",
    icon: "content",
    name: "Content",
    sub: { es: "Versionado", en: "Versioned" },
    detail: { es: "Contenido tipado en el repo.", en: "Typed content in the repo." },
  },
  {
    id: "export",
    icon: "export",
    name: "Static Export",
    sub: { es: "out/", en: "out/" },
    detail: { es: "Sitio estático generado.", en: "Generated static site." },
  },
  {
    id: "cdn",
    icon: "cdn",
    name: "CDN",
    sub: { es: "Distribución", en: "Delivery" },
    detail: { es: "Entrega global en el edge.", en: "Global edge delivery." },
  },
];
