/** Gallery Grid Component */
"use client";
import type { GalleryImage } from "@/types";

import GalleryCard from "../GalleryCard";

interface GalleryGridProps {
  images: GalleryImage[];
  priorityImages?: number;
  className?: string;
  onImageClick?: (index: number) => void;
}

export default function GalleryGrid({
  images,
  priorityImages = 0,
  className = "",
  onImageClick,
}: GalleryGridProps) {
  return (
    <div
      className={`
        grid
        grid-cols-2
        gap-4
        md:grid-cols-3
        ${className}
      `}
    >
      {images.map((image, index) => (
        <GalleryCard
          key={image.id}
          image={image}
          priority={index < priorityImages}
          onClick={() => onImageClick?.(index)}
        />
      ))}
    </div>
  );
}