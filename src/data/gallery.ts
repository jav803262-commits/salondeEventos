import { IMAGE_PATHS } from "@/constants/image-paths";



const GALLERY_PATHS = {
  instalaciones: `${IMAGE_PATHS.gallery}/instalaciones`,
  areas: `${IMAGE_PATHS.gallery}/areas`,
  jardines: `${IMAGE_PATHS.gallery}/jardines`,
  eventos: `${IMAGE_PATHS.gallery}/eventos`,
} as const;


import type {
  GalleryCategory,
  GalleryData,
  GalleryImage,
  GallerySection,
} from "@/types";

const section: GallerySection = {
  badge: "Galería",

  title: "Descubre nuestras instalaciones",

  description:
    "Explora algunos de nuestros espacios y conoce el ambiente que ofrecemos para acompañar a cada familia con respeto y tranquilidad.",

  previewCount: 4,

  buttonText: "Ver galería completa",

  buttonHref: "/galeria",
};

const categories: GalleryCategory[] = [
  {
    id: 1,
    name: "Instalaciones",
    slug: "instalaciones",
  },
];

const images: GalleryImage[] = [
  {
    id: 1,
    src: `${GALLERY_PATHS.instalaciones}/salon-evento1.jpg`,
    alt: "Sala principal de velación",

    title: "Sala principal",

    description:
      "Espacio cómodo y tranquilo para acompañar a las familias.",

    categorySlug: "instalaciones",

    isfeatured: true,
    order: 1,
  },

  {
    id: 2,
    src: `${GALLERY_PATHS.instalaciones}/salon-evento2.jpg`,
    alt: "Área de recepción",

    title: "Recepción",

    description:
      "Área destinada a brindar atención personalizada.",

    categorySlug: "instalaciones",
    order: 2,
  },

  {
    id: 3,
    src: `${GALLERY_PATHS.instalaciones}/salon-evento3.jpg`,
    alt: "Capilla",

    title: "Capilla",

    description:
      "Espacio para ceremonias y momentos de reflexión.",

    categorySlug: "instalaciones",
    order: 3,
  },

  {
    id: 4,
    src: `${GALLERY_PATHS.instalaciones}/salon-evento4.jpg`,
    alt: "Área de descanso",

    title: "Área de descanso",

    description:
      "Espacio dedicado a proporcionar comodidad y tranquilidad.",

    categorySlug: "instalaciones",
    order: 4,
  },

  {
    id: 5,
    src: `${GALLERY_PATHS.instalaciones}/salon-evento5.jpg`,
    alt: "Jardín",
    title: "Jardín",
    description:
      "Espacio natural para relajarse y disfrutar del entorno.",
    categorySlug: "instalaciones",
    order: 5,
  },
  {
    id: 6,
    src: `${GALLERY_PATHS.instalaciones}/salon-evento6.jpg`,
    alt: "Área de eventos", 
    title: "Área de eventos",
    description:
      "Espacio dedicado a celebrar ocasiones especiales.",
    categorySlug: "instalaciones",
    order: 6,
      },
      {
    id: 7,
    src: `${GALLERY_PATHS.instalaciones}/salon-evento7.jpg`,
    alt: "Área de descanso exterior",
    title: "Área de descanso exterior",
    description:
      "Espacio al aire libre para relajarse y disfrutar del entorno.",
    categorySlug: "instalaciones",
    order: 7,
  },
  {
    id: 8,
    src: `${GALLERY_PATHS.instalaciones}/salon-evento8.jpg`,
    alt: "Área de eventos al aire libre",   
  title: "Área de eventos al aire libre",   
    description:
      "Espacio al aire libre para celebrar ocasiones especiales.",
    categorySlug: "instalaciones",  
  order: 8,                

  }
];


export const galleryData: GalleryData = {
  section,

  categories,

  images,
};