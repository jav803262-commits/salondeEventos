/**
 * GalleryPreview es un Client Component porque administra la
 * interacción de la galería (selección de imágenes, Lightbox, etc.).
 *
 * GalleryViewer se carga de forma diferida (dynamic import) para no
 * incluir el peso del lightbox (plugins + CSS) en el bundle inicial
 * de la landing page. Solo se descarga cuando el usuario abre una imagen.
 */
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import type { GalleryData } from "@/types";

import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import GalleryGrid from "../GalleryGrid";
import Button from "@/components/ui/Button/Button";

const GalleryViewer = dynamic(() => import("../GalleryViewer"), {
  ssr: false,
});

interface GalleryPreviewProps {
  gallery: GalleryData;
}

export default function GalleryPreview({ gallery }: GalleryPreviewProps) {
  const { section, images } = gallery;
  const previewImages = images.slice(0, section.previewCount);

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <SectionHeader
        badge={section.badge}
        title={section.title}
        subtitle={section.description}
      />

      <GalleryGrid
        images={previewImages}
        priorityImages={2}
        className="mt-10"
        onImageClick={(index) => {
          setCurrentIndex(index);
          setOpen(true);
        }}
      />

      {open && (
        <GalleryViewer
          images={previewImages}
          open={open}
          index={currentIndex}
          onClose={() => setOpen(false)}
        />
      )}

      <div className="mt-10 flex justify-center px-4">
        <Button
          href={section.buttonHref}
          icon="ArrowRight"
          className="w-full sm:w-auto"
          variant="secondary"
        >
          {section.buttonText}
        </Button>
      </div>
    </>
  );
}