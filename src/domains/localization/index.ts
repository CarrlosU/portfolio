import type { Locale } from "@/shared/domain/types";
import { locales, defaultLocale } from "@/shared/domain/types";

export function isValidLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}

export { locales, defaultLocale };
