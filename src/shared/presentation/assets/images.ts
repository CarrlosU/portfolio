// Fuente única de verdad para recursos gráficos.
// Módulo de constantes compartido: sin lógica, sin IO, sin dependencias.
// Regla: ningún componente hardcodea rutas /images/*; todo pasa por IMAGES.
// Solo se registran archivos existentes (ver tests/unit/images.test.ts).
// Logo CSU: C morada sobre transparencia real (verificada ~80% alfa 0).
// Funciona en ambos temas con una sola imagen (PNG maestro + WebP).
export const IMAGES = {
  brand: {
    logo: "/images/brand/csu-logo.webp",
    dimeloia: {
      logo: "/images/brand/dimeloia/logo.webp",
    },
  },
  education: {
    institutions: {
      universidadCentral: "/images/education/universidad-central.webp",
      colegioCastilla: "/images/education/colegio-castilla-ied.webp",
    },
  },
} as const;
