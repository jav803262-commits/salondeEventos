import type { BusinessData } from "@/types";

import { IMAGE_PATHS } from "@/constants/image-paths";

const HERO = IMAGE_PATHS.hero;

/**
 * Hero principal
 */
export const heroSection: BusinessData["heroSection"] = {
  badge: "El escenario perfecto para tu celebración",

  title: "Haz de tu evento un momento inolvidable",

  subtitle:
    "Salón de fiestas y eventos con jardines, salones climatizados y todo lo necesario para bodas, XV años, graduaciones y celebraciones corporativas.",

  primaryButton: {
    text: "WhatsApp",
    // ✅ Verificado: coincide con el id "#contacto" de `navigation`.
    href: "#contacto",
  },

  secondaryButton: {
    text: "Llamar ahora",
    // ✅ Verificado: mismo número que business.phone/whatsapp.phone.
    href: "tel:+529515557788",
  },

  image: {
    src: `${HERO}/hero-a.jpg`,
    alt: "Salón Jardín Esmeralda, área de jardín para eventos",
  },

  features: [
    {
      text: "Jardín al aire libre y salón climatizado",
    },
    {
      text: "Estacionamiento privado para 100 autos",
    },
    {
      text: "Paquetes personalizados con banquete incluido",
    },
  ],

  stats: [
    {
      value: "+300",
      label: "Eventos realizados",
    },
    {
      value: "500",
      label: "Invitados de capacidad máxima",
    },
    {
      value: "12+",
      label: "Años de experiencia",
    },
  ],

  showStats: false,

  showSecondaryButton: true,

  showImage: true,
};