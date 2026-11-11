export function Section({ id, eyebrow, title, children, compact = false }: { id: string; eyebrow: string; title: string; children: React.ReactNode; compact?: boolean }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={compact ? "mt-6 scroll-mt-24 sm:mt-8" : "mt-20 scroll-mt-24"}>
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-text)]">{eyebrow}</p>
      <h2 id={`${id}-title`} className="mt-2 text-2xl font-bold sm:text-3xl">{title}</h2>
      <div className={compact ? "mt-4" : "mt-6"}>{children}</div>
    </section>
  );
}
