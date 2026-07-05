"use client";

import type { WhatsAppConfig } from "@/types";

import { createWhatsAppLink } from "@/lib/whatsapp";
import { useWhatsAppWidget } from "@/hooks/useWhatsAppWidget";

import WhatsAppBubble from "./WhatsAppBubble";
import WhatsAppButton from "./WhatsAppButton";

interface WhatsAppWidgetProps {
  config: WhatsAppConfig;
}

export default function WhatsAppWidget({ config }: WhatsAppWidgetProps) {
const {
  isGreetingVisible,
  closeGreeting,
  toggleGreeting,
} = useWhatsAppWidget({
  enabled: config.enabled,
  showGreeting: config.showGreeting ?? true,
  delay: config.delay ?? 5000,
});

  if (!config.enabled || !config.phone.trim() || !config.message.trim()) {
    return null;
  }

  const whatsappLink = createWhatsAppLink(config.phone, config.message);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {config.showGreeting && isGreetingVisible && (
        <WhatsAppBubble
          config={config}
          href={whatsappLink}
          onClose={closeGreeting}
        />
      )}

      <WhatsAppButton onClick={toggleGreeting} />
    </div>
  );
}
