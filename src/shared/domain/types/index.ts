export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export type TechnologyCategory =
  | "backend"
  | "frontend"
  | "database"
  | "devops"
  | "mobile"
  | "ai"
  | "testing"
  | "cms";

export interface TechnologyReference {
  id: string;
  name: string;
  category: TechnologyCategory;
}

export interface Localized<T> {
  es: T;
  en: T;
}
