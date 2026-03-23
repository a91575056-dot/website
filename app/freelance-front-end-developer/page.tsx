import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/service-page-template";
import { getRequestLocale } from "@/lib/get-request-locale";
import { getServicePageMetadata } from "@/lib/service-page-data";

const pageId = "freelanceFrontEndDeveloper" as const;

export function generateMetadata(): Metadata {
  return getServicePageMetadata(pageId, getRequestLocale());
}

export default function FreelanceFrontEndDeveloperPage() {
  return <ServicePageTemplate pageId={pageId} />;
}
