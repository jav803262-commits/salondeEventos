import type { BusinessData } from "@/types";

/**
 * ============================================================================
 * NAVEGACIÓN
 * ============================================================================
 * Estructura del menú principal del sitio (anclas hacia las secciones de
 * la página). Cada `href` debe coincidir EXACTAMENTE con el `id` de la
 * sección correspondiente en el componente que la renderiza.
 *
 * Este archivo es distinto a business.ts porque casi nunca cambia entre
 * clientes: si el template siempre tiene las mismas 5 secciones (Inicio,
 * Servicios, Galería, FAQ, Contacto), esto se toca una sola vez al armar
 * el template y no por cada cliente nuevo.
 *
 * ⚠️ Si agregas o quitas una sección de la página, recuerda:
 * 1) Actualizar el `href` aquí.
 * 2) Poner el mismo `id` en el componente de esa sección (<section id="...">).
 * ============================================================================
 */
export const navigation: BusinessData["navigation"] = [
  {
    label: "Inicio",
    href: "#inicio",
  },
  {
    label: "Servicios",
    href: "#servicios",
  },
  {
    label: "Galería",
    href: "#galeria",
  },
  {
    label: "Preguntas frecuentes",
    href: "#faq",
  },
  {
    label: "Contacto",
    href: "#contacto",
  },
];