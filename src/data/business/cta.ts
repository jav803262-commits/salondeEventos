import type { BusinessData, CTASections } from "@/types";

/**
 * Sección final de contacto y CTA
 */
export const ctaSections: CTASections = {
  reservation: {
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
  },

  quote: {
    badge: "Cotización",

    title: "Solicita una cotización",

    description:
      "Te enviaremos una propuesta personalizada sin compromiso.",

    phoneButton: {
      label: "Llamar",
      type: "phone",
    },

    whatsappButton: {
      label: "Solicitar cotización",
      type: "whatsapp",
    },
  },

  visit: {
    badge: "Visítanos",

    title: "Conoce nuestras instalaciones",

    description:
      "Agenda una visita y descubre por qué somos la mejor opción para tu evento.",

    phoneButton: {
      label: "Llamar",
      type: "phone",
    },

    whatsappButton: {
      label: "Agendar visita",
      type: "whatsapp",
    },
  },
};