import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/service-page-template";
import { websiteDevelopmentPage } from "@/lib/service-page-data";

export const metadata: Metadata = {
  title: websiteDevelopmentPage.metadataTitle,
  description: websiteDevelopmentPage.metadataDescription,
  keywords: [
    "website development",
    "business website development",
    "freelance website developer",
    "service business website",
    "custom website development"
  ],
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: `https://dionisweb.com${websiteDevelopmentPage.route}`
  },
  openGraph: {
    title: websiteDevelopmentPage.metadataTitle,
    description: websiteDevelopmentPage.metadataDescription,
    url: `https://dionisweb.com${websiteDevelopmentPage.route}`,
    siteName: "DionisWeb",
    type: "website",
    images: [
      {
        url: "/assets/111.png",
        width: 1024,
        height: 1536,
        alt: "Dionis Grecu freelance website developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: websiteDevelopmentPage.metadataTitle,
    description: websiteDevelopmentPage.metadataDescription,
    images: ["/assets/111.png"]
  }
};

export default function WebsiteDevelopmentPage() {
  return <ServicePageTemplate page={websiteDevelopmentPage} />;
}
