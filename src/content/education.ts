export const educationContent = {
  studies: [
    {
      id: "bachiller",
      title: { es: "Bachiller Académico", en: "High School Diploma" },
      institution: "Colegio Castilla I.E.D.",
      year: "2020",
    },
    {
      id: "sistemas",
      title: { es: "Ingeniería en Sistemas", en: "Systems Engineering" },
      institution: "Universidad Central",
      year: "2022 – Actual",
    },
  ],
  languages: [
    { code: "es", name: "Español", level: { es: "Nativo", en: "Native" } },
    { code: "en", name: "English", level: { es: "Básico", en: "Basic" } },
  ],
} as const;
