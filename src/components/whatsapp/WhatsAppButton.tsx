"use client";

import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  onClick: () => void;
}

export default function WhatsAppButton({
  onClick,
}: WhatsAppButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Abrir chat de WhatsApp"
      title="WhatsApp"
      className="
        flex
        h-14
        w-14
        cursor-pointer
        items-center
        justify-center

        rounded-full
        bg-[#25D366]
        text-white

        shadow-xl

        transition-all
        duration-300

        hover:scale-105
        hover:shadow-2xl

        active:scale-95

        focus-visible:outline-none
        focus-visible:ring-4
        focus-visible:ring-green-300

        motion-reduce:transition-none
      "
    >
      <MessageCircle
        aria-hidden="true"
        className="h-8 w-8"
      />
    </button>
  );
}