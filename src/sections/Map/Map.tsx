"use client";
import Button from "@/components/ui/Button/Button";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";

import { businessData } from "@/data/business";
import { useState } from "react";

export function Map() {
  const { name, mapEmbedUrl, googleMapsUrl, address } = businessData.business;

  if (!mapEmbedUrl) {
    return null;
  }

  const [loading, setLoading] = useState(true);

  return (
    <section id="ubicacion" className="py-16" aria-labelledby="map-title">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Nuestra Ubicación"
          subtitle="Encuéntranos fácilmente."
        />

        <div className="relative mt-2 overflow-hidden rounded-xl p-1 shadow-md">
          {loading && (
            <div className="absolute inset-1 z-10 flex items-center justify-center rounded-xl bg-muted">
              <div className="text-center">
                <div className="mx-auto mb-3 h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />

                <p className="text-sm text-muted-foreground">
                  Cargando mapa...
                </p>
              </div>
            </div>
          )}

          <iframe
            title={`Mapa de ${name}`}
            src={mapEmbedUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setLoading(false)}
            className="h-87.5 w-full border-0 md:h-112.5"
          />
        </div>

        <div className="mt-5 flex flex-col items-center text-center">
          <p className="text-lg font-semibold">Dirección</p>

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
