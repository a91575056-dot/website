import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";

import { Providers } from "@/components/providers";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dionisweb.com"),
  title: "Dionis Grecu | Freelance Landing Page Developer and Website Builder",
  description:
    "Freelance front-end developer building landing pages, business websites and portfolio websites for brands, freelancers and service businesses at dionisweb.com.",
  keywords: [
    "dionisweb",
    "dionisweb.com",
    "Dionis Grecu",
    "freelance landing page developer",
    "landing page developer",
    "landing pages",
    "business websites",
    "website developer",
    "freelance web developer",
    "front-end developer",
    "portfolio websites",
    "Next.js developer",
    "React developer",
    "website freelancer"
  ],
  applicationName: "DionisWeb",
  authors: [{ name: "Dionis Grecu", url: "https://dionisweb.com" }],
  creator: "Dionis Grecu",
  publisher: "Dionis Grecu",
  alternates: {
    canonical: "https://dionisweb.com"
  },
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
    locale: "en_US",
    title: "Dionis Grecu | Freelance Landing Page Developer and Website Builder",
    description: "Landing pages and business websites built for service businesses, freelancers and personal brands.",
    url: "https://dionisweb.com",
    siteName: "DionisWeb",
    images: [
      {
        url: "/assets/111.png",
        width: 1024,
        height: 1536,
        alt: "Dionis Grecu, freelance landing page developer and website builder"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dionis Grecu | Freelance Landing Page Developer and Website Builder",
    description: "Landing pages and business websites built for service businesses, freelancers and personal brands.",
    images: ["/assets/111.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${interTight.variable} bg-background font-sans text-foreground antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
