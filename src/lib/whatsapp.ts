import type { WhatsAppConfig } from "@/types";

export function createWhatsAppLink(
  phone: string,
  message: string
): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppLink(
  config: WhatsAppConfig
): string {
  return createWhatsAppLink(
    config.phone,
    config.message
  );
}

export function isWhatsAppConfigured(
  config: WhatsAppConfig
): boolean {
  return Boolean(
    config.enabled &&
    config.phone.trim() &&
    config.message.trim()
  );
}