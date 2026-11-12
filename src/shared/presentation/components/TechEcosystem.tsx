import { BrandIcon, BRAND_TONE } from "@/shared/presentation/components/BrandIcon";
import { TECH_ICONS } from "@/shared/presentation/assets/tech-brands";
import { technologyContent } from "@/content/technology";
import type { Locale } from "@/shared/domain/types";

function TechBadge({ id, name }: { id: string; name: string }) {
  const entry = TECH_ICONS[id];
  return (
    <span className="inline-flex min-w-0 items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1.5 text-xs text-[var(--text)] transition-colors hover:border-[#6C3BFF]/50">
      {entry?.kind === "brand" ? (
        <BrandIcon brand={entry.brand} size={14} className={BRAND_TONE[entry.brand]} />
      ) : entry ? (
        <entry.icon size={14} aria-hidden="true" className="shrink-0 text-[var(--muted)]" />
      ) : null}
      <span className="truncate">{name}</span>
    </span>
  );
}

// Bloque 02: ecosistema tecnológico por categorías (datos de technology.ts).
export function TechEcosystem({ locale }: { locale: Locale }) {
  return (
    <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {technologyContent.map((group) => (
        <article
          key={group.id}
          className="flex h-full min-w-0 flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors duration-300 hover:border-[#6C3BFF]/50"
        >
          <h4 className="font-semibold tracking-tight text-[var(--text)]">{group.title[locale]}</h4>
          <p className="mt-1 text-xs text-[var(--muted)]">{group.context[locale]}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <TechBadge key={item.id} id={item.id} name={item.name} />
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
