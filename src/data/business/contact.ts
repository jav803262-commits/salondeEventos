import type { BusinessData } from "@/types";

/**
 * WhatsApp Configuration
 */
export const whatsapp: BusinessData["whatsapp"] = {
  enabled: true,

  // ✅ Verificado: mismo número que business.phone.
  phone: "529515557788",

  message: "Hola, me gustaría cotizar un evento en el salón.",

  greeting: "¡Hola! 🎉 ¿Planeando un evento? Escríbenos",

  delay: 4000,

  showGreeting: true,

  pulse: true,

  showOnMobileOnly: false,

  // Decisión de diseño: aquí se mantiene visible cerca del footer
  // (a diferencia del ejemplo de la funeraria, donde se oculta).
  hideOnFooter: false,

  rememberDismiss: true,
};