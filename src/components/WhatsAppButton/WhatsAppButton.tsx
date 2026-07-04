import { businessData } from "@/data/business";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  const { whatsapp, whatsappMessage } = businessData.business;

  return (
    <a
      href={createWhatsAppLink(
        whatsapp,
        whatsappMessage
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed
        bottom-5
        right-5
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-green-500
        text-white
        font-bold
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-xl
        focus:outline-none
        focus:ring-4
        focus:ring-green-300
      "
    >
      WA
    </a>
  );
}