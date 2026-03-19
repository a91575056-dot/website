"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { portfolioItems, whatsappUrl } from "@/lib/site-data";
import { usePerformanceMode } from "@/lib/use-performance-mode";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type PortfolioItem = (typeof portfolioItems)[number];
const portfolioPreviewImages = [
  "/assets/portfolio-auto.jpg",
  "/assets/portfolio-agency.jpg",
  "/assets/portfolio-barber.jpg"
];

function PortfolioInlineVideo({
  item,
  isActive,
  shouldLoad,
  onOpen
}: {
  item: PortfolioItem;
  isActive: boolean;
  shouldLoad: boolean;
  onOpen: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !shouldLoad) {
      return;
    }

    if (isActive) {
      const playPromise = video.play();
      if (playPromise instanceof Promise) {
        playPromise.catch(() => undefined);
      }
      return;
    }

    video.pause();
  }, [isActive, shouldLoad]);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block aspect-[16/10] w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#050814] text-left touch-manipulation"
      aria-label={`Open full screen preview for ${item.title}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          src={shouldLoad ? item.video : undefined}
          muted
          loop
          playsInline
          preload={shouldLoad ? "metadata" : "none"}
          className="pointer-events-none h-full w-full object-contain"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,11,24,0.1),rgba(6,11,24,0.02)_48%,rgba(6,11,24,0.22))]" />
      <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 backdrop-blur-xl">
        <Play className="h-3.5 w-3.5 fill-current text-white" />
        <span className="text-[10px] uppercase tracking-[0.22em] text-white/70">{item.duration}</span>
      </div>
      <div className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-xl">
        Tap for full screen
      </div>
    </button>
  );
}

export function PortfolioSection() {
  const scope = useRef<HTMLElement | null>(null);
  const mobileScrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const [loadedMobileIndexes, setLoadedMobileIndexes] = useState<number[]>([0, 1]);
  const { isConstrained } = usePerformanceMode();

  const updateActiveMobileIndex = () => {
    const scroller = mobileScrollerRef.current;

    if (!scroller) {
      return;
    }

    const cards = Array.from(scroller.querySelectorAll<HTMLElement>("[data-mobile-card]"));

    if (!cards.length) {
      return;
    }

    const viewportCenter = scroller.scrollLeft + scroller.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(cardCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveMobileIndex(closestIndex);
  };

  useEffect(() => {
    updateActiveMobileIndex();
  }, []);

  useEffect(() => {
    setLoadedMobileIndexes((previous) => {
      const next = new Set(previous);

      next.add(activeMobileIndex);

      if (activeMobileIndex > 0) {
        next.add(activeMobileIndex - 1);
      }

      if (activeMobileIndex < portfolioItems.length - 1) {
        next.add(activeMobileIndex + 1);
      }

      return Array.from(next).sort((a, b) => a - b);
    });
  }, [activeMobileIndex]);

  useGSAP(
    () => {
      if (isConstrained) {
        return;
      }

      const cards = gsap.utils.toArray<HTMLElement>("[data-portfolio-card]");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: index % 2 === 0 ? 36 : 18 },
          {
            y: index % 2 === 0 ? -18 : -30,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      });
    },
    { scope, dependencies: [isConstrained] }
  );

  return (
    <section id="portfolio" ref={scope} className="py-16 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Examples"
            title="A few concrete website examples for the kinds of projects I usually take."
            copy="These are example directions for real website types. I can adapt the structure, design and framework to your business, niche and content."
          />

          <div className="glass-panel max-w-md rounded-[24px] px-5 py-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-white/58">
              <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
              Scroll through the examples and open any one for a closer preview.
            </div>
          </div>
        </div>

        <div className="mt-10 lg:hidden">
          <div className="mb-4 flex items-center justify-between gap-4 px-1">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/46">
              <span>Swipe to see more projects</span>
              <ArrowRight className="h-3.5 w-3.5 text-cyan-200" />
            </div>
            <div className="flex items-center gap-2">
              {portfolioItems.map((item, index) => (
                <span
                  key={item.title}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeMobileIndex ? "w-7 bg-cyan-200" : "w-1.5 bg-white/24"
                  }`}
                />
              ))}
            </div>
          </div>

          <div
            ref={mobileScrollerRef}
            onScroll={updateActiveMobileIndex}
            className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 overscroll-x-contain scroll-pl-4 touch-manipulation [-webkit-overflow-scrolling:touch]"
          >
            {portfolioItems.map((item, index) => (
              <article
                key={item.title}
                data-mobile-card
                className="glass-panel w-[84vw] max-w-[23rem] shrink-0 snap-start rounded-[28px] border-white/10 p-4 sm:w-[24rem] sm:max-w-none sm:p-5"
              >
                <PortfolioInlineVideo
                  item={item}
                  isActive={index === activeMobileIndex && activeItem === null}
                  shouldLoad={loadedMobileIndexes.includes(index)}
                  onOpen={() => setActiveItem(item)}
                />

                <div className="mt-4">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-cyan-200/80">{item.meta}</div>
                  <div className="mt-2 font-display text-[1.9rem] leading-none text-white">{item.title}</div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((tag) => (
                    <span key={tag} className="tag-chip bg-white/[0.03] text-white/64">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <div className="text-sm uppercase tracking-[0.24em] text-white/40">{item.label}</div>
                  <p className="mt-3 text-sm leading-7 text-white/62">{item.copy}</p>
                </div>

                <div className="soft-divider mt-6" />
                <div className="mt-5 flex flex-col gap-3">
                  <p className="text-sm leading-6 text-white/52">{item.result}</p>
                  <div className="flex flex-col gap-2">
                    <Button type="button" variant="secondary" onClick={() => setActiveItem(item)} className="justify-center">
                      Open video preview
                    </Button>
                    <Button asChild variant="ghost" className="justify-center">
                      <a href={whatsappUrl} target="_blank" rel="noreferrer">
                        Ask for a similar website
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="hidden gap-5 lg:grid lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <motion.article
              key={item.title}
              data-portfolio-card
              initial={isConstrained ? false : { opacity: 0, y: 30 }}
              whileInView={isConstrained ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={isConstrained ? undefined : { y: -10, scale: 1.01 }}
              className="group interactive-card glass-panel min-w-[86vw] shrink-0 snap-start rounded-[28px] border-white/10 sm:min-w-[420px] lg:min-w-0 lg:shrink"
            >
              <button
                type="button"
                onClick={() => setActiveItem(item)}
                className="block w-full select-none text-left"
                data-cursor="interactive"
              >
                <div className="relative overflow-hidden rounded-t-[28px] border-b border-white/10">
                  <Image
                    src={portfolioPreviewImages[index]}
                    alt={`${item.title} preview`}
                    width={960}
                    height={1280}
                    className="h-[23rem] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 86vw, (max-width: 1024px) 420px, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,11,24,0.12),rgba(6,11,24,0.05)_35%,rgba(6,11,24,0.86))]" />

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-xl">
                    <Play className="h-3.5 w-3.5 fill-current text-white" />
                    <span className="text-[10px] uppercase tracking-[0.22em] text-white/70">{item.duration}</span>
                  </div>

                  <div className="absolute inset-x-4 bottom-4">
                    <div className="rounded-[22px] border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-cyan-200/80">{item.meta}</div>
                      <div className="mt-2 font-display text-2xl leading-none text-white">{item.title}</div>
                    </div>
                  </div>
                </div>
              </button>

              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tag) => (
                    <span key={tag} className="tag-chip bg-white/[0.03] text-white/64">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm uppercase tracking-[0.24em] text-white/40">{item.label}</div>
                    <p className="mt-3 text-sm leading-7 text-white/62">{item.copy}</p>
                  </div>
                </div>

                <div className="soft-divider mt-6" />
                <div className="mt-5 flex items-center justify-between gap-4">
                  <p className="max-w-[13rem] text-sm leading-6 text-white/52">{item.result}</p>
                  <Button asChild variant="ghost" className="-mr-2">
                    <a href={whatsappUrl} target="_blank" rel="noreferrer">
                      Ask for a similar website
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <Dialog open={Boolean(activeItem)} onOpenChange={(open) => !open && setActiveItem(null)}>
          <DialogContent className="left-0 top-0 h-[100dvh] w-screen max-w-none translate-x-0 translate-y-0 rounded-none border-0 bg-black p-0 text-white [&>button]:right-4 [&>button]:top-4 [&>button]:z-20 [&>button]:rounded-full [&>button]:border [&>button]:border-white/10 [&>button]:bg-black/60 [&>button]:p-2 [&>button]:text-white [&>button]:opacity-100 sm:left-1/2 sm:top-1/2 sm:h-auto sm:w-[calc(100%-1.5rem)] sm:max-w-5xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[2rem] sm:border sm:p-4 sm:pt-6">
            {activeItem ? (
              <>
                <DialogTitle className="sr-only">{activeItem.title} video preview</DialogTitle>
                <DialogDescription className="sr-only">
                  Full-screen portfolio video preview for {activeItem.title}. Tap or click outside to close.
                </DialogDescription>

                <div className="relative h-full sm:hidden">
                  <video
                    key={activeItem.video}
                    src={activeItem.video}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-contain"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(6,8,18,0),rgba(6,8,18,0.92)_54%,rgba(6,8,18,0.98))] px-5 pb-6 pt-16">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-cyan-200/78">{activeItem.meta}</div>
                    <h3 className="mt-2 font-display text-2xl text-white">{activeItem.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/62">{activeItem.copy}</p>
                  </div>
                </div>

                <div className="hidden bg-[linear-gradient(180deg,rgba(8,12,26,0.98),rgba(6,8,18,0.98))] sm:block">
                  <div className="mb-5 px-0 pb-0 pt-0 pr-10">
                    <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">{activeItem.label}</div>
                    <h3 className="mt-2 font-display text-4xl text-white">{activeItem.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62">{activeItem.copy}</p>
                  </div>

                  <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-black sm:rounded-[26px] sm:border sm:border-white/10">
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
              </>
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

export default PortfolioSection;
