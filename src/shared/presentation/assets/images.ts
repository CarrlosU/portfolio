// Fuente única de verdad para recursos gráficos.
// Módulo de constantes compartido: sin lógica, sin IO, sin dependencias.
// Regla: ningún componente hardcodea rutas /images/*; todo pasa por IMAGES.
// Solo se registran archivos existentes (ver tests/unit/images.test.ts).
// Logo dual por tema: WebP optimizado (letras blancas en dark,
// letras negras en light). El swap lo decide la clase .dark
// del documentElement (ver globals.css): sin JS ni parpadeo.
export const IMAGES = {
  brand: {
    logo: {
      dark: "/images/brand/csu-logo-dark.webp",
      light: "/images/brand/csu-logo-light.webp",
    },
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
