import type { Metadata } from "next";

import "./globals.css";

import { businessData } from "@/data/business";

import {
  localBusinessSchema,
  faqSchema,
  servicesSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: businessData.seo.title,

  description: businessData.seo.description,

  keywords: businessData.seo.keywords,

  applicationName: businessData.business.name,

  creator: businessData.business.name,

  publisher: businessData.business.name,

  metadataBase: new URL(businessData.seo.siteUrl),

  openGraph: {
    title: businessData.seo.title,
    description: businessData.seo.description,
    url: businessData.seo.siteUrl,
    siteName: businessData.business.name,
    locale: "es_MX",
    type: "website",

    images: [
      {
        url: businessData.seo.ogImage,
        width: 1200,
        height: 630,
        alt: businessData.business.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: businessData.seo.title,
    description: businessData.seo.description,
    images: [businessData.seo.ogImage],
  },

  alternates: {
    canonical: businessData.seo.siteUrl,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className="scroll-smooth" data-scroll-behavior="smooth"  >
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesSchema),
          }}
        />
      </body>
    </html>
  );
}