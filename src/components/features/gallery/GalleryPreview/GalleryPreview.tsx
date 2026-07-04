/** Gallery Preview Component */
"use client";

/**
 * GalleryPreview es un Client Component porque administra la
 * interacción de la galería (selección de imágenes, Lightbox, etc.).
 */

import type { GalleryData, GalleryImage } from "@/types";
import { useState } from "react";

import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import GalleryGrid from "../GalleryGrid/GalleryGrid";
import Button from "@/components/ui/Button/Button";
import GalleryViewer from "../GalleryViewer";

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

      <GalleryViewer
        images={previewImages}
        open={open}
        index={currentIndex}
        onClose={() => setOpen(false)}
      />

      <div className="mt-10 flex justify-center">
        <Button href={section.buttonHref}>{section.buttonText}</Button>
      </div>
    </>
  );
}
