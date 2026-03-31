"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { useLocale } from "@/components/locale-provider";
import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";
import { getSiteData } from "@/lib/site-data";
import { usePerformanceMode } from "@/lib/use-performance-mode";

export function PortfolioSection() {
  const locale = useLocale();
  const { portfolio } = getSiteData(locale);
  const featuredItems = portfolio.items.slice(0, 2);
  const { isConstrained, hasMounted } = usePerformanceMode();
  const enableMotion = hasMounted && !isConstrained;

  if (!featuredItems.length) {
    return null;
  }

  return (
    <section id="portfolio" className="py-14 sm:py-20" suppressHydrationWarning>
      <div className="section-shell">
        <div className="grid gap-8 xl:gap-12">
          <SectionIntro
            eyebrow={portfolio.eyebrow}
            title={portfolio.title}
            copy={portfolio.copy}
            className="max-w-none"
          />

          <div className="grid gap-6 xl:gap-8">
            {featuredItems.map((featuredItem, index) => {
              const liveUrl = featuredItem.liveUrl;

              return (
              <motion.article
                key={`${enableMotion ? "motion" : "static"}-${featuredItem.title}`}
                initial={enableMotion ? { opacity: 0, y: 24, scale: 0.985, filter: "blur(10px)" } : false}
                whileInView={enableMotion ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : undefined}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="interactive-card overflow-hidden rounded-[32px] border border-stone-300/80 bg-[linear-gradient(180deg,rgba(255,252,248,0.98),rgba(247,242,235,0.94))] shadow-[0_22px_54px_rgba(28,25,23,0.08)] backdrop-blur-xl"
              >
                <div className="grid gap-0 xl:grid-cols-[1.08fr_0.92fr]">
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative block min-h-[320px] overflow-hidden border-b border-stone-300/80 bg-[#0f0f11] xl:min-h-[520px] xl:border-b-0 xl:border-r"
                  >
                    <Image
                      src={featuredItem.image}
                      alt={`${featuredItem.title} live project preview`}
                      fill
                      sizes="(min-width: 1024px) 56vw, 100vw"
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,8,0.2),rgba(6,6,8,0.38)_44%,rgba(6,6,8,0.9))]" />

                    <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3 sm:inset-x-6 sm:top-6">
                      <span className="overlay-chip">{featuredItem.meta}</span>
                      <span className="overlay-chip">Live</span>
                    </div>

                    <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
                      <h3 className="display-feature max-w-[14ch] text-white [text-shadow:0_4px_18px_rgba(0,0,0,0.42)]">
                        {featuredItem.title}
                      </h3>
                      <div className="mt-3 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.24em] text-white/82">
                        <span aria-hidden className="h-px w-5 bg-white/34" />
                        {portfolio.openVideoPreview}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </a>

                  <div className="flex h-full flex-col px-6 py-6 sm:px-8 sm:py-8">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-[#2f4de0]/72">{featuredItem.label}</div>
                    <p className="mt-4 text-[15px] leading-7 text-stone-700">{featuredItem.copy}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {featuredItem.stack.map((tag) => (
                        <span key={tag} className="tag-chip">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="soft-divider mt-6" />

                    <p className="mt-6 text-sm leading-7 text-stone-500">{featuredItem.result}</p>

                    <div className="mt-7">
                      <Button asChild variant="secondary" className="w-full justify-center sm:w-auto sm:min-w-[230px]">
                        <a href={liveUrl} target="_blank" rel="noreferrer">
                          {portfolio.openVideoPreview}
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
