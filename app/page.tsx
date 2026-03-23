import dynamic from "next/dynamic";

import { HashScrollManager } from "@/components/hash-scroll-manager";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustSection } from "@/components/trust-section";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { getRequestLocale } from "@/lib/get-request-locale";
import { getSiteMetadata } from "@/lib/site-metadata";
import { emailAddress, instagramUrl, whatsappUrl } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const ServicesSection = dynamic(() => import("@/components/services-section"), {
  loading: () => <SectionFallback className="h-[520px]" />
});

const PortfolioSection = dynamic(() => import("@/components/portfolio-section"), {
  loading: () => <SectionFallback className="h-[620px]" />
});

const ProcessSection = dynamic(() => import("@/components/process-section"), {
  loading: () => <SectionFallback className="h-[560px]" />
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

export default function HomePage() {
  const locale = getRequestLocale();
  const metadata = getSiteMetadata(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://dionisweb.com/#website",
        url: "https://dionisweb.com/",
        name: "Dionis Web",
        alternateName: ["DionisWeb", "dionis web", "dionisweb.com"],
        description: metadata.websiteDescription,
        inLanguage: locale,
        publisher: {
          "@id": "https://dionisweb.com/#person"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://dionisweb.com/#webpage",
        url: "https://dionisweb.com/",
        name: metadata.title,
        isPartOf: {
          "@id": "https://dionisweb.com/#website"
        },
        about: {
          "@id": "https://dionisweb.com/#person"
        },
        description: metadata.webPageDescription
      },
      {
        "@type": "Person",
        "@id": "https://dionisweb.com/#person",
        name: "Dionis Grecu",
        url: "https://dionisweb.com/",
        image: "https://dionisweb.com/assets/111.png",
        jobTitle: metadata.personJobTitle,
        email: emailAddress,
        worksFor: {
          "@id": "https://dionisweb.com/#service"
        },
        description: metadata.personDescription,
        sameAs: [instagramUrl, whatsappUrl, "https://www.fiverr.com/dgrecu011"]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://dionisweb.com/#service",
        name: "Dionis Web",
        provider: {
          "@id": "https://dionisweb.com/#person"
        },
        areaServed: metadata.areaServed,
        serviceType: metadata.serviceTypes,
        url: "https://dionisweb.com/",
        email: emailAddress,
        description: metadata.serviceDescription,
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "40",
          availability: "https://schema.org/InStock",
          description: metadata.offerDescription
        }
      }
    ]
  };

  return (
    <main className="relative isolate overflow-hidden">
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
      <CtaSection />
      <WhatsAppFloat />
      <SiteFooter />
    </main>
  );
}
