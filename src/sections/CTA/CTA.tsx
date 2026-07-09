import Button from "@/components/ui/Button/Button";
import WhatsAppLink from "@/components/whatsapp/WhatsAppLink";

import businessData from "@/data/business";

import type { CTASection } from "@/types";

interface CTAProps {
  config: CTASection;
}

export default function CTA({ config }: CTAProps) {
  const { business, settings } = businessData;

  return (
    <section
      id="contacto"
      className="py-16"
      aria-labelledby="cta-title"
    >
      <div className="container mx-auto px-4">
        <div className="rounded-3xl border border-white/10 bg-black px-6 py-12 text-center shadow-2xl">

          {config.badge && (
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
              {config.badge}
            </span>
          )}

          <h2
            id="cta-title"
            className="mt-4 text-3xl font-bold text-white md:text-4xl"
          >
            {config.title}
          </h2>

          {/* Datos del negocio */}

          <div className="mt-8 flex flex-col gap-2 text-sm text-white/70">

            {settings.showCTAPhone && (
              <a
                href={`tel:${business.phone}`}
                className="transition hover:text-white"
              >
                Tel. {business.displayPhone}
              </a>
            )}

            {settings.showCTAEmail && (
              <p>{business.email}</p>
            )}

            {settings.showCTAAddress && (
              <p>
                {business.address.city}, {business.address.state}
              </p>
            )}

          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            {config.whatsappButton && (
              <WhatsAppLink
                ariaLabel={config.whatsappButton.label}
                className="flex flex-1 items-center justify-center rounded-xl bg-amber-500 px-6 py-4 font-semibold text-black"
              >
                {config.whatsappButton.label}
              </WhatsAppLink>
            )}

            {config.phoneButton && (
              <Button
                href={`tel:${business.phone}`}
                icon="Phone"
                iconPosition="left"
                className="flex-1 min-h-14 justify-center"
              >
                {config.phoneButton.label}
              </Button>
            )}

          </div>

          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            {config.description}
          </p>

        </div>
      </div>
    </section>
  );
}