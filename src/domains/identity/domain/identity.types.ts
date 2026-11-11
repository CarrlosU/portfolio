import type { Locale } from "@/shared/domain/types";

export interface Principle {
  id: "architecture" | "security" | "quality";
  title: Record<Locale, string>;
  detail: Record<Locale, string>;
}

export interface Profile {
  name: string;
  role: Record<Locale, string>;
  summary: Record<Locale, string>;
  aboutHeadline: Record<Locale, string>;
  aboutBody: Record<Locale, string[]>;
  principles: Principle[];
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}
