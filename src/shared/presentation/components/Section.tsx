export function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mt-20 scroll-mt-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#6C3BFF]">{eyebrow}</p>
      <h2 id={`${id}-title`} className="mt-2 text-2xl font-bold sm:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
