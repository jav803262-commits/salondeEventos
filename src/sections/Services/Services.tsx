import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import Card from "@/components/ui/Card/Card";
import Section from "@/components/ui/Section/Section";

import { businessData } from "@/data/business";
import { iconMap } from "@/lib/icons";

const columns = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
} as const;

export default function Services() {
  const { servicesSection, services } = businessData;

  return (
    <Section id="servicios">
      <SectionHeader
        title={servicesSection.title}
        subtitle={
          servicesSection.subtitle ??
          servicesSection.description
        }
      />

      <div
        className={`mt-8 grid gap-5 sm:grid-cols-2 ${
          columns[servicesSection.columns as keyof typeof columns] ??
          "lg:grid-cols-3"
        }`}
      >
        {services.map((service) => {
          const Icon = service.icon
            ? iconMap[service.icon as keyof typeof iconMap]
            : undefined;

          return (
            <Card
              key={service.id}
              title={service.title}
              description={service.description}
              header={
                Icon ? (
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/10 transition-colors duration-300">
                    <Icon
                      className="h-7 w-7 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                ) : undefined
              }
            />
          );
        })}
      </div>
    </Section>
  );
}