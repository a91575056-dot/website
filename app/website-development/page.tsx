import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/service-page-template";
import { getRequestLocale } from "@/lib/get-request-locale";
import { getServicePageMetadata } from "@/lib/service-page-data";

const pageId = "websiteDevelopment" as const;

export function generateMetadata(): Metadata {
  return getServicePageMetadata(pageId, getRequestLocale());
}

export default function WebsiteDevelopmentPage() {
  return <ServicePageTemplate pageId={pageId} />;
}
