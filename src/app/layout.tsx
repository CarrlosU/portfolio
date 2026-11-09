import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carlos Santiago Urrego Jiménez — Full Stack Engineer",
  description:
    "Portafolio de Carlos Santiago Urrego Jiménez, Software Engineer Full Stack: SaaS, backend, frontend y arquitectura.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#09090B] text-[#FAFAFA]">
        {children}
      </body>
    </html>
  );
}
