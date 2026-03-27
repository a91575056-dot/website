import type { MetadataRoute } from "next";

import { defaultLocale, getLocalizedPath } from "@/lib/i18n";
import { siteDescription, siteName } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Dionis Web",
    description: siteDescription,
    start_url: getLocalizedPath(defaultLocale, "/"),
    display: "standalone",
    background_color: "#f4efe7",
    theme_color: "#2f4de0",
    categories: ["business", "portfolio", "marketing"],
    icons: [
      {
        src: "/icon.png",
        type: "image/png"
      },
      {
        src: "/apple-icon.png",
        type: "image/png"
      }
    ]
  };
}
