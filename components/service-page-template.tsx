import Link from "next/link";
import { ArrowRight, Check, MessageCircleMore } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Button } from "@/components/ui/button";
import { servicePageLinks, type ServicePageData } from "@/lib/service-page-data";
import { emailAddress, whatsappUrl } from "@/lib/site-data";

export function ServicePageTemplate({ page }: { page: ServicePageData }) {
  const relatedPages = servicePageLinks.filter((item) => item.href !== page.route);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://dionisweb.com${page.route}#webpage`,
        url: `https://dionisweb.com${page.route}`,
        name: page.metadataTitle,
        description: page.metadataDescription,
        isPartOf: {
          "@id": "https://dionisweb.com/#website"
        },
        about: {
          "@id": "https://dionisweb.com/#person"
        }
      },
      {
        "@type": "Person",
        "@id": "https://dionisweb.com/#person",
        name: "Dionis Grecu",
        url: "https://dionisweb.com/",
        image: "https://dionisweb.com/assets/111.png",
        jobTitle: "Freelance Front-End Developer",
        email: emailAddress,
        sameAs: ["https://www.instagram.com/dionis.grecu", "https://www.fiverr.com/dgrecu011", whatsappUrl]
      },
      {
        "@type": "ProfessionalService",
        "@id": `https://dionisweb.com${page.route}#service`,
        name: page.schemaServiceName,
        url: `https://dionisweb.com${page.route}`,
        email: emailAddress,
        description: page.metadataDescription,
        serviceType: page.schemaServiceTypes,
        areaServed: "Worldwide",
        provider: {
          "@id": "https://dionisweb.com/#person"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://dionisweb.com${page.route}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://dionisweb.com/"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.eyebrow,
            item: `https://dionisweb.com${page.route}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `https://dionisweb.com${page.route}#faq`,
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
              <h1 className="mt-4 max-w-5xl font-display text-[clamp(2.9rem,10vw,5.7rem)] leading-[0.92] tracking-[-0.07em] text-stone-950">
                {page.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">{page.intro}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    <MessageCircleMore className="mr-2 h-4 w-4" />
                    Start on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/#portfolio">
                    See selected work
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
              <div className="text-[10px] uppercase tracking-[0.24em] text-[#2f4de0]/78">Good fit for</div>
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
              <p className="section-kicker">What Is Included</p>
              <h2 className="section-heading text-balance">A service page that targets one clear search intent.</h2>
              <p className="section-copy">
                This page exists to match one type of Google search. Instead of asking the homepage to rank for everything,
                this page focuses on one service and explains it in more detail.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {page.deliverables.map((item) => (
                <article
                  key={item.title}
                  className="glass-panel rounded-[28px] px-5 py-5 shadow-[0_14px_32px_rgba(28,25,23,0.04)] sm:px-6 sm:py-6"
                >
                  <div className="text-[10px] uppercase tracking-[0.24em] text-[#2f4de0]/78">{page.eyebrow}</div>
                  <h3 className="mt-3 font-display text-[1.9rem] leading-none tracking-[-0.05em] text-stone-950">{item.title}</h3>
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
            <p className="section-kicker">How I Work</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {page.process.map((item, index) => (
                <article key={item.title} className="rounded-[24px] border border-stone-300/70 bg-white/80 px-4 py-5 sm:px-5">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-[#2f4de0]/76">Step 0{index + 1}</div>
                  <h3 className="mt-3 font-display text-[1.8rem] leading-none tracking-[-0.05em] text-stone-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-700">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="section-shell">
          <p className="section-kicker">FAQ</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {page.faqs.map((item) => (
              <article key={item.question} className="rounded-[28px] border border-stone-300/80 bg-[#fbf7f1] px-5 py-5 shadow-[0_14px_32px_rgba(28,25,23,0.04)] sm:px-6">
                <h3 className="font-display text-[1.8rem] leading-none tracking-[-0.05em] text-stone-950">{item.question}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-700">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="section-shell">
          <p className="section-kicker">Related Pages</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedPages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="interactive-card glass-panel rounded-[28px] px-5 py-5 sm:px-6 sm:py-6"
              >
                <div className="text-[10px] uppercase tracking-[0.24em] text-[#2f4de0]/76">SEO Page</div>
                <h3 className="mt-3 font-display text-[1.9rem] leading-none tracking-[-0.05em] text-stone-950">{item.label}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-700">{item.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-stone-900">
                  Open page
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
                <div className="text-[11px] uppercase tracking-[0.26em] text-white/48">Need this service?</div>
                <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.3rem,8vw,4.6rem)] leading-[0.94] tracking-[-0.06em]">
                  If this is the page visitors should land on, I can build it for your business.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                  Send the business type, offer, deadline and a few references. I can advise whether you need a landing page, a
                  fuller website or a direct front-end build.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Button asChild className="w-full justify-center">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    <MessageCircleMore className="mr-2 h-4 w-4" />
                    Talk on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="secondary" className="w-full justify-center border-white/14 bg-white/10 text-white hover:bg-white/16 hover:text-white">
                  <Link href="/#portfolio">
                    See selected work
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
