import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import businessData from "@/data/business/index";

export default function FAQ() {
  const { faqSection } = businessData;

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-white py-16 md:py-16"
    >
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          badge={faqSection.badge}
          title={faqSection.title}
          subtitle={faqSection.description}
        />

        <div className="space-y-10">
          {faqSection.categories.map((category) => (
            <div key={category.label}>
              {category.label && (
                <h3
                  className="
                    mb-4
                    text-lg
                    font-semibold
                    text-gray-900
                  "
                >
                  {category.label}
                </h3>
              )}

              <div className="space-y-4">
                {category.items.map((faq) => (
                  <details
                    key={faq.question}
                    className="
                      group
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      transition-all
                      duration-200
                      hover:border-amber-300
                    "
                  >
                    <summary
                      className="
                        flex
                        cursor-pointer
                        list-none
                        items-center
                        justify-between
                        p-5
                        font-medium
                        text-gray-900
                      "
                    >
                      <span>{faq.question}</span>

                      <span
                        className="
                          ml-4
                          text-xl
                          transition-transform
                          duration-200
                          group-open:rotate-45
                        "
                      >
                        +
                      </span>
                    </summary>

                    <div
                      className="
                        border-t
                        border-gray-100
                        px-5
                        pb-5
                        pt-4
                      "
                    >
                      <p
                        className="
                          leading-relaxed
                          text-gray-600
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}