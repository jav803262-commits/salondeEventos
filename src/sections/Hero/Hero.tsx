import Image from "next/image";

import { businessData } from "@/data/business";
import { createWhatsAppLink } from "@/lib/whatsapp";

const whatsappUrl = createWhatsAppLink(
  businessData.business.whatsapp,
  businessData.business.whatsappMessage
);

export default function Hero() {
  const hero = businessData.heroSection;

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="overflow-hidden bg-white py-12 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="max-w-2xl">
            {hero.badge && (
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-amber-500">
                {hero.badge}
              </span>
            )}

            <h1
              id="hero-title"
              className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-6xl"
            >
              {hero.title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              {hero.subtitle}
            </p>

            {hero.features && hero.features.length > 0 && (
              <ul className="mt-6 space-y-3">
                {hero.features.map((feature) => (
                  <li
                    key={feature.text}
                    className="flex items-center gap-3 text-sm font-medium text-gray-700"
                  >
                    <span
                      aria-hidden="true"
                      className="font-bold text-amber-500"
                    >
                      ✓
                    </span>

                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                aria-label={hero.primaryButton.text}
                className="rounded-xl bg-amber-500 px-6 py-3 text-center font-semibold text-black transition hover:opacity-90"
              >
                {hero.primaryButton.text}
              </a>

              {hero.showSecondaryButton &&
                hero.secondaryButton && (
                  <a
                    href={hero.secondaryButton.href}
                    aria-label={hero.secondaryButton.text}
                    className="rounded-xl border border-gray-300 px-6 py-3 text-center font-semibold text-gray-900 transition hover:border-amber-500"
                  >
                    {hero.secondaryButton.text}
                  </a>
                )}
            </div>

            {hero.showStats &&
              hero.stats.length > 0 && (
                <dl className="mt-8 grid grid-cols-3 gap-3">
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

          {hero.showImage &&
            hero.image && (
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
                <div className="relative aspect-4/3">
                  <Image
                    src={hero.image.src}
                    alt={hero.image.alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            )}
        </div>
      </div>
    </section>
  );
}