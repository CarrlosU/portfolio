// Fuente única de verdad para recursos gráficos.
// Módulo de constantes compartido: sin lógica, sin IO, sin dependencias.
// Regla: ningún componente hardcodea rutas /images/*; todo pasa por IMAGES.
// Solo se registran archivos existentes (ver tests/unit/images.test.ts).
export const IMAGES = {
  brand: {
    logo: "/images/brand/csu-logo.png",
  },
} as const;
