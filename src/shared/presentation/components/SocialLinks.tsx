import { BrandIcon } from "@/shared/presentation/components/BrandIcon";
import { Mail } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import type { Locale } from "@/shared/domain/types";

const LINK_CLASS =
  "inline-flex min-w-0 items-center justify-center gap-1.5 truncate rounded-xl border border-[var(--border)] bg-[var(--surface)] px-2 py-2.5 text-xs font-medium text-[var(--muted)] transition-colors hover:border-[#6C3BFF]/50 hover:text-[var(--text)]";

// Enlaces sociales bajo el panel del Hero: logotipos oficiales
// (Simple Icons) + Lucide para email, adaptados a ambos temas.
export function SocialLinks({ locale }: { locale: Locale }) {
  return (
    <div
      className="grid w-full min-w-0 grid-cols-3 gap-2"
      aria-label={locale === "es" ? "Enlaces sociales" : "Social links"}
    >
      <a
        href={siteConfig.github}
        target="_blank"
        rel="noopener noreferrer"
        className={LINK_CLASS}
      >
        <BrandIcon brand="github" size={15} className="shrink-0" /> GitHub
      </a>
      <a
        href={siteConfig.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={LINK_CLASS}
      >
        <BrandIcon brand="linkedin" size={15} className="shrink-0" /> LinkedIn
      </a>
      <a href={`mailto:${siteConfig.email}`} className={LINK_CLASS}>
        <Mail size={15} aria-hidden="true" className="shrink-0" /> Email
      </a>
    </div>
  );
}
