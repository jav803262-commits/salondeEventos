import type { BusinessData } from "@/types";

import { IMAGE_PATHS } from "@/constants/image-paths";

const TESTIMONIALS = IMAGE_PATHS.testimonials;

/**
 * Testimonios
 */
export const testimonials: BusinessData["testimonials"] = [
  {
    id: 1,
    name: "Luis Sánchez",
    location: "Oaxaca de Juárez, Oaxaca",
    image: `${TESTIMONIALS}/1.jpg`,
    rating: 5,
    comment:
      "Celebramos la boda de mi hermana aquí y todo fue espectacular. El jardín se veía hermoso y el servicio impecable.",
  },
  {
    id: 2,
    name: "Édgar Ramírez",
    location: "Santa Lucía del Camino, Oaxaca",
    image: `${TESTIMONIALS}/3.jpg`,
    rating: 5,
    comment:
      "Organizamos el evento de fin de año de la empresa y superó nuestras expectativas. Muy recomendado para eventos corporativos.",
  },
  {
    id: 3,
    name: "Fernanda Ortiz",
    location: "Tlalixtac de Cabrera, Oaxaca",
    image: `${TESTIMONIALS}/2.jpg`,
    rating: 4,
    comment:
      "Los XV años de mi hija quedaron increíbles, el equipo estuvo al pendiente de cada detalle durante toda la fiesta.",
  },
];

/**
 * Encabezado de testimonios
 */
export const testimonialsSection: BusinessData["testimonialsSection"] = {
  badge: "Clientes Felices",

  title: "Celebraciones que hicimos realidad",

  description:
    "Cientos de familias y empresas han confiado en nosotros para sus momentos más importantes.",

  maxStars: 5,

  columns: 3,

  showLocation: true,
};