import dynamic from "next/dynamic";

import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustSection } from "@/components/trust-section";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { instagramUrl, whatsappUrl } from "@/lib/site-data";
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
        <div className={cn("glass-panel animate-pulse bg-white/[0.04]", className)} />
      </div>
    </section>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://dionisweb.com/#website",
      url: "https://dionisweb.com/",
      name: "Dionis Grecu",
      description: "Front-end developer website for landing pages, business websites and portfolio sites."
    },
    {
      "@type": "Person",
      "@id": "https://dionisweb.com/#person",
      name: "Dionis Grecu",
      url: "https://dionisweb.com/",
      image: "https://dionisweb.com/assets/111.png",
      jobTitle: "Freelance Front-End Developer",
      description: "Front-end developer building landing pages, business websites and portfolio sites in Next.js, React, Astro and static HTML with Tailwind.",
      sameAs: [instagramUrl, whatsappUrl, "https://www.fiverr.com/dgrecu011"]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://dionisweb.com/#service",
      name: "Landing Page and Front-End Development",
      provider: {
        "@id": "https://dionisweb.com/#person"
      },
      areaServed: "Worldwide",
      description: "Custom landing pages, business websites and portfolio sites built in Next.js, React with Vite, Astro or static HTML and Tailwind.",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "40",
        description: "Front-end development for landing pages, business websites and portfolio websites."
      }
    }
  ]
};

export default function HomePage() {
  return (
    <main className="relative isolate overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_15%_8%,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_82%_4%,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_52%_18%,rgba(236,72,153,0.14),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_36%,rgba(59,130,246,0.08),transparent_22%),radial-gradient(circle_at_78%_42%,rgba(192,132,252,0.08),transparent_18%),radial-gradient(circle_at_50%_76%,rgba(244,114,182,0.06),transparent_20%)]" />

      <SiteHeader />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <CtaSection />
      <WhatsAppFloat />
      <SiteFooter />
    </main>
  );
}
