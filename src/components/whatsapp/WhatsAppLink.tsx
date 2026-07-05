import type { ReactNode } from "react";

import { businessData } from "@/data/business";
import {
  getWhatsAppLink,
  isWhatsAppConfigured,
} from "@/lib/whatsapp";

interface WhatsAppLinkProps {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

export default function WhatsAppLink({
  children,
  className = "",
  ariaLabel,
}: WhatsAppLinkProps) {
  const { whatsapp } = businessData;

  if (!isWhatsAppConfigured(whatsapp)) {
    return null;
  }

  return (
    <a
      href={getWhatsAppLink(whatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}