/** GALLERY version 2.0 */

import { GalleryPage } from "@/components/features/gallery";
import Container from "@/components/ui/Container/Container";


import { galleryData } from "@/data/business/gallery";
import Button from "@/components/ui/Button/Button";

export default function Gallery() {
  return (
    <section className="py-8 sm:py-12 lg:py-16" id="galleria">
       <div className=" flex justify-center px-4">
              <Button
                href="/"
                icon="ArrowLeft"
                iconPosition="left"
                className="w-full sm:w-auto"
                variant="secondary"
              >
               Regresar al inicio
              </Button>
            </div>
      <Container>
        <GalleryPage gallery={galleryData} />
      </Container>
    </section>
  );
}
