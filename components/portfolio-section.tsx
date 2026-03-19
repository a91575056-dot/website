"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { portfolioItems, whatsappUrl } from "@/lib/site-data";
import { usePerformanceMode } from "@/lib/use-performance-mode";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type PortfolioItem = (typeof portfolioItems)[number];
const portfolioPreviewImages = [
  "/assets/portfolio-auto.jpg",
  "/assets/portfolio-agency.jpg",
  "/assets/portfolio-barber.jpg"
];

export function PortfolioSection() {
  const scope = useRef<HTMLElement | null>(null);
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const { isConstrained } = usePerformanceMode();

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
              Open any example to preview the style and structure.
            </div>
          </div>
        </div>

        <div className="hide-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-4 touch-pan-x [scrollbar-width:none] [-webkit-overflow-scrolling:touch] lg:grid lg:grid-cols-3 lg:overflow-visible">
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
                className="block w-full touch-pan-x select-none text-left"
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
          <DialogContent className="max-w-5xl p-4 sm:p-6">
            {activeItem ? (
              <div>
                <div className="mb-5 pr-10">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">{activeItem.label}</div>
                  <h3 className="mt-2 font-display text-3xl text-white sm:text-4xl">{activeItem.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62">{activeItem.copy}</p>
                </div>

                <div className="overflow-hidden rounded-[26px] border border-white/10 bg-black">
                  <video
                    key={activeItem.video}
                    src={activeItem.video}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="aspect-video w-full"
                  />
                </div>
              </div>
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

export default PortfolioSection;
