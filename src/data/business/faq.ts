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
      label: "Reservaciones y pagos",

      items: [
        {
          question: "¿Con cuánto tiempo de anticipación debo reservar?",
          answer:
            "Recomendamos reservar con al menos 3 meses de anticipación, especialmente para fechas en fin de semana.",
        },

        {
          question: "¿Qué formas de pago aceptan?",
          answer:
            "Aceptamos efectivo, tarjeta de crédito/débito y transferencia bancaria, con un anticipo del 50% para apartar la fecha.",
        },

        {
          question: "¿Puedo cancelar o cambiar la fecha de mi evento?",
          answer:
            "Sí, aplican políticas de cambio y cancelación según el tiempo de anticipación; te las explicamos al momento de firmar el contrato.",
        },

        {
          question: "¿Cómo solicito una cotización?",
          answer:
            "Puedes llamarnos, escribirnos por WhatsApp o llenar el formulario de contacto para recibir una cotización personalizada.",
        },

        {
          question: "¿Puedo hacer una visita antes de contratar?",
          answer:
            "Sí, puedes agendar una visita guiada para conocer las instalaciones antes de reservar.",
        },
      ],
    },

    {
      label: "Instalaciones",

      items: [
        {
          question: "¿Cuál es la capacidad máxima del salón?",
          answer:
            "Nuestro salón principal tiene capacidad para 500 personas, incluyendo el área de jardín al aire libre.",
        },

        {
          question: "¿Cuentan con estacionamiento?",
          answer:
            "Sí, contamos con estacionamiento privado y vigilado para 100 vehículos.",
        },

        {
          question: "¿El salón está climatizado?",
          answer:
            "Sí, el salón principal cuenta con aire acondicionado y calefacción según la temporada.",
        },

        {
          question: "¿Incluyen mobiliario y decoración básica?",
          answer:
            "Sí, el paquete básico incluye mesas, sillas, manteles y centros de mesa sencillos.",
        },

        {
          question: "¿Tienen área para niños?",
          answer:
            "Sí, contamos con un área de jardín adicional que puede habilitarse con inflables y juegos para niños.",
        },

        {
          question:
            "¿El salón cuenta con acceso para personas con discapacidad?",
          answer:
            "Sí, contamos con rampas de acceso y sanitarios adaptados en todas las áreas del salón.",
        },
      ],
    },

    {
      label: "Servicios y el día del evento",

      items: [
        {
          question: "¿El precio de renta incluye el banquete?",
          answer:
            "No, la renta del salón y el banquete se cotizan por separado, aunque contamos con paquetes que combinan ambos con descuento.",
        },

        {
          question: "¿Puedo llevar mi propio proveedor de banquete?",
          answer:
            "Sí, puedes contratar proveedores externos, aunque también ofrecemos servicio de banquete propio con opción a degustación previa.",
        },

        {
          question: "¿Ofrecen paquetes para eventos corporativos?",
          answer:
            "Sí, tenemos paquetes especiales para conferencias, cenas de fin de año y presentaciones de producto.",
        },

        {
          question: "¿Permiten música en vivo o DJ?",
          answer:
            "Sí, puedes contratar tu propio DJ, grupo musical o banda, siempre respetando el horario permitido del salón.",
        },
      ],
    },
  ],
};