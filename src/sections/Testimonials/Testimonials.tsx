import Image from "next/image";

import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";

import { businessData } from "@/data/business";

export default function Testimonials() {
  const { testimonials, testimonialsSection } = businessData;

  const columnsClass =
    {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
    }[testimonialsSection.columns] ?? "lg:grid-cols-3";

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          badge={testimonialsSection.badge}
          title={testimonialsSection.title}
          subtitle={testimonialsSection.description}
        />

        <div
          className={`
            grid
            gap-8
            md:grid-cols-2
            ${columnsClass}
          `}
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="
                rounded-2xl
                border
                border-neutral-800
                bg-neutral-900
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-amber-500
              "
            >
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="
                    h-16
                    w-16
                    rounded-full
                    object-cover
                  "
                />

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>

                  {testimonialsSection.showLocation &&
                    testimonial.location && (
                      <p className="mt-1 text-sm text-gray-500">
                        📍 {testimonial.location}
                      </p>
                    )}

                  <div
                    className="mt-2 flex"
                    aria-label={`${testimonial.rating} estrellas`}
                  >
                    {Array.from({
                      length: testimonialsSection.maxStars,
                    }).map((_, index) => (
                      <span
                        key={index}
                        className={
                          index < testimonial.rating
                            ? "text-amber-500"
                            : "text-neutral-700"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <blockquote
                className="
                  mt-6
                  leading-relaxed
                  text-gray-300
                "
              >
                "{testimonial.comment}"
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}