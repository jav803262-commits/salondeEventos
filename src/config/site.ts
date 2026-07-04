/**
 * ============================================================================
 * SITE CONFIG
 * ============================================================================
 *
 * Configuración técnica y SEO del proyecto.
 *
 * Este archivo normalmente lo configura el desarrollador.
 *
 * Ejemplos:
 * - Dominio
 * - SEO
 * - Open Graph
 * - Redes sociales
 * - Analytics
 * - Tipo de negocio para Schema.org
 * ============================================================================
 */

export const siteConfig = {
  /**
   * Tipo de negocio Schema.org
   */
  businessType: "FuneralHome" as const,

  /**
   * URL canónica
   */
  url: "https://funerariarios.com",

  /**
   * Descripción SEO
   */
  description:
    "Servicios funerarios profesionales con atención humana y acompañamiento las 24 horas.",

  /**
   * Imagen para Open Graph
   */
  image: "/og-image.jpg",

  /**
   * Keywords SEO
   */
  keywords: [
    "funeraria",
    "servicios funerarios",
    "funeraria oaxaca",
    "velación",
    "cremación",
  ],

  /**
   * Configuración regional
   */
  locale: "es_MX",

  /**
   * Redes sociales
   */
  social: {
    facebook: "",

    instagram: "",

    tiktok: "",
  },

  /**
   * Configuración SEO
   */
  seo: {
    robots: true,

    sitemap: true,

    openGraph: true,

    twitterCard: true,
  },
} as const;