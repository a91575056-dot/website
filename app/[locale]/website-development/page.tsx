import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/service-page-template";
import { resolveLocale } from "@/lib/i18n";
import { getServicePageMetadata } from "@/lib/service-page-data";

const pageId = "websiteDevelopment" as const;

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return getServicePageMetadata(pageId, resolveLocale(params.locale));
}

export default function WebsiteDevelopmentPage({ params }: { params: { locale: string } }) {
  return <ServicePageTemplate pageId={pageId} locale={resolveLocale(params.locale)} />;
}
