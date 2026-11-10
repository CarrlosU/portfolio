import Link from "next/link";
import { Navbar } from "@/shared/presentation/components/Navbar";
import { Footer } from "@/shared/presentation/components/Footer";
import { getProjectBySlug } from "@/domains/projects";
import type { Locale } from "@/shared/domain/types";

export function generateStaticParams() {
  const locales = ["es", "en"];
  const slugs = ["dimeloia", "jumpproxy-engine", "captcha-bypass", "jetx-collector"];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

const details = (locale: Locale) => ({
  back: locale === "es" ? "Volver" : "Back",
  problem: locale === "es" ? "1. Problema" : "1. Problem",
  goal: locale === "es" ? "2. Objetivo" : "2. Goal",
  role: locale === "es" ? "3. Mi responsabilidad" : "3. My responsibility",
  arch: locale === "es" ? "4. Arquitectura" : "4. Architecture",
  stack: locale === "es" ? "5. Tecnologías y por qué" : "5. Stack & why",
  challenges: locale === "es" ? "6. Retos y soluciones" : "6. Challenges & fixes",
  results: locale === "es" ? "7. Resultados verificables" : "7. Verifiable results",
  demo: locale === "es" ? "8. Demo / capturas" : "8. Demo / screenshots",
  repo: locale === "es" ? "9. Repositorio" : "9. Repository",
});

export default async function ProjectPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale: Locale = raw === "en" ? "en" : "es";
  const d = details(locale);
  const project = await getProjectBySlug(slug, locale);
  if (!project) {
    return <main className="flex min-h-screen items-center justify-center bg-[var(--bg)] text-[var(--text)]"><p>Not found</p></main>;
  }
  return (
    <div className="min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)]">
      <Navbar locale={locale} />
      <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
        <Link href={`/${locale}/`} className="text-sm text-[var(--muted)] hover:text-[var(--text)]">← {d.back}</Link>
        <p className="mt-4 text-xs uppercase tracking-widest text-[var(--accent-text)]">Case study</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{project.name}</h1>
        <p className="mt-2 text-[var(--muted)]">{project.tagline[locale]}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => <span key={s.id} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs">{s.name}</span>)}
        </div>
        {[
          [d.problem, project.problem[locale]],
          [d.goal, project.description[locale]],
          [d.role, project.role[locale]],
        ].map(([h, b]) => (
          <section key={h} className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="font-semibold">{h}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{b}</p>
          </section>
        ))}
        <section className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <h2 className="font-semibold">{d.arch}</h2>
          <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs sm:grid-cols-4">
            {["Client", "Next.js", "FastAPI", "PostgreSQL"].map((n) => <div key={n} className="rounded-lg bg-[var(--surface-2)] px-2 py-3">{n}</div>)}
          </div>
          <p className="mt-3 text-sm text-[var(--muted)]">{locale === "es" ? "Multi-tenant, stateless donde aplica, persistencia externalizada." : "Multi-tenant, stateless where it applies, externalized persistence."}</p>
        </section>
        <section className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <h2 className="font-semibold">{d.stack}</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">{locale === "es" ? "FastAPI por productividad y tipado, PostgreSQL por integridad relacional, Redis por caché/colas, React por ecosistema." : "FastAPI for productivity, PostgreSQL for relational integrity, Redis for cache/queues, React for ecosystem."}</p>
        </section>
        <section className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <h2 className="font-semibold">{d.challenges}</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">{locale === "es" ? "Concurrencia, voz/NLP, y consistencia de datos resueltos con colas, reintentos y validación." : "Concurrency, voice/NLP and data consistency solved with queues, retries and validation."}</p>
        </section>
        <section className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <h2 className="font-semibold">{d.results}</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">{locale === "es" ? "Sistema en producción, sin métricas inventadas. Evidencia: sitio y demo." : "Production system, no invented metrics. Evidence: site and demo."}</p>
        </section>
        <section className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <h2 className="font-semibold">{d.demo}</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">Screenshots pendientes de autorización.</p>
          {project.siteUrl && <a href={project.siteUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-[var(--accent-text)]">{project.siteUrl} ↗</a>}
        </section>
        <section className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <h2 className="font-semibold">{d.repo}</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">{project.repoUrl ?? (locale === "es" ? "Privado por confidencialidad del cliente." : "Private for client confidentiality.")}</p>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
