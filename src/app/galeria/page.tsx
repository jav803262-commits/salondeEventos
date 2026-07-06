/** GALLERY version 2.0 */

import { GalleryPage } from "@/components/features/gallery";
import Container from "@/components/ui/Container/Container";


import { galleryData } from "@/data/gallery";
import Button from "@/components/ui/Button/Button";

export default function Gallery() {
  return (
    <section className="py-16">
      <div className="mb-8">
        <Button href="/" className="inline-flex items-center gap-2" icon="ArrowLeft" iconPosition="left">
                   Regresar al inicio
        </Button>
      </div>
      <Container>
        <GalleryPage gallery={galleryData} />
      </Container>
    </section>
  );
}
