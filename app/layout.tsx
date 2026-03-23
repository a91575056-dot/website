import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getRequestLocale } from "@/lib/get-request-locale";
import { getSiteMetadata } from "@/lib/site-metadata";

import { Providers } from "@/components/providers";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-sans"
});

const interDisplay = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-display"
});

const googleSiteVerification =
  process.env.GOOGLE_SITE_VERIFICATION ?? "YIdxbp_xeyGL0kExPastUhRCBs9-NSDEZPsscfwEokQ";

export function generateMetadata(): Metadata {
  const locale = getRequestLocale();
  const metadata = getSiteMetadata(locale);

  return {
    metadataBase: new URL("https://dionisweb.com"),
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    applicationName: "Dionis Web",
    authors: [{ name: "Dionis Grecu", url: "https://dionisweb.com" }],
    creator: "Dionis Grecu",
    publisher: "Dionis Web",
    alternates: {
      canonical: "https://dionisweb.com"
    },
    icons: {
      icon: "/icon.png",
      apple: "/apple-icon.png"
    },
    ...(googleSiteVerification
      ? {
          verification: {
            google: googleSiteVerification
          }
        }
      : {}),
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    openGraph: {
      type: "website",
      locale: metadata.openGraphLocale,
      title: metadata.title,
      description: metadata.webPageDescription,
      url: "https://dionisweb.com",
      siteName: "Dionis Web",
      images: [
        {
          url: "/assets/111.png",
          width: 1024,
          height: 1536,
          alt: metadata.imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.webPageDescription,
      images: ["/assets/111.png"]
    }
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = getRequestLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${interDisplay.variable} bg-background font-sans text-foreground antialiased`}>
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
