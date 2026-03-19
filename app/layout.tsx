import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { Providers } from "@/components/providers";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dionisweb.com"),
  title: "Dionis Grecu | Front-End Developer for Business Websites and Landing Pages",
  description:
    "Front-end developer building landing pages, business websites and portfolio sites in Next.js, React with Vite, Astro or static HTML and Tailwind.",
  openGraph: {
    title: "Dionis Grecu | Front-End Developer for Business Websites and Landing Pages",
    description: "Landing pages, service websites and portfolio sites built with the right framework for the project.",
    url: "https://dionisweb.com",
    siteName: "Dionis Grecu",
    images: [
      {
        url: "/assets/111.png",
        width: 1024,
        height: 1536,
        alt: "Dionis Grecu, freelance front-end developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dionis Grecu | Front-End Developer for Business Websites and Landing Pages",
    description: "Landing pages, service websites and portfolio sites built with the right framework for the project.",
    images: ["/assets/111.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-background font-sans text-foreground antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
