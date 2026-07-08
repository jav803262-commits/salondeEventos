import type { BusinessData } from "@/types";

/**
 * Encabezado de la sección de servicios
 */
export const servicesSection: BusinessData["servicesSection"] = {
  badge: "Servicios",
  title: "Todo lo que necesitas para tu evento",
  description:
    "Ofrecemos paquetes completos y servicios individuales para que tu celebración salga perfecta, sin complicaciones.",
  columns: 3,
  subtitle: "Paquetes flexibles para cada tipo de celebración",
};

/**
 * Listado de servicios
 */
export const services: BusinessData["services"] = [
  {
    // ✅ Verificado: formato de id consistente (con espacio) en los 3 elementos.
    id: 1,
    title: "Renta de salón",

    description:
      "Salón principal climatizado con capacidad para 500 personas, más área de jardín al aire libre.",
    icon: "Building",
  },

  {
    id: 2,
    title: "Banquete y coctelería",

    description:
      "Menús personalizados, servicio de meseros y barra libre con opciones para todos los gustos.",
    icon: "Martini",
  },

  {
    id: 3,
    title: "Decoración temática",

    description:
      "Diseño de mobiliario, iluminación y ambientación según el estilo de tu evento.",
    icon: "PartyPopper",
  },
];