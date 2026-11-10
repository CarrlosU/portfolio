import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider, THEME_INIT_SCRIPT } from "@/shared/presentation/theme/theme-provider";

export const metadata: Metadata = {
  title: "Carlos Santiago Urrego Jiménez — Full Stack Engineer",
  description:
    "Portafolio de Carlos Santiago Urrego Jiménez, Software Engineer Full Stack: SaaS, backend, frontend y arquitectura.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <meta name="theme-color" content="#09090B" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#F7F7FA" media="(prefers-color-scheme: light)" />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--text)]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
