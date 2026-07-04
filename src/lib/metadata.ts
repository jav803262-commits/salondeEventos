import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.businessType,

  description: siteConfig.description,

  keywords: [...siteConfig.keywords],

  metadataBase: new URL(siteConfig.url),

  openGraph: {
    title: siteConfig.businessType,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.businessType,

    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
      },
    ],

    locale: "es_MX",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.businessType,
    description: siteConfig.description,
    images: [siteConfig.image],
  },
};