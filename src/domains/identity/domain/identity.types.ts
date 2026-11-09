import type { Locale } from "@/shared/domain/types";

export interface Profile {
  name: string;
  role: Record<Locale, string>;
  summary: Record<Locale, string>;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  available: Record<Locale, string>;
}
