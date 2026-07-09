import { IMAGE_PATHS } from "@/constants/image-paths";
import type {
  GalleryCategory,
  GalleryData,
  GalleryImage,
  GallerySection,
} from "@/types";

/**
 * ============================================================================
 * GALERÍA
 * ============================================================================
 * A diferencia del resto de las secciones, la galería tiene su propio tipo
 * (`GalleryData`) separado de `BusinessData`, y vive en su propia ruta
 * (`/galeria`, ver navigation.ts) en vez de ser un ancla de la landing.
 * Por eso `galleryData` se exporta aparte y NO se mezcla dentro del objeto
 * `businessData` de index.ts — solo se re-exporta desde ahí para que todo
 * se siga importando desde un mismo punto.
 * ============================================================================
 */

/**
 * Rutas base por categoría de imagen.
 * ⚠️ Por ahora solo `instalaciones` tiene imágenes cargadas. Las demás
 * quedan listas para cuando tengas fotos de esas categorías; agrégalas
 * también a `categories` más abajo cuando las uses (si no, quedan como
 * código muerto sin ninguna imagen que las referencie).
 */
const GALLERY_PATHS = {
  instalaciones: `${IMAGE_PATHS.gallery}/instalaciones`,
  // areas: `${IMAGE_PATHS.gallery}/areas`,
  // jardines: `${IMAGE_PATHS.gallery}/jardines`,
  // eventos: `${IMAGE_PATHS.gallery}/eventos`,
} as const;

/**
 * Encabezado de la sección (usado como preview en la landing y como
 * cabecera de la página /galeria completa).
 */
const section: GallerySection = {
  badge: "Galería",

  title: "Descubre nuestras instalaciones",
  description:
    "Explora nuestros espacios y descubre el ambiente perfecto para celebrar tu evento, desde el jardín hasta el salón principal.",

  previewCount: 3,

  buttonText: "Ver galería completa",

  // ✅ Debe coincidir con navigation.ts → { label: "Galería", href: "/galeria" }
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
    alt: "Salón principal para eventos",
    title: "Salón principal",
    description:
      "Espacio amplio y climatizado, ideal para la recepción de tu evento.",
    categorySlug: "instalaciones",
    isfeatured: true,
    order: 1,
  },

  {
    id: 2,
    src: `${GALLERY_PATHS.instalaciones}/salon-evento2.jpg`,
    alt: "Área de recepción",
    title: "Recepción",
    description: "Área destinada a brindar atención personalizada.",
    categorySlug: "instalaciones",
    order: 2,
  },

  {
    id: 3,
    src: `${GALLERY_PATHS.instalaciones}/salon-evento3.jpg`,
    // ✅ Corregido: "Capilla" (funeraria) → área de ceremonia (bodas, XV años).
    alt: "Área de ceremonia",
    title: "Área de ceremonia",
    description: "Espacio ideal para llevar a cabo la ceremonia de tu evento.",
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
    description: "Espacio natural para relajarse y disfrutar del entorno.",
    categorySlug: "instalaciones",
    order: 5,
  },

  {
    id: 6,
    src: `${GALLERY_PATHS.instalaciones}/salon-evento6.jpg`,
    alt: "Área de eventos",
    title: "Área de eventos",
    description: "Espacio dedicado a celebrar ocasiones especiales.",
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
  },
];

export const galleryData: GalleryData = {
  section,
  categories,
  images,
};