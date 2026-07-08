import { useState } from "react";

// hooks/useGalleryLightbox.ts
export function useGalleryLightbox() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openAt = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return { open, currentIndex, openAt, close: () => setOpen(false) };
}