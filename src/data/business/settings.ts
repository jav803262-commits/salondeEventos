import type { BusinessData } from "@/types";

/**
 * Configuración visual y funcional
 */
export const settings: BusinessData["settings"] = {
  showStickyCTA: false,

  showWhatsAppButton: true,

  showTestimonials: true,

  showFAQ: true,

  showMap: true,

  showContactForm: true,
  // Decisión de diseño: activa a diferencia del ejemplo de la funeraria.
  showServices: true,
  showGallery: true,

  // CTA
  showCTAPhone: false,
  showCTAEmail: false,
  showCTAAddress: false,

  // Footer
  showFooterPhone: true,
  showFooterEmail: false,
  showFooterAddress: false,
  showFooterDeveloperCredit: true,
};