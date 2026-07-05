"use client";

import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

import type { WhatsAppConfig } from "@/types";

interface WhatsAppBubbleProps {
  config: WhatsAppConfig;
  href: string;
  onClose: () => void;
}

export default function WhatsAppBubble({
  config,
  href,
  onClose,
}: WhatsAppBubbleProps) {
  return (
    <div
      className="
        relative

        w-[320px]
        max-w-[calc(100vw-2rem)]

        rounded-2xl
        border
        border-zinc-200
        bg-white

        p-5

        shadow-2xl

        transition-all
        duration-300
      "
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar mensaje"

        className="
          absolute
          right-3
          top-3

          rounded-md
          p-1

          text-zinc-500

          transition-colors

          hover:bg-zinc-100
          hover:text-zinc-700

          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-green-500
        "
      >
        <X className="h-4 w-4" />
      </button>

      <div className="space-y-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">
            👋
          </span>

          <div className="flex-1">
            <h3 className="font-semibold text-zinc-900">
              Hola
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-600">
              {config.greeting}
            </p>
          </div>
        </div>

        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"

          className="
            group

            flex
            w-full

            items-center
            justify-center

            gap-2

            rounded-xl

            bg-[#25D366]

            px-4
            py-3

            text-sm
            font-medium
            text-white

            transition-all

            hover:brightness-95
            hover:shadow-lg

            focus-visible:outline-none
            focus-visible:ring-4
            focus-visible:ring-green-300
          "
        >
          Escribir por WhatsApp

          <ArrowRight
            className="
              h-4
              w-4

              transition-transform

              group-hover:translate-x-1
            "
          />
        </Link>
      </div>

      <div
        className="
          absolute
          -bottom-2
          right-6

          h-4
          w-4

          rotate-45

          border-b
          border-r
          border-zinc-200

          bg-white
        "
      />
    </div>
  );
}