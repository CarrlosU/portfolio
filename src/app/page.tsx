import Link from "next/link";

export default function RootPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#09090B] text-[#FAFAFA]">
      <p className="text-sm uppercase tracking-widest text-[#A1A1AA]">
        Software Engineer · Full Stack
      </p>
      <h1 className="text-4xl font-bold">Carlos Santiago Urrego Jiménez</h1>
      <div className="flex gap-4">
        <Link
          href="/es/"
          className="rounded-xl bg-[#6C3BFF] px-6 py-3 font-medium hover:bg-[#5a2fe0]"
        >
          Español
        </Link>
        <Link
          href="/en/"
          className="rounded-xl border border-[#27272a] bg-[#15151B] px-6 py-3 font-medium hover:border-[#6C3BFF]"
        >
          English
        </Link>
      </div>
    </main>
  );
}
