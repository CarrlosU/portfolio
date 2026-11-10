import Link from "next/link";
import { Globe, Briefcase, Mail, ArrowUpRight, Download } from "lucide-react";
import { Navbar } from "@/shared/presentation/components/Navbar";
import { Footer } from "@/shared/presentation/components/Footer";
import { HeroVisual } from "@/shared/presentation/components/HeroVisual";
import { Section } from "@/shared/presentation/components/Section";
import { getProfile } from "@/domains/identity";
import { getProjects } from "@/domains/projects";
import { experienceContent } from "@/content/experience";
import { technologyContent } from "@/content/technology";
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

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "es";
  const t = ids(locale);
  const profile = await getProfile();
  const projects = await getProjects(locale);
  const heroChips = ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript"];

  return (
    <div className="min-h-screen overflow-x-clip bg-[#09090B] text-[#FAFAFA]">
      <Navbar locale={locale} />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* HERO */}
        <div className="grid min-w-0 items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
          <p className="inline-block rounded-full border border-[#27272a] bg-[#15151B] px-3 py-1 text-xs text-[#A1A1AA]">
            {profile.available[locale]}
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#6C3BFF]">
            {profile.role[locale]}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold leading-[1.1] sm:text-[2.75rem]">
            {locale === "es"
              ? "Construyo soluciones de software que resuelven problemas reales."
              : "I build software solutions that solve real problems."}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-[#A1A1AA]">{profile.summary[locale]}</p>
          <div className="mt-5 flex max-w-full flex-wrap gap-2" aria-label={locale === "es" ? "Tecnologías representativas" : "Representative technologies"}>
            {heroChips.map((c) => (
              <span key={c} className="rounded-full border border-[#27272a] bg-[#15151B] px-3 py-1 text-xs text-[#A1A1AA]">{c}</span>
            ))}
            <span className="rounded-full border border-[#6C3BFF]/50 bg-[#6C3BFF]/10 px-3 py-1 text-xs font-medium text-[#FAFAFA]">
              {locale === "es" ? "+ Más tecnologías" : "+ More technologies"}
            </span>
          </div>
          <p className="mt-3 max-w-2xl text-xs text-[#A1A1AA]">
            {locale === "es"
              ? "Stack representativo. Aprendizaje continuo y capacidad de adaptación a nuevas tecnologías y herramientas."
              : "Representative stack. Continuous learning and fast adaptation to new technologies and tools."}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={`#${t.projects}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#6C3BFF] px-6 py-3 font-medium hover:bg-[#5a2fe0]">
              {locale === "es" ? "Ver proyectos" : "View projects"} <ArrowUpRight size={18} />
            </Link>
            <a href={locale === "es" ? "/cv/CV-Carlos-Urrego-ES.pdf" : "/cv/CV-Carlos-Urrego-EN.pdf"} className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#27272a] bg-[#15151B] px-6 py-3 font-medium hover:border-[#6C3BFF]">
              <Download size={18} /> {locale === "es" ? "Descargar CV" : "Download CV"}
            </a>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#A1A1AA]">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-white">
              GitHub <ArrowUpRight size={14} />
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-white">
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1 hover:text-white">
              Email <ArrowUpRight size={14} />
            </a>
          </div>
          </div>
          <HeroVisual locale={locale} />
        </div>

        <Section id={t.about} eyebrow={locale === "es" ? "Sobre mí" : "About"} title={profile.aboutHeadline[locale]}>
          {profile.aboutBody[locale].map((p, i) => (
            <p key={i} className="mt-3 max-w-3xl text-[#A1A1AA] first:mt-0">{p}</p>
          ))}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profile.principles.map((pr) => (
              <article key={pr.id} className="rounded-2xl border border-[#27272a] bg-[#15151B] p-5">
                <h3 className="font-semibold">{pr.title[locale]}</h3>
                <p className="mt-2 text-sm text-[#A1A1AA]">{pr.detail[locale]}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id={t.experience} eyebrow={locale === "es" ? "Experiencia" : "Experience"} title={locale === "es" ? "Trayectoria" : "Career"}>
          {experienceContent.map((e) => (
            <article key={e.id} className="rounded-2xl border border-[#27272a] bg-[#15151B] p-5 sm:p-6">
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <div>
                  <h3 className="text-lg font-semibold">{e.position[locale]} · {e.company}</h3>
                  {e.siteUrl && <a href={e.siteUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[#6C3BFF]">{e.siteUrl.replace("https://", "")}</a>}
                </div>
                <span className="text-sm text-[#A1A1AA]">{e.period}</span>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#A1A1AA]">
                {e.bullets[locale].map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </article>
          ))}
        </Section>

        <Section id={t.projects} eyebrow={locale === "es" ? "Proyectos" : "Projects"} title={locale === "es" ? "Proyectos destacados" : "Featured projects"}>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.slug} className="flex flex-col rounded-2xl border border-[#27272a] bg-[#15151B] p-5 sm:p-6">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-[#A1A1AA]">{p.tagline[locale]}</p>
                <p className="mt-3 text-sm text-[#A1A1AA]">{p.description[locale]}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => <span key={s.id} className="rounded-full border border-[#27272a] px-2.5 py-1 text-xs text-[#A1A1AA]">{s.name}</span>)}
                </div>
                <div className="mt-4 flex gap-4 text-sm">
                  <Link href={`/${locale}/projects/${p.slug}/`} className="text-[#6C3BFF] hover:underline">
                    {locale === "es" ? "Ver caso →" : "View case →"}
                  </Link>
                  {p.siteUrl && <a href={p.siteUrl} target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-white">Live ↗</a>}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="arquitectura" eyebrow="Architecture" title={locale === "es" ? "Arquitectura y decisiones" : "Architecture & decisions"}>
          <div className="rounded-2xl border border-[#27272a] bg-[#15151B] p-5 text-sm sm:p-6">
            <p className="text-[#A1A1AA]">{locale === "es" ? "Monolito modular por dominios, export estático, persistencia en contenido versionado. Sin backend en v1; escalado horizontal vía CDN." : "Modular monolith, static export, versioned content. No backend in v1; horizontal scaling via CDN."}</p>
            <div className="mt-4 grid gap-2 text-center text-xs sm:grid-cols-5">
              {["Next.js", "Domains", "Content", "out/", "CDN"].map((n) => (
                <div key={n} className="rounded-lg border border-[#27272a] bg-[#1c1c22] px-2 py-3">{n}</div>
              ))}
            </div>
          </div>
        </Section>

        <Section id={t.stack} eyebrow="Stack" title={locale === "es" ? "Tecnologías en contexto" : "Stack in context"}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologyContent.map((g) => (
              <div key={g.id} className="rounded-2xl border border-[#27272a] bg-[#15151B] p-5">
                <h3 className="font-semibold">{g.title[locale]}</h3>
                <p className="mt-1 text-xs text-[#A1A1AA]">{g.context[locale]}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((i) => <span key={i.id} className="rounded-full bg-[#1c1c22] px-2.5 py-1 text-xs">{i.name}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id={t.education} eyebrow={locale === "es" ? "Formación" : "Education"} title={locale === "es" ? "Educación e idiomas" : "Education & languages"}>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#27272a] bg-[#15151B] p-5">
              {educationContent.studies.map((s) => (
                <div key={s.id} className="py-2">
                  <p className="font-medium">{s.title[locale]}</p>
                  <p className="text-sm text-[#A1A1AA]">{s.institution} · {s.year}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-[#27272a] bg-[#15151B] p-5">
              {educationContent.languages.map((l) => (
                <p key={l.code} className="py-1 text-sm"><span className="font-medium">{l.name}:</span> <span className="text-[#A1A1AA]">{l.level[locale]}</span></p>
              ))}
            </div>
          </div>
        </Section>

        <Section id="logros" eyebrow={locale === "es" ? "Logros" : "Achievements"} title={locale === "es" ? "Resultados verificables" : "Verifiable outcomes"}>
          <ul className="grid gap-4 md:grid-cols-3">
            {achievementsContent.map((a) => (
              <li key={a.id} className="rounded-2xl border border-[#27272a] bg-[#15151B] p-5">
                <p className="font-semibold">{a.title[locale]}</p>
                <p className="mt-2 text-sm text-[#A1A1AA]">{a.detail[locale]}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id={t.contact} eyebrow="Contact" title={locale === "es" ? "Hablemos de tecnología" : "Let's talk tech"}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-[#27272a] bg-[#15151B] px-5 py-3 text-sm hover:border-[#6C3BFF]"><Globe size={18} /> GitHub</a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-[#27272a] bg-[#15151B] px-5 py-3 text-sm hover:border-[#6C3BFF]"><Briefcase size={18} /> LinkedIn</a>
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 rounded-xl bg-[#6C3BFF] px-5 py-3 text-sm hover:bg-[#5a2fe0]"><Mail size={18} /> {siteConfig.email}</a>
          </div>
        </Section>
        <div className="h-16" />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
