import Link from "next/link";
import { ArrowUpRight, Code2, Download, Layers3, Mail, ShieldCheck } from "lucide-react";
import { BrandIcon } from "@/shared/presentation/components/BrandIcon";
import { Navbar } from "@/shared/presentation/components/Navbar";
import { Footer } from "@/shared/presentation/components/Footer";
import { HeroVisual } from "@/shared/presentation/components/HeroVisual";
import { SocialLinks } from "@/shared/presentation/components/SocialLinks";
import { Section } from "@/shared/presentation/components/Section";
import { TechEcosystem } from "@/shared/presentation/components/TechEcosystem";
import { getProfile } from "@/domains/identity";
import { getProjects } from "@/domains/projects";
import { experienceContent } from "@/content/experience";
import { educationContent } from "@/content/education";
import { achievementsContent } from "@/content/achievements";
import { siteConfig } from "@/config/site.config";
import type { Locale } from "@/shared/domain/types";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

const ids = (locale: Locale) => ({
  about: locale === "es" ? "sobre-mi" : "about",
  experience: locale === "es" ? "experiencia" : "experience",
  projects: locale === "es" ? "proyectos" : "projects",
  stack: locale === "es" ? "tecnologias" : "stack",
  education: locale === "es" ? "formacion" : "education",
  contact: locale === "es" ? "contacto" : "contact",
});

// Iconografía de los pilares "Sobre mí", asociada por id estable del dominio.
const PRINCIPLE_ICONS = {
  architecture: Layers3,
  security: ShieldCheck,
  quality: Code2,
} as const;

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "es";
  const t = ids(locale);
  const profile = await getProfile();
  const projects = await getProjects(locale);
  const heroChips = ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript"];

  return (
    <div className="min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)]">
      <Navbar locale={locale} />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* HERO */}
        <div className="grid min-w-0 items-center gap-10 pt-14 pb-8 sm:pt-20 sm:pb-10 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-text)]">
            {profile.role[locale]}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold leading-[1.1] sm:text-[2.75rem]">
            {locale === "es"
              ? "Construyo soluciones de software que resuelven problemas reales."
              : "I build software solutions that solve real problems."}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-[var(--muted)]">{profile.summary[locale]}</p>
          <div className="mt-5 grid w-full min-w-0 grid-cols-3 gap-2 sm:flex sm:flex-wrap" aria-label={locale === "es" ? "Tecnologías representativas" : "Representative technologies"}>
            {heroChips.map((c) => (
              <span key={c} className="flex min-w-0 items-center justify-center whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--surface)] px-2 py-2 text-center text-[11px] text-[var(--muted)] sm:px-3 sm:py-1 sm:text-xs">{c}</span>
            ))}
            <span className="flex min-w-0 items-center justify-center rounded-full border border-[#6C3BFF]/50 bg-[#6C3BFF]/10 px-2 py-2 text-center text-[11px] font-medium leading-tight text-[var(--text)] sm:whitespace-nowrap sm:px-3 sm:py-1 sm:text-xs">
              {locale === "es" ? "+ Más tecnologías" : "+ More technologies"}
            </span>
          </div>
          <p className="mt-3 max-w-2xl text-center text-xs text-[var(--muted)] sm:text-left">
            {locale === "es"
              ? "Stack representativo. Aprendizaje continuo y capacidad de adaptación a nuevas tecnologías y herramientas."
              : "Representative stack. Continuous learning and fast adaptation to new technologies and tools."}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={`#${t.projects}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#6C3BFF] px-6 py-3 font-medium text-white hover:bg-[#5a2fe0]">
              {locale === "es" ? "Ver proyectos" : "View projects"} <ArrowUpRight size={18} />
            </Link>
            <a href={locale === "es" ? "/cv/CV-Carlos-Urrego-ES.pdf" : "/cv/CV-Carlos-Urrego-EN.pdf"} className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-medium hover:border-[#6C3BFF]">
              <Download size={18} /> {locale === "es" ? "Descargar CV" : "Download CV"}
            </a>
          </div>
          </div>
          <div className="flex min-w-0 flex-col gap-4">
            <HeroVisual locale={locale} />
            <SocialLinks locale={locale} />
          </div>
        </div>

        <Section id={t.about} eyebrow={locale === "es" ? "Sobre mí" : "About"} title={profile.aboutHeadline[locale]} compact>
          {profile.aboutBody[locale].map((p, i) => (
            <p key={i} className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] first:mt-0">{p}</p>
          ))}
          <div className="mt-5 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profile.principles.map((pr) => {
              const Icon = PRINCIPLE_ICONS[pr.id];
              return (
                <article key={pr.id} className="group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#6C3BFF]/50 hover:shadow-[0_16px_40px_-24px_rgba(108,59,255,0.4)]">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#6C3BFF]/20 bg-[#6C3BFF]/10 text-[var(--accent-text)]">
                    <Icon size={21} aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold tracking-tight text-[var(--text)]">{pr.title[locale]}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{pr.detail[locale]}</p>
                </article>
              );
            })}
          </div>
        </Section>

        <Section id={t.experience} eyebrow={locale === "es" ? "Experiencia" : "Experience"} title={locale === "es" ? "Trayectoria" : "Career"}>
          {experienceContent.map((e) => (
            <article key={e.id} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <div>
                  <h3 className="text-lg font-semibold">{e.position[locale]} · {e.company}</h3>
                  {e.siteUrl && <a href={e.siteUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--accent-text)]">{e.siteUrl.replace("https://", "")}</a>}
                </div>
                <span className="text-sm text-[var(--muted)]">{e.period}</span>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                {e.bullets[locale].map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </article>
          ))}
        </Section>

        <Section id={t.projects} eyebrow={locale === "es" ? "Proyectos" : "Projects"} title={locale === "es" ? "Proyectos destacados" : "Featured projects"}>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.slug} className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{p.tagline[locale]}</p>
                <p className="mt-3 text-sm text-[var(--muted)]">{p.description[locale]}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => <span key={s.id} className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]">{s.name}</span>)}
                </div>
                <div className="mt-4 flex gap-4 text-sm">
                  <Link href={`/${locale}/projects/${p.slug}/`} className="text-[var(--accent-text)] hover:underline">
                    {locale === "es" ? "Ver caso →" : "View case →"}
                  </Link>
                  {p.siteUrl && <a href={p.siteUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--text)]">Live ↗</a>}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id={t.stack}
          eyebrow="TECHNOLOGY STACK"
          title={locale === "es" ? "Tecnologías y herramientas." : "Technologies & tools."}
        >
          <p className="max-w-3xl text-[var(--muted)]">
            {locale === "es"
              ? "Ecosistema tecnológico con el que desarrollo aplicaciones, plataformas SaaS, APIs y soluciones digitales."
              : "Technology ecosystem I use to build applications, SaaS platforms, APIs and digital solutions."}
          </p>
          <div className="mt-6">
            <TechEcosystem locale={locale} />
          </div>
        </Section>

        <Section id={t.education} eyebrow={locale === "es" ? "Formación" : "Education"} title={locale === "es" ? "Educación e idiomas" : "Education & languages"}>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
              {educationContent.studies.map((s) => (
                <div key={s.id} className="py-2">
                  <p className="font-medium">{s.title[locale]}</p>
                  <p className="text-sm text-[var(--muted)]">{s.institution} · {s.year}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
              {educationContent.languages.map((l) => (
                <p key={l.code} className="py-1 text-sm"><span className="font-medium">{l.name}:</span> <span className="text-[var(--muted)]">{l.level[locale]}</span></p>
              ))}
            </div>
          </div>
        </Section>

        <Section id="logros" eyebrow={locale === "es" ? "Logros" : "Achievements"} title={locale === "es" ? "Resultados verificables" : "Verifiable outcomes"}>
          <ul className="grid gap-4 md:grid-cols-3">
            {achievementsContent.map((a) => (
              <li key={a.id} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="font-semibold">{a.title[locale]}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">{a.detail[locale]}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id={t.contact} eyebrow="Contact" title={locale === "es" ? "Hablemos de tecnología" : "Let's talk tech"}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm hover:border-[#6C3BFF]"><BrandIcon brand="github" size={18} /> GitHub</a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm hover:border-[#6C3BFF]"><BrandIcon brand="linkedin" size={18} /> LinkedIn</a>
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 rounded-xl bg-[#6C3BFF] px-5 py-3 text-sm text-white hover:bg-[#5a2fe0]"><Mail size={18} /> {siteConfig.email}</a>
          </div>
        </Section>
        <div className="h-16" />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
