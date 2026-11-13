import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/shared/presentation/assets/images";
import { RootPanelReveal } from "./_components/RootPanelReveal";

export const metadata = {
  title: "Carlos Santiago Urrego Jiménez — Software Engineer",
  description:
    "Personal portfolio entry: Software Engineer · Backend & Full Stack. Choose Español or English.",
};

// Server Component: sin JS de cliente salvo el reveal aislado del panel.
// Escena IDE única, estática, sin temporizadores ni aleatorización.
export default function RootPage() {
  return (
    <main className="relative isolate flex min-h-svh overflow-hidden bg-[#09090B] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 15% 20%, rgba(108,59,255,.20), transparent 42%), radial-gradient(ellipse at 85% 80%, rgba(108,59,255,.13), transparent 38%)",
        }}
      />

      <div className="mx-auto grid min-h-svh w-full min-w-0 max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:px-12">
        <section className="mx-auto w-full min-w-0 max-w-2xl">
          <div className="mb-8 flex min-w-0 items-center gap-3">
            <span className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#6C3BFF]/40 bg-[#6C3BFF]/10 px-3 py-2">
              <Image
                src={IMAGES.brand.logo}
                alt=""
                aria-hidden="true"
                width={20}
                height={18}
                priority
                className="h-5 w-auto object-contain"
              />
              <span className="text-sm font-bold text-[#A78BFA]">CSU</span>
            </span>
            <span className="truncate text-xs font-medium tracking-[.22em] text-zinc-400">
              PERSONAL PORTFOLIO
            </span>
          </div>

          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#A78BFA]">
            Software Engineer · Backend &amp; Full Stack
          </p>

          <h1 className="mt-6 max-w-[13ch] text-balance text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-[1.06] tracking-[-.045em]">
            Carlos Santiago{" "}
            <span className="bg-gradient-to-r from-violet-300 to-[#6C3BFF] bg-clip-text text-transparent">
              Urrego Jiménez
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg">
            Software architecture, web platforms and scalable digital solutions.
          </p>

          <div className="mt-10">
            <p className="mb-4 text-sm text-zinc-400">Explora mi trabajo / Explore my work</p>
            <div className="grid max-w-md grid-cols-2 gap-3">
              <Link
                href="/es/"
                className="flex min-h-14 items-center justify-center rounded-xl bg-[#6C3BFF] px-5 font-semibold transition-colors hover:bg-[#5A2FE0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
              >
                Español <span aria-hidden="true" className="ml-2">→</span>
              </Link>
              <Link
                href="/en/"
                className="flex min-h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[.04] px-5 font-semibold transition-colors hover:border-[#6C3BFF] hover:bg-white/[.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
              >
                English <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </div>
            <p className="mt-6 font-mono text-[11px] tracking-[.18em] text-zinc-500">
              BACKEND · FULL STACK · ARCHITECTURE
            </p>
          </div>
        </section>

        <RootPanelReveal>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#6C3BFF]/20 blur-3xl"
          />
          <div className="relative flex items-center justify-between gap-2 text-xs tracking-widest text-zinc-500">
            <span className="font-mono">CSU / 01</span>
            <span className="font-mono">ENGINEERING</span>
          </div>

          <div className="relative mt-5 min-w-0 overflow-hidden rounded-xl border border-white/10 bg-[#0D0D12]">
            <div className="flex min-w-0 items-center justify-between gap-2 border-b border-white/10 px-3 py-2">
              <p className="min-w-0 truncate font-mono text-xs text-zinc-200">
                quote_service.py
              </p>
              <span className="flex shrink-0 items-center gap-2">
                <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] text-zinc-400">
                  Python
                </span>
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#6C3BFF]" />
              </span>
            </div>
            <pre className="min-w-0 overflow-x-auto p-3 font-mono text-xs leading-5">
              <code className="block min-w-0">
                <span className="block min-h-[1.25rem]"><span className="mr-3 inline-block w-4 select-none text-zinc-600">01</span><span className="text-violet-300">class </span><span className="font-medium text-white">QuoteService</span><span className="text-zinc-200">:</span></span>
                <span className="block min-h-[1.25rem]"><span className="mr-3 inline-block w-4 select-none text-zinc-600">02</span><span className="text-zinc-200">    </span><span className="text-violet-300">async def </span><span className="font-medium text-white">create_quote</span><span className="text-zinc-200">(</span></span>
                <span className="block min-h-[1.25rem]"><span className="mr-3 inline-block w-4 select-none text-zinc-600">03</span><span className="text-zinc-200">        payload: </span><span className="font-medium text-white">QuoteCreate</span></span>
                <span className="block min-h-[1.25rem]"><span className="mr-3 inline-block w-4 select-none text-zinc-600">04</span><span className="text-zinc-200">    ) -&gt; </span><span className="font-medium text-white">Quote</span><span className="text-zinc-200">:</span></span>
                <span className="block min-h-[1.25rem]"><span className="mr-3 inline-block w-4 select-none text-zinc-600">05</span><span className="text-zinc-200">        </span><span className="text-violet-300">return await </span><span className="text-zinc-200">repository</span></span>
                <span className="block min-h-[1.25rem]"><span className="mr-3 inline-block w-4 select-none text-zinc-600">06</span><span className="text-zinc-200">            .</span><span className="font-medium text-white">create</span><span className="text-zinc-200">(payload)</span></span>
              </code>
            </pre>
            <span className="sr-only">Ejemplo estático: servicio Python FastAPI para crear cotizaciones.</span>
          </div>

          <div className="relative mt-5 flex flex-wrap gap-2">
            {["Python", "FastAPI", "PostgreSQL"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1 font-mono text-[11px] text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="relative mt-6 space-y-4 border-t border-white/10 pt-6">
            {[
              ["01", "Backend Engineering"],
              ["02", "Full Stack Development"],
              ["03", "Software Architecture"],
            ].map(([number, label]) => (
              <div key={number} className="flex items-center gap-4">
                <span className="font-mono text-xs text-[#A78BFA]">{number}</span>
                <span className="text-sm font-medium text-zinc-300">{label}</span>
              </div>
            ))}
          </div>
        </RootPanelReveal>
      </div>
    </main>
  );
}
