"use client";

import { useState } from "react";

import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";

import type { GalleryData, GalleryImage } from "@/types";

import GalleryGrid from "../GalleryGrid";
import GalleryViewer from "../GalleryViewer";


interface GalleryPageProps {
  gallery: GalleryData;
}

export default function GalleryPage({
  gallery,
}: GalleryPageProps) {
  const { section, images } = gallery;
  const previewImages = images;
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
        images={gallery.images}
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
    </>
  );
}