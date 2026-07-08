import type { BusinessData } from "@/types";

/**
 * ============================================================================
 * SEO
 * ============================================================================
 * Metadatos para posicionamiento y para las tarjetas que se muestran al
 * compartir el link (Open Graph / redes sociales).
 *
 * Este archivo se separa de business.ts a propósito: el equipo de marketing
 * o el propio cliente suele pedir ajustes de SEO (título, keywords,
 * descripción) con más frecuencia que cambios en los datos "duros" del
 * negocio (teléfono, dirección, horarios). Tenerlo aparte evita tocar
 * business.ts solo por un ajuste de keywords.
 *
 * Campos:
 * - title       → aparece en la pestaña del navegador y en resultados de Google.
 *                 Recomendado: 50-60 caracteres para no truncarse en el buscador.
 * - description → texto bajo el título en resultados de Google. Recomendado:
 *                 150-160 caracteres.
 * - keywords    → palabras clave objetivo (peso bajo en SEO moderno, pero
 *                 útil como referencia interna de para qué búsquedas se
 *                 optimizó el sitio).
 * - siteUrl     → URL canónica del sitio, sin slash final.
 * - ogImage     → imagen que se muestra al compartir el link en redes
 *                 sociales (WhatsApp, Facebook, etc). Idealmente 1200x630px.
 * ============================================================================
 */
export const seo: BusinessData["seo"] = {
  title: "Salón Jardín Esmeralda | Salón de Fiestas y Eventos en Oaxaca",
  description:
    "Salón de fiestas y eventos con jardín y salón climatizado en Oaxaca de Juárez. Ideal para bodas, XV años y eventos corporativos.",

  keywords: [
    "salón de fiestas",
    "salón de eventos oaxaca",
    "renta de salón",
    "bodas oaxaca",
    "xv años oaxaca",
  ],

  siteUrl: "https://jardinesmeralda.com",

  ogImage: "/og-image.jpg",
};