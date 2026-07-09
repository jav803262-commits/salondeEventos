import Container from "@/components/ui/Container/Container";
import Section from "@/components/ui/Section/Section";
import GalleryPreview from "@/components/features/gallery/GalleryPreview/GalleryPreview";
import { galleryData } from "@/data/business/index";

export default function Gallery() {
  return (
    <Section id="galeria">
      <Container>
        <GalleryPreview gallery={galleryData} />
      </Container>
    </Section>
  );
}