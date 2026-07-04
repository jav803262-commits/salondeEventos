import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import Card from "@/components/ui/Card/Card";
import Section from "@/components/ui/Section/Section";

import { businessData } from "@/data/business";

export default function Services() {
  const { servicesSection, services } = businessData;

  const columns = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  };

  return (
    <Section id="servicios">
      <SectionHeader
        title={servicesSection.title}
        subtitle={
          servicesSection.subtitle ||
          servicesSection.description
        }
      />

      <div
        className={`
          mt-8
          grid
          gap-5
          sm:grid-cols-2
          ${columns[servicesSection.columns as 2 | 3 | 4] ?? "lg:grid-cols-3"}
        `}
      >
        {services.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Section>
  );
}