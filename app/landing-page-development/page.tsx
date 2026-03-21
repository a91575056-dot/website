import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/service-page-template";
import { landingPageDevelopmentPage } from "@/lib/service-page-data";

export const metadata: Metadata = {
  title: landingPageDevelopmentPage.metadataTitle,
  description: landingPageDevelopmentPage.metadataDescription,
  keywords: [
    "landing page development",
    "landing page developer",
    "freelance landing page developer",
    "custom landing page design",
    "mobile first landing page"
  ],
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: `https://dionisweb.com${landingPageDevelopmentPage.route}`
  },
  openGraph: {
    title: landingPageDevelopmentPage.metadataTitle,
    description: landingPageDevelopmentPage.metadataDescription,
    url: `https://dionisweb.com${landingPageDevelopmentPage.route}`,
    siteName: "DionisWeb",
    type: "website",
    images: [
      {
        url: "/assets/111.png",
        width: 1024,
        height: 1536,
        alt: "Dionis Grecu freelance landing page developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: landingPageDevelopmentPage.metadataTitle,
    description: landingPageDevelopmentPage.metadataDescription,
    images: ["/assets/111.png"]
  }
};

export default function LandingPageDevelopmentPage() {
  return <ServicePageTemplate page={landingPageDevelopmentPage} />;
}
