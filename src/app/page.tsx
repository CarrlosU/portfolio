import Link from "next/link";
import { RootRedirect } from "./_components/RootRedirect";

export const metadata = {
  title: "Carlos Santiago Urrego Jiménez — Software Engineer",
  description: "Redirigiendo al portafolio en español.",
};

// Server Component: redirección inmediata a /es/.
// Compatible con `output: export`: JS (replace) + meta refresh + enlace fallback.
export default function RootPage() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-[#09090B] text-white">
      <meta httpEquiv="refresh" content="0; url=/es/" />
      <RootRedirect />
      <p className="text-sm text-zinc-400">
        Abriendo portafolio…{" "}
        <Link
          href="/es/"
          className="font-medium text-violet-300 underline underline-offset-4 hover:text-violet-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
        >
          Ver portafolio en español
        </Link>
      </p>
    </main>
  );
}
