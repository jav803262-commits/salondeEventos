import type { BusinessData } from "@/types";

/**
 * Sección final de contacto y CTA
 */
export const ctaFinal: BusinessData["ctaFinal"] = {
  badge: "Reserva tu fecha",

  title: "¿Listo para planear tu evento?",

  description:
    "Contáctanos hoy mismo y aparta la fecha de tu celebración antes de que se agote.",

  phoneButton: {
    label: "Llamar ahora",
    type: "phone",
  },

  whatsappButton: {
    label: "Cotizar por WhatsApp",
    type: "whatsapp",
  },
};