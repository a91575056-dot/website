import Link from "next/link";
import { ArrowRight, Check, MessageCircleMore } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Button } from "@/components/ui/button";
import { getLocalizedPath, getLocalizedSectionHref, type Locale } from "@/lib/i18n";
import {
  getServicePageCopy,
  getServicePageData,
  getServicePageLinks,
  type ServicePageId
} from "@/lib/service-page-data";
import { absoluteUrl, getLocalizedUrl, siteImagePath, siteUrl } from "@/lib/site-config";
import { emailAddress, instagramUrl, tiktokUrl, whatsappUrl } from "@/lib/site-data";

export function ServicePageTemplate({ pageId, locale }: { pageId: ServicePageId; locale: Locale }) {
  const page = getServicePageData(pageId, locale);
  const copy = getServicePageCopy(locale);
  const relatedPages = getServicePageLinks(locale).filter((item) => item.href !== page.route);
  const pagePath = getLocalizedPath(locale, page.route);
  const pageUrl = absoluteUrl(pagePath);
  const homeUrl = getLocalizedUrl(locale, "/");
  const portfolioHref = getLocalizedSectionHref(locale, "portfolio");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: page.metadataTitle,
        description: page.metadataDescription,
        inLanguage: locale,
        isPartOf: {
          "@id": `${siteUrl}/#website`
        },
        about: {
          "@id": `${siteUrl}/#person`
        }
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Dionis Grecu",
        url: homeUrl,
        image: absoluteUrl(siteImagePath),
        jobTitle: copy.personJobTitle,
        email: emailAddress,
        sameAs: [instagramUrl, tiktokUrl, "https://www.fiverr.com/dgrecu011", whatsappUrl]
      },
      {
        "@type": "ProfessionalService",
        "@id": `${pageUrl}#service`,
        name: page.schemaServiceName,
        url: pageUrl,
        email: emailAddress,
        description: page.metadataDescription,
        serviceType: page.schemaServiceTypes,
        areaServed: copy.areaServed,
        provider: {
          "@id": `${siteUrl}/#person`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: copy.breadcrumbHomeLabel,
            item: homeUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.eyebrow,
            item: pageUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }
    ]
  };

  return (
    <main className="relative isolate overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pointer-events-none absolute inset-x-0 top-[-12rem] -z-10 h-[34rem] bg-[radial-gradient(circle_at_20%_20%,rgba(47,77,224,0.12),transparent_26%),radial-gradient(circle_at_82%_10%,rgba(255,255,255,0.54),transparent_28%)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-[22rem] -z-10 h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(47,77,224,0.12),transparent_68%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-7rem] top-[40rem] -z-10 h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.42),transparent_68%)] blur-3xl" />

      <SiteHeader />

      <section className="pb-16 pt-8 sm:pb-20 sm:pt-12">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_22rem] lg:gap-12">
            <div className="max-w-4xl">
              <p className="section-kicker">{page.eyebrow}</p>
              <h1 className="display-page mt-4 max-w-5xl text-stone-950">
                {page.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">{page.intro}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    <MessageCircleMore className="mr-2 h-4 w-4" />
                    {copy.heroPrimaryButton}
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href={portfolioHref}>
                    {copy.heroSecondaryButton}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {page.heroPoints.map((item) => (
                  <div key={item} className="rounded-[22px] border border-stone-300/70 bg-white/82 px-4 py-4">
                    <div className="text-sm font-medium leading-6 text-stone-900">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="glass-panel h-fit rounded-[30px] px-5 py-6 sm:px-6 sm:py-7">
              <div className="text-[10px] uppercase tracking-[0.24em] text-[#2f4de0]/78">{copy.bestForLabel}</div>
              <div className="mt-4 space-y-4">
                {page.bestFor.map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-stone-300 bg-white text-stone-900">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-7 text-stone-700">{item}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
            <div>
              <p className="section-kicker">{copy.deliverablesEyebrow}</p>
              <h2 className="section-heading text-balance">{copy.deliverablesTitle}</h2>
              <p className="section-copy">{copy.deliverablesCopy}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {page.deliverables.map((item) => (
                <article
                  key={item.title}
                  className="glass-panel rounded-[28px] px-5 py-5 shadow-[0_14px_32px_rgba(28,25,23,0.04)] sm:px-6 sm:py-6"
                >
                  <div className="text-[10px] uppercase tracking-[0.24em] text-[#2f4de0]/78">{page.eyebrow}</div>
                  <h3 className="display-card mt-3 text-stone-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-700">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="section-shell">
          <div className="glass-panel rounded-[32px] px-5 py-6 sm:px-8 sm:py-8">
            <p className="section-kicker">{copy.processEyebrow}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {page.process.map((item, index) => (
                <article key={item.title} className="rounded-[24px] border border-stone-300/70 bg-white/80 px-4 py-5 sm:px-5">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-[#2f4de0]/76">
                    {copy.stepLabel} {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="display-card mt-3 text-stone-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-700">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="section-shell">
          <p className="section-kicker">{copy.faqEyebrow}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {page.faqs.map((item) => (
              <article key={item.question} className="rounded-[28px] border border-stone-300/80 bg-[#fbf7f1] px-5 py-5 shadow-[0_14px_32px_rgba(28,25,23,0.04)] sm:px-6">
                <h3 className="display-card text-stone-950">{item.question}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-700">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="section-shell">
          <p className="section-kicker">{copy.relatedPagesEyebrow}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedPages.map((item) => (
              <Link
                key={item.href}
                href={getLocalizedPath(locale, item.href)}
                className="interactive-card glass-panel rounded-[28px] px-5 py-5 sm:px-6 sm:py-6"
              >
                <div className="text-[10px] uppercase tracking-[0.24em] text-[#2f4de0]/76">{copy.relatedPageLabel}</div>
                <h3 className="display-card mt-3 text-stone-950">{item.label}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-700">{item.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-stone-900">
                  {copy.relatedPageCta}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 pt-8 sm:pb-24">
        <div className="section-shell">
          <div className="rounded-[34px] bg-[#151515] px-5 py-7 text-white shadow-[0_28px_80px_rgba(28,25,23,0.16)] sm:px-8 sm:py-9 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
              <div>
                <div className="text-[11px] uppercase tracking-[0.26em] text-white/48">{copy.finalCtaEyebrow}</div>
                <h2 className="display-section mt-4 max-w-3xl text-white">
                  {copy.finalCtaTitle}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">{copy.finalCtaCopy}</p>
              </div>

              <div className="flex flex-col gap-3">
                <Button asChild className="w-full justify-center">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    <MessageCircleMore className="mr-2 h-4 w-4" />
                    {copy.finalCtaPrimary}
                  </a>
                </Button>
                <Button asChild variant="secondary" className="w-full justify-center border-white/14 bg-white/10 text-white hover:bg-white/16 hover:text-white">
                  <Link href={portfolioHref}>
                    {copy.finalCtaSecondary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
      <SiteFooter />
    </main>
  );
}
