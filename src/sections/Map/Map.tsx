import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";

import { businessData } from "@/data/business";

export function Map() {
  const { name, mapEmbedUrl, address } = businessData.business;

  if (!mapEmbedUrl) {
    return null;
  }

  return (
    <section
      id="ubicacion"
      className="py-16"
      aria-labelledby="map-title"
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Nuestra Ubicación"
          subtitle="Encuéntranos fácilmente."
        />

        <div className="overflow-hidden rounded-2xl shadow-lg">
          <iframe
            title={`Mapa de ${name}`}
            src={mapEmbedUrl}
            width="100%"
            height="350"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg font-semibold">
            Dirección
          </p>

          <p className="text-muted-foreground">
            {address.street}, {address.city},{" "}
            {address.state}, {address.postalCode}
          </p>
        </div>
      </div>
    </section>
  );
}