import type { Locale } from "@/shared/domain/types";

export interface NavItem {
  id: string;
  href: Record<Locale, string>;
  label: Record<Locale, string>;
}

export const navigationConfig: NavItem[] = [
  { id: "about", href: { es: "/es#sobre-mi", en: "/en#about" }, label: { es: "Sobre mí", en: "About" } },
  { id: "experience", href: { es: "/es#experiencia", en: "/en#experience" }, label: { es: "Experiencia", en: "Experience" } },
  { id: "projects", href: { es: "/es#proyectos", en: "/en#projects" }, label: { es: "Proyectos", en: "Projects" } },
  { id: "stack", href: { es: "/es#tecnologias", en: "/en#stack" }, label: { es: "Tecnologías", en: "Stack" } },
  { id: "education", href: { es: "/es#formacion", en: "/en#education" }, label: { es: "Formación", en: "Education" } },
  { id: "contact", href: { es: "/es#contacto", en: "/en#contact" }, label: { es: "Contacto", en: "Contact" } },
];
