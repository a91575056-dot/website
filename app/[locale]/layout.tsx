import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import { Providers } from "@/components/providers";
import { isLocale, supportedLocales } from "@/lib/i18n";
import { siteName, siteUrl } from "@/lib/site-config";
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

export const dynamicParams = false;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  authors: [{ name: "Dionis Grecu", url: siteUrl }],
  creator: "Dionis Grecu",
  publisher: siteName,
  category: "business",
  classification: "Freelance web development",
  manifest: "/manifest.webmanifest",
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
  }
};

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${interDisplay.variable} bg-background font-sans text-foreground antialiased`}>
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
