import Container from "@/components/ui/Container/Container";



import GalleryPreview from "@/components/features/gallery/GalleryPreview/GalleryPreview";
import { galleryData } from "@/data/business/index";

export default function Gallery() {
  return (
    <section id="gallery">
      <Container>
        <GalleryPreview gallery={galleryData} />      
      </Container>
    </section>
  );
}