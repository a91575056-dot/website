import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/service-page-template";
import { freelanceFrontEndDeveloperPage } from "@/lib/service-page-data";

export const metadata: Metadata = {
  title: freelanceFrontEndDeveloperPage.metadataTitle,
  description: freelanceFrontEndDeveloperPage.metadataDescription,
  keywords: [
    "freelance front-end developer",
    "nextjs developer freelancer",
    "react front end developer",
    "remote front-end developer",
    "freelance website developer"
  ],
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: `https://dionisweb.com${freelanceFrontEndDeveloperPage.route}`
  },
  openGraph: {
    title: freelanceFrontEndDeveloperPage.metadataTitle,
    description: freelanceFrontEndDeveloperPage.metadataDescription,
    url: `https://dionisweb.com${freelanceFrontEndDeveloperPage.route}`,
    siteName: "DionisWeb",
    type: "website",
    images: [
      {
        url: "/assets/111.png",
        width: 1024,
        height: 1536,
        alt: "Dionis Grecu freelance front-end developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: freelanceFrontEndDeveloperPage.metadataTitle,
    description: freelanceFrontEndDeveloperPage.metadataDescription,
    images: ["/assets/111.png"]
  }
};

export default function FreelanceFrontEndDeveloperPage() {
  return <ServicePageTemplate page={freelanceFrontEndDeveloperPage} />;
}
