import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Hearder";
import Button from "@/components/ui/Button/Button";
import Card from "@/components/ui/Card/Card";
import Heading from "@/components/ui/SectionHeader/SectionHeader";
import Section from "@/components/ui/Section/Section";
import CTA from "@/sections/CTA/CTA";
import FAQ from "@/sections/FAQ/FAQ";
import Hero from "@/sections/Hero/Hero";
import Services from "@/sections/Services/Services";
import Testimonials from "@/sections/Testimonials/Testimonials";
import Image from "next/image";
import StickyCTA from "@/components/StickyCTA/StickyCTA";
import { Map } from "@/sections/Map/Map";
import Gallery from "@/sections/Gallery/Gallery";
import WhatsAppWidget from "@/components/whatsapp/WhatsAppWidget";
import businessData from "@/data/business/index";


export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        
        <Services />
        {businessData.settings.showGallery && <Gallery />}

         <CTA config={businessData.ctaSections.gallery} />
       
        {businessData.settings.showTestimonials && <Testimonials />}
        {businessData.settings.showFAQ && <FAQ />}

        <CTA config={businessData.ctaSections.testimonials} />
        
        {businessData.settings.showMap && <Map />}
        
        
        <CTA config={businessData.ctaSections.quote} />
       
      </main>

      <Footer />
       
       <WhatsAppWidget   config={businessData.whatsapp}   />

      {businessData.settings.showStickyCTA && <StickyCTA />}

     

     
    </>
  );
}
