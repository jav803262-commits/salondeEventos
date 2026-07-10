import type { BusinessData } from "@/types";

/**
 * ============================================================================
 * DATOS GENERALES DEL NEGOCIO
 * ============================================================================
 * Este archivo SOLO contiene información propia del negocio: identidad,
 * contacto directo (teléfono/email), ubicación física y horarios.
 *
 * A propósito NO incluye:
 * - `navigation` → vive en navigation.ts (estructura del sitio, casi nunca
 *   la toca el cliente final, es más "config del template").
 * - `seo` → vive en seo.ts (se edita seguido para marketing/posicionamiento,
 *   tiene un ciclo de cambio distinto al de los datos del negocio).
 * - `whatsapp` → vive en contact.ts (es un canal de contacto, no un dato
 *   de identidad del negocio).
 *
 * Si este archivo se usa como plantilla para varios clientes, este es
 * prácticamente el único archivo que cambia de un cliente a otro junto
 * con hero.ts, services.ts y testimonials.ts.
 * ============================================================================
 */
export const business: BusinessData["business"] = {
  name: "Salón Jardín Esmeralda",

  // ✅ Verificado: mismo número usado en whatsapp.phone y en el tel: del hero.
  phone: "+529711459413",
  displayPhone: "(971) 145-9413",

  email: "eventos@jardinesmeralda.com",

  /**
   * Dirección física
   */
  address: {
    street: "Av. de las Rosas 245",

    // ✅ Verificado: sin espacios accidentales.
    city: "Oaxaca de Juárez",

    state: "Oaxaca",

    postalCode: "68000",

    country: "MX",

    // ✅ Verificado: coincide con googleMapsUrl y con las coordenadas del embed.
    latitude: "17.0654",

    longitude: "-96.7237",
  },

  /**
   * Google Maps
   */
  // ✅ Verificado: mismas coordenadas que latitude/longitude y mapEmbedUrl.
  googleMapsUrl: "https://maps.google.com/?q=17.0654,-96.7237",

  // ✅ Verificado: usa las mismas coordenadas (2d=-96.7237, 3d=17.0654)
  // que latitude/longitude y googleMapsUrl de arriba.
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.123456789!2d-96.7237!3d17.0654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c730a5f1234567%3A0xabcdef1234567890!2sSal%C3%B3n%20Jard%C3%ADn%20Esmeralda!5e0!3m2!1ses-419!2smx!4v1782057999999!5m2!1ses-419!2smx",

  /**
   * Horarios
   */
  hours: {
    monday: "Cerrado",
    tuesday: "10:00 - 18:00",
    wednesday: "10:00 - 18:00",
    thursday: "10:00 - 18:00",
    friday: "10:00 - 20:00",
    saturday: "09:00 - 23:00",
    sunday: "09:00 - 21:00",
  },

  /**
   * Cobertura
   */
  serviceArea: [
    "Oaxaca de Juárez",
    "Santa Lucía del Camino",
    "San Agustín Yatareni",
    "Tlalixtac de Cabrera",
  ],
};