/**
 * Genera un enlace de WhatsApp.
 */
export function createWhatsAppLink(
  phone: string,
  message: string
): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;
}