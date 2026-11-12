// Fuente única de verdad para recursos gráficos.
// Módulo de constantes compartido: sin lógica, sin IO, sin dependencias.
// Regla: ningún componente hardcodea rutas /images/*; todo pasa por IMAGES.
// Solo se registran archivos existentes (ver tests/unit/images.test.ts).
// Logo dual por tema: WebP optimizado (PNG maestros conservados en la misma
// carpeta hasta validar que el WebP no introduce halos ni degradados).
export const IMAGES = {
  brand: {
    logo: {
      dark: "/images/brand/csu-logo-dark.webp",
      light: "/images/brand/csu-logo-light.webp",
    },
  },
  education: {
    institutions: {
      universidadCentral: "/images/education/universidad-central.webp",
      colegioCastilla: "/images/education/colegio-castilla-ied.webp",
    },
  },
} as const;
