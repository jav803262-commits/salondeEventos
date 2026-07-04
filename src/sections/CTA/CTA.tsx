import { businessData } from "@/data/business";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function CTA() {
  const { business, ctaFinal } = businessData;

  const whatsappLink = createWhatsAppLink(
    business.whatsapp,
    business.whatsappMessage
  );

  return (
    <section className="py-16" id="contacto">
      <div className="container mx-auto px-4">
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-black
            px-6
            py-12
            text-center
            shadow-2xl
          "
        >
          {ctaFinal.badge && (
            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-amber-500
              "
            >
              {ctaFinal.badge}
            </span>
          )}

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              text-white
              md:text-4xl
            "
          >
            {ctaFinal.title}
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-white/70
            "
          >
            {ctaFinal.description}
          </p>

          <div
            className="
              mt-8
              space-y-2
              text-sm
              text-white/70
            "
          >
            <a href={`tel:${business.phone}`} className="hover:underline">
              Tel. {business.displayPhone}
            </a>

            {business.email && (
              <p>{business.email}</p>
            )}

            {business.address && (
              <p>
                {business.address.city},{" "}
                {business.address.state}
              </p>
            )}
          </div>

          <div
            className="
              mt-8
              flex
              flex-col
              gap-4
              sm:flex-row
            "
          >
            <a
              href={`tel:${business.phone}`}
              className="
                flex-1
                rounded-xl
                bg-white
                px-6
                py-4
                text-center
                font-semibold
                text-black
                transition
                hover:opacity-90
              "
            >
              {ctaFinal.phoneButton.label}
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-1
                rounded-xl
                bg-green-600
                px-6
                py-4
                text-center
                font-semibold
                text-white
                transition
                hover:bg-green-700
              "
            >
              {ctaFinal.whatsappButton.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}