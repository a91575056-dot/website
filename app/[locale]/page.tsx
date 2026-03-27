import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { getHomeFaqData } from "@/lib/home-faq-data";
import { getLocalizedPath, resolveLocale, type Locale } from "@/lib/i18n";
import { getSiteMetadata } from "@/lib/site-metadata";
import { absoluteUrl, getLocaleAlternates, siteImagePath, siteName, siteUrl } from "@/lib/site-config";
import { emailAddress, instagramUrl, tiktokUrl, whatsappUrl } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { HashScrollManager } from "@/components/hash-scroll-manager";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustSection } from "@/components/trust-section";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const ServicesSection = dynamic(() => import("@/components/services-section"), {
  loading: () => <SectionFallback className="h-[520px]" />
});

const PortfolioSection = dynamic(() => import("@/components/portfolio-section"), {
  loading: () => <SectionFallback className="h-[620px]" />
});

const ProcessSection = dynamic(() => import("@/components/process-section"), {
  loading: () => <SectionFallback className="h-[560px]" />
});

const FaqSection = dynamic(() => import("@/components/faq-section"), {
  loading: () => <SectionFallback className="h-[460px]" />
});

const CtaSection = dynamic(() => import("@/components/cta-section"), {
  loading: () => <SectionFallback className="h-[420px]" />
});

function SectionFallback({ className }: { className?: string }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="section-shell">
        <div className={cn("glass-panel animate-pulse bg-white/70", className)} />
      </div>
    </section>
  );
}

function getHomeUrl(locale: Locale) {
  return absoluteUrl(getLocalizedPath(locale, "/"));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = resolveLocale(params.locale);
  const metadata = getSiteMetadata(locale);
  const homeUrl = getHomeUrl(locale);

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: homeUrl,
      languages: getLocaleAlternates("/")
    },
    openGraph: {
      type: "website",
      locale: metadata.openGraphLocale,
      title: metadata.title,
      description: metadata.webPageDescription,
      url: homeUrl,
      siteName,
      images: [
        {
          url: siteImagePath,
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
      images: [siteImagePath]
    }
  };
}

export default function LocalizedHomePage({ params }: { params: { locale: string } }) {
  const locale = resolveLocale(params.locale);
  const metadata = getSiteMetadata(locale);
  const faq = getHomeFaqData(locale);
  const homeUrl = getHomeUrl(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        alternateName: ["DionisWeb", "dionis web", "dionisweb.com"],
        description: metadata.websiteDescription,
        inLanguage: locale,
        publisher: {
          "@id": `${siteUrl}/#person`
        }
      },
      {
        "@type": "WebPage",
        "@id": `${homeUrl}#webpage`,
        url: homeUrl,
        name: metadata.title,
        isPartOf: {
          "@id": `${siteUrl}/#website`
        },
        about: {
          "@id": `${siteUrl}/#person`
        },
        inLanguage: locale,
        description: metadata.webPageDescription
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Dionis Grecu",
        url: homeUrl,
        image: absoluteUrl(siteImagePath),
        jobTitle: metadata.personJobTitle,
        email: emailAddress,
        worksFor: {
          "@id": `${siteUrl}/#service`
        },
        description: metadata.personDescription,
        sameAs: [instagramUrl, tiktokUrl, whatsappUrl, "https://www.fiverr.com/dgrecu011"]
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: siteName,
        provider: {
          "@id": `${siteUrl}/#person`
        },
        areaServed: metadata.areaServed,
        serviceType: metadata.serviceTypes,
        url: homeUrl,
        email: emailAddress,
        description: metadata.serviceDescription,
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "40",
          availability: "https://schema.org/InStock",
          description: metadata.offerDescription
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${homeUrl}#faq`,
        mainEntity: faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      }
    ]
  };

  return (
    <main className="relative isolate overflow-hidden" suppressHydrationWarning>
      <HashScrollManager />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pointer-events-none absolute inset-x-0 top-[-12rem] -z-10 h-[34rem] bg-[radial-gradient(circle_at_20%_20%,rgba(47,77,224,0.12),transparent_26%),radial-gradient(circle_at_82%_10%,rgba(255,255,255,0.54),transparent_28%)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-[22rem] -z-10 h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(47,77,224,0.12),transparent_68%)] blur-3xl animate-[float-soft_18s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute right-[-7rem] top-[40rem] -z-10 h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.42),transparent_68%)] blur-3xl animate-[float-soft_22s_ease-in-out_infinite]" />

      <SiteHeader />
      <HeroSection />
      <TrustSection />
      <PortfolioSection />
      <ServicesSection />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
      <WhatsAppFloat />
      <SiteFooter />
    </main>
  );
}
