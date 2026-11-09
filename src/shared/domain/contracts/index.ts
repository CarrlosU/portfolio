import type { Locale } from "../types";

export interface LocalizedText {
  es: string;
  en: string;
}

export function pickLocale<T>(text: LocalizedText | string, locale: Locale): string {
  if (typeof text === "string") return text;
  return text[locale];
}
