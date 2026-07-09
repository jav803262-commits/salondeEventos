/**
 * ============================================================================
 * BUSINESS DATA — ÍNDICE
 * ============================================================================
 * Reensambla el objeto `businessData` a partir de los módulos individuales.
 * Todo lo que el cliente puede modificar sigue viviendo en cada archivo,
 * pero ahora dividido por sección para que sea más fácil de mantener.
 * ============================================================================
 */

import type { BusinessData } from "@/types";

// Datos "duros" del negocio (identidad, ubicación, horarios).
import { business } from "./business";
// Estructura del menú del sitio (casi no cambia entre clientes).
import { navigation } from "./navigation";
// Metadatos de posicionamiento (se edita seguido por marketing).
import { seo } from "./seo";
// Canal de contacto por WhatsApp.
import { whatsapp } from "./contact";
// Sección hero (portada) de la landing.
import { heroSection } from "./hero";
// Sección y listado de servicios ofrecidos.
import { servicesSection, services } from "./services";
// Testimonios de clientes y su encabezado de sección.
import { testimonials, testimonialsSection } from "./testimonial";
// Preguntas frecuentes agrupadas por categoría.
import { faqSection } from "./faq";
// Flags que prenden/apagan secciones y elementos de la UI.
import { settings } from "./settings";
// Sección final de llamado a la acción (antes del footer).
import { ctaSections } from "./cta";

// Galería: tipo distinto (GalleryData), no se mezcla en el objeto
// businessData de abajo. Se re-exporta para que todo se importe desde
// un mismo punto: import { businessData, galleryData } from "@/data/business".
export { galleryData } from "./gallery";

export const businessData: BusinessData = {
  business, // business.ts
  whatsapp, // contact.ts
  navigation, // navigation.ts
  heroSection, // hero.ts
  servicesSection, // services.ts
  services, // services.ts
  testimonials, // testimonials.ts
  testimonialsSection, // testimonials.ts
  faqSection, // faq.ts
  settings, // settings.ts
  seo, // seo.ts
  ctaSections, // cta.ts
};

export default businessData;