/** GALLERY version 2.0 */



import { GalleryPage } from "@/components/features/gallery";
import Container from "@/components/ui/Container/Container";

import { galleryData } from "@/data/gallery";

export default function Gallery() {
  return (
    <section className="py-16">
      <Container>
        <GalleryPage gallery={galleryData} />
      </Container>
    </section>
  );
}