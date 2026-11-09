import { siteConfig } from "@/config/site.config";
import type { Locale } from "@/shared/domain/types";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-[#27272a] bg-[#09090B]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-[#A1A1AA] sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>© 2026 {siteConfig.name} · {locale === "es" ? "Portafolio Full Stack" : "Full Stack Portfolio"}</p>
        <div className="flex gap-4">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}
