import Button from "@/components/ui/Button/Button";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";

import { businessData } from "@/data/business";

export function Map() {
  const {
    name,
    mapEmbedUrl,
    googleMapsUrl,
    address,
  } = businessData.business;

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

        <div className=" mt-2 p-1 overflow-hidden rounded-1xl  shadow-md">
          <iframe
            title={`Mapa de ${name}`}
            src={mapEmbedUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-87.5 w-full border-0 md:h-112.5"
          />
        </div>

        <div className="mt-5 flex flex-col items-center text-center">
          <p className="text-lg font-semibold">
            Dirección
          </p>

          <p className="mt-2 max-w-2xl text-muted-foreground">
            {address.street}, {address.city}, {address.state},{" "}
            {address.postalCode}
          </p>

          {googleMapsUrl && (
            <Button
              href={googleMapsUrl}
              external
              icon="MapPinned"
              className="mt-2 w-full sm:w-auto"
            >
              Abrir en Google Maps
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}