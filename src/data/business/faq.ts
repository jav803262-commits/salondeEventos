import type { BusinessData } from "@/types";

/**
 * Preguntas frecuentes
 */
export const faqSection: BusinessData["faqSection"] = {
  badge: "Preguntas Frecuentes",

  title: "Resolvemos tus dudas",

  description:
    "Todo lo que necesitas saber antes de reservar tu evento con nosotros.",

categories: [
  {
    label: "Reservaciones",

    items: [
      {
        question: "¿Cómo puedo reservar una fecha?",
        answer:
          "Puedes reservar llamándonos, por WhatsApp o mediante el formulario de contacto. Para confirmar la fecha solicitamos un anticipo."
      },

      {
        question: "¿Con cuánto tiempo de anticipación debo reservar?",
        answer:
          "Lo ideal es reservar con al menos 3 meses de anticipación, especialmente para fechas de alta demanda."
      },

      {
        question: "¿Qué formas de pago aceptan?",
        answer:
          "Aceptamos efectivo, transferencia bancaria y tarjetas de crédito o débito."
      }
    ]
  },

  {
    label: "El salón",

    items: [
      {
        question: "¿Cuál es la capacidad y qué incluye la renta?",
        answer:
          "Nuestro salón tiene capacidad para 500 personas. La renta incluye mobiliario básico y podrás conocer todos los servicios incluidos al solicitar una cotización."
      },

      {
        question: "¿Cuentan con estacionamiento y acceso para personas con discapacidad?",
        answer:
          "Sí, contamos con estacionamiento privado, rampas de acceso y sanitarios adaptados."
      }
    ]
  },

  {
    label: "Servicios",

    items: [
      {
        question: "¿Puedo contratar proveedores externos?",
        answer:
          "Sí. Puedes traer tu propio banquete, DJ o grupo musical, siempre respetando las políticas del salón."
      },

      {
        question: "¿Ofrecen paquetes para diferentes tipos de eventos?",
        answer:
          "Sí. Contamos con opciones para bodas, XV años, cumpleaños, eventos empresariales y reuniones sociales."
      },

      {
        question: "¿Puedo visitar el salón antes de contratar?",
        answer:
          "Sí. Agenda una visita sin compromiso para conocer las instalaciones y resolver cualquier duda."
      }
    ]
  }
],
};