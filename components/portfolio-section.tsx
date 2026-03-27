"use client";

import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "framer-motion";

import { useLocale } from "@/components/locale-provider";
import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ViewportVideo } from "@/components/viewport-video";
import { getSiteData, type PortfolioItem, whatsappUrl } from "@/lib/site-data";
import { usePerformanceMode } from "@/lib/use-performance-mode";

export function PortfolioSection() {
  const locale = useLocale();
  const { portfolio } = getSiteData(locale);
  const featuredItems = portfolio.items;
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const { isConstrained, hasMounted } = usePerformanceMode();
  const enableMotion = hasMounted && !isConstrained;

  return (
    <section id="portfolio" className="py-14 sm:py-20" suppressHydrationWarning>
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:gap-12">
          <SectionIntro
            eyebrow={portfolio.eyebrow}
            title={portfolio.title}
            copy={portfolio.copy}
            className="max-w-none"
          />

          <div className="grid gap-5 md:grid-cols-2">
            {featuredItems.map((item, index) => (
              <motion.article
                key={`${enableMotion ? "motion" : "static"}-${item.title}`}
                initial={enableMotion ? { opacity: 0, y: 24, scale: 0.985, filter: "blur(10px)" } : false}
                whileInView={enableMotion ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : undefined}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={enableMotion ? { y: -10, scale: 1.01 } : undefined}
                className="interactive-card group flex h-full flex-col overflow-hidden rounded-[30px] border border-stone-300/80 bg-[linear-gradient(180deg,rgba(255,252,248,0.98),rgba(247,242,235,0.94))] shadow-[0_18px_44px_rgba(28,25,23,0.06)] backdrop-blur-xl"
              >
                <button type="button" onClick={() => setActiveItem(item)} className="block w-full text-left">
                  <div className="relative aspect-[1.08/1] overflow-hidden border-b border-stone-300/80 bg-[#0f0f11]">
                    <ViewportVideo
                      src={item.video}
                      poster={item.image}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,8,0.22),rgba(6,6,8,0.34)_38%,rgba(6,6,8,0.9))]" />
                    <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
                      <span className="overlay-chip">
                        {item.meta}
                      </span>
                      <span className="overlay-chip">
                        <Play className="h-3 w-3 fill-current" />
                        {item.duration}
                      </span>
                    </div>
                    <div className="absolute inset-x-5 bottom-5">
                      <div className="inline-flex max-w-full rounded-[24px] border border-white/14 bg-black/46 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.28)] backdrop-blur-md">
                        <div>
                          <div className="display-feature max-w-[11ch] text-white [text-shadow:0_4px_18px_rgba(0,0,0,0.42)]">
                            {item.title}
                          </div>
                          <div className="mt-3 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.24em] text-white/76">
                            <span aria-hidden className="h-px w-5 bg-white/34" />
                            {portfolio.openVideoPreview}
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-[#2f4de0]/72">{item.label}</div>
                  <p className="mt-3 text-[15px] leading-7 text-stone-700">{item.copy}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.stack.map((tag) => (
                      <span key={tag} className="tag-chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="soft-divider mt-5" />

                  <div className="mt-5 flex flex-1 flex-col gap-5">
                    <p className="text-sm leading-7 text-stone-500">{item.result}</p>
                    <Button asChild variant="secondary" className="w-full justify-center">
                      <a href={whatsappUrl} target="_blank" rel="noreferrer">
                        {portfolio.requestThisStyle}
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {activeItem ? (
          <Dialog open onOpenChange={(open) => !open && setActiveItem(null)}>
            <DialogContent className="left-0 top-0 h-[100dvh] w-screen max-w-none translate-x-0 translate-y-0 rounded-none border-0 bg-[#f4efe7] p-0 text-stone-950 [&>button]:right-4 [&>button]:top-4 [&>button]:z-20 [&>button]:rounded-full [&>button]:border [&>button]:border-stone-300 [&>button]:bg-white/92 [&>button]:p-2 [&>button]:text-stone-900 [&>button]:opacity-100 sm:left-1/2 sm:top-1/2 sm:h-auto sm:w-[calc(100%-1.5rem)] sm:max-w-5xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[2rem] sm:border sm:border-stone-300 sm:p-4 sm:pt-6">
              <DialogTitle className="sr-only">
                {activeItem.title} {portfolio.videoPreviewSuffix}
              </DialogTitle>
              <DialogDescription className="sr-only">
                {portfolio.fullscreenPreviewPrefix} {activeItem.title}. {portfolio.fullscreenPreviewHint}
              </DialogDescription>

              <div className="relative h-full bg-[#f4efe7] sm:hidden">
                <video
                  key={activeItem.video}
                  src={activeItem.video}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-contain"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(244,239,231,0),rgba(244,239,231,0.92)_54%,rgba(244,239,231,0.98))] px-5 pb-6 pt-16">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-[#2f4de0]/78">{activeItem.meta}</div>
                  <h3 className="display-card mt-2 text-stone-950">{activeItem.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-700">{activeItem.copy}</p>
                </div>
              </div>

              <div className="hidden bg-[linear-gradient(180deg,rgba(251,247,241,0.98),rgba(245,239,231,0.96))] sm:block">
                <div className="mb-5 px-0 pb-0 pt-0 pr-10">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-stone-400">{activeItem.label}</div>
                  <h3 className="display-feature mt-2 text-stone-950">{activeItem.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-700">{activeItem.copy}</p>
                </div>

                <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[26px] border border-stone-300 bg-[#111111]">
                  <video
                    key={activeItem.video}
                    src={activeItem.video}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ) : null}
      </div>
    </section>
  );
}

export default PortfolioSection;
