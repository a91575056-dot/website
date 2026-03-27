import type { MetadataRoute } from "next";

import { supportedLocales } from "@/lib/i18n";
import { getLocaleAlternates, getLocalizedUrl, staticSiteRoutes } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return supportedLocales.flatMap((locale) =>
    staticSiteRoutes.map((route) => ({
      url: getLocalizedUrl(locale, route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: getLocaleAlternates(route.path)
      }
    }))
  );
}
