import { businessData } from "@/data/business";
import { siteConfig } from "@/config/site";

/**
 * ============================================================================
 * Local Business Schema
 * ============================================================================
 */

export const localBusinessSchema = {
  "@context": "https://schema.org",

  "@type": siteConfig.businessType,

  name: businessData.business.name,

  description: siteConfig.description,

  url: siteConfig.url,

  image: `${siteConfig.url}${siteConfig.image}`,

  telephone: `+${businessData.business.phone}`,

  email: businessData.business.email,

  address: {
    "@type": "PostalAddress",

    streetAddress: businessData.business.address.street,

    addressLocality: businessData.business.address.city,

    addressRegion: businessData.business.address.state,

    postalCode: businessData.business.address.postalCode,

    addressCountry: businessData.business.address.country,
  },

  geo: {
    "@type": "GeoCoordinates",

    latitude: businessData.business.address.latitude,

    longitude: businessData.business.address.longitude,
  },

  areaServed: {
    "@type": "State",

    name: businessData.business.address.state,
  },

  contactPoint: {
    "@type": "ContactPoint",

    telephone: `+${businessData.business.phone}`,

    contactType: "customer service",

    availableLanguage: ["Spanish"],
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",

      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],

      opens: "00:00",

      closes: "23:59",
    },
  ],

  priceRange: "$$",

  hasMap: businessData.business.googleMapsUrl,

  sameAs: [
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.tiktok,
  ].filter(Boolean),
};

/**
 * ============================================================================
 * FAQ Schema
 * ============================================================================
 */

export const faqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: businessData.faqSection.items.map((faq) => ({
    "@type": "Question",

    name: faq.question,

    acceptedAnswer: {
      "@type": "Answer",

      text: faq.answer,
    },
  })),
};

/**
 * ============================================================================
 * Service Schema
 * ============================================================================
 */

export const servicesSchema = {
  "@context": "https://schema.org",

  "@type": "ItemList",

  itemListElement: businessData.services.map(
    (service, index) => ({
      "@type": "Service",

      position: index + 1,

      name: service.title,

      description: service.description,

      provider: {
        "@type": siteConfig.businessType,

        name: businessData.business.name,
      },
    })
  ),
};