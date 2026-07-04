import Container from "@/components/ui/Container/Container";

import { galleryData } from "@/data/gallery";

import GalleryPreview from "@/components/features/gallery/GalleryPreview/GalleryPreview";

export default function Gallery() {
  return (
    <section id="gallery">
      <Container>
        <GalleryPreview gallery={galleryData} />
      </Container>
    </section>
  );
}