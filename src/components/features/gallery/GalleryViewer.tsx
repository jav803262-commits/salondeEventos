"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/plugins/captions.css";

import type { GalleryImage } from "@/types";

interface GalleryViewerProps {
  images: GalleryImage[];
  open: boolean;
  index: number;
  onClose: () => void;
}

export default function GalleryViewer({
  images,
  open,
  index,
  onClose,
}: GalleryViewerProps) {
  const slides = images.map((image) => ({
    src: image.src,
    alt: image.alt,
    title: image.title,
    description: image.description,
  }));

  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={slides}
      plugins={[Zoom, Thumbnails, Fullscreen, Captions]}
    />
  );
}
