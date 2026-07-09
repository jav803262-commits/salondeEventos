import Image from "next/image";
import { Check } from "lucide-react";

import { businessData } from "@/data/business";
import WhatsAppLink from "@/components/whatsapp/WhatsAppLink";
import Button from "@/components/ui/Button/Button";

export default function Hero() {
  const hero = businessData.heroSection;

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="overflow-hidden bg-white py-6 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 md:items-center md:gap-10">
          {hero.showImage && hero.image && (
            <div className="relative order-1 col-start-1 row-start-1 min-h-120 overflow-hidden rounded-3xl md:static md:col-start-auto md:row-start-auto md:order-2 md:min-h-0 md:overflow-visible">
              <div className="absolute inset-0 md:hidden">
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              <div className="relative hidden aspect-4/3 overflow-hidden rounded-3xl border border-gray-200 shadow-sm md:block">
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  fill
                  priority
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            </div>
          )}

          <div className="relative z-10 order-2 col-start-1 row-start-1 flex flex-col justify-end px-6 py-8 text-white md:static md:z-auto md:col-start-auto md:row-start-auto md:order-1 md:block md:max-w-2xl md:px-0 md:py-0 md:text-gray-900">
            {hero.badge && (
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 md:text-amber-500">
                {hero.badge}
              </span>
            )}

            <h1
              id="hero-title"
              className="mt-3 text-3xl font-bold leading-tight md:mt-4 md:text-4xl lg:text-6xl"
            >
              {hero.title}
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-white/85 md:mt-4 md:text-base md:text-gray-600 lg:text-lg">
              {hero.subtitle}
            </p>

            {hero.features && hero.features.length > 0 && (
              <ul className="mt-6 hidden space-y-3 md:block">
                {hero.features.map((feature) => (
                  <li
                    key={feature.text}
                    className="flex items-center gap-3 text-sm font-medium text-gray-700"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-5 flex gap-3 md:mt-8">
              <WhatsAppLink
                ariaLabel={hero.primaryButton.text}
                className="flex-1 rounded-xl bg-amber-500 px-5 py-3 text-center text-sm font-semibold text-black transition hover:opacity-90 md:flex-initial md:px-6"
              >
                {hero.primaryButton.text}
              </WhatsAppLink>

              {hero.showSecondaryButton && hero.secondaryButton && (
                <Button
                  href={hero.secondaryButton.href}
                  variant="secondary"
                  className="flex-1 border-white/40 text-black md:flex-initial md:border-gray-300 md:text-gray-900"
                >
                  {hero.secondaryButton.text}
                </Button>
              )}
            </div>

            {hero.showStats && hero.stats.length > 0 && (
              <dl className="mt-8 hidden grid-cols-3 gap-3 md:grid">
                {hero.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-gray-200 p-4 text-center"
                  >
                    <dd className="text-xl font-bold text-amber-500">
                      {stat.value}
                    </dd>
                    <dt className="mt-1 text-xs text-gray-600">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}