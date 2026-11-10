import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--bg)] text-[var(--text)]">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-[var(--muted)]">Page not found / Página no encontrada</p>
        <Link href="/es/" className="mt-6 inline-block text-[var(--accent-text)]">
          → /es · /en
        </Link>
      </div>
    </main>
  );
}
