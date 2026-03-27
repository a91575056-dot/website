"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, MessageCircleMore } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { useLocale } from "@/components/locale-provider";
import { SectionLink } from "@/components/section-link";
import { Button } from "@/components/ui/button";
import { getSiteData, whatsappUrl } from "@/lib/site-data";
import { usePerformanceMode } from "@/lib/use-performance-mode";

export function HeroSection() {
  const locale = useLocale();
  const { hero } = getSiteData(locale);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { isConstrained, hasMounted } = usePerformanceMode();
  const shouldReduceMotion = useReducedMotion();
  const enableIntroMotion = hasMounted && !shouldReduceMotion;
  const enableDepthMotion = enableIntroMotion && !isConstrained;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const meshY = useTransform(scrollYProgress, [0, 1], [0, 88]);
  const meshOpacity = useTransform(scrollYProgress, [0, 1], [0.42, 0.14]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 54]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const cardOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -36]);

  return (
    <section id="top" ref={sectionRef} className="relative overflow-hidden pb-14 pt-8 sm:pb-20 sm:pt-12">
      <motion.div
        aria-hidden
        className="hero-mesh pointer-events-none absolute inset-x-0 top-0 h-[26rem]"
        style={enableDepthMotion ? { y: meshY, opacity: meshOpacity } : undefined}
      />

      <div className="section-shell">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(360px,1.06fr)] lg:gap-12">
          <div className="order-2 max-w-3xl lg:order-1">
            <motion.p
              key={enableIntroMotion ? "hero-kicker-motion" : "hero-kicker-static"}
              initial={enableIntroMotion ? { opacity: 0, y: 16 } : false}
              animate={enableIntroMotion ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="section-kicker"
            >
              {hero.kicker}
            </motion.p>

            <motion.h1
              key={enableIntroMotion ? "hero-title-motion" : "hero-title-static"}
              initial={enableIntroMotion ? { opacity: 0, y: 20 } : false}
              animate={enableIntroMotion ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="display-hero mt-4 max-w-4xl text-stone-950"
            >
              {hero.titleLines[0]}
              <br />
              {hero.titleLines[1]}
            </motion.h1>

            <motion.p
              key={enableIntroMotion ? "hero-copy-motion" : "hero-copy-static"}
              initial={enableIntroMotion ? { opacity: 0, y: 18 } : false}
              animate={enableIntroMotion ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg"
            >
              {hero.copy}
            </motion.p>

            <motion.div
              key={enableIntroMotion ? "hero-actions-motion" : "hero-actions-static"}
              initial={enableIntroMotion ? { opacity: 0, y: 18 } : false}
              animate={enableIntroMotion ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.72, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild size="lg">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircleMore className="mr-2 h-4 w-4" />
                  {hero.primaryCta}
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <SectionLink targetId="portfolio">
                  {hero.secondaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </SectionLink>
              </Button>
            </motion.div>

            <motion.div
              key={enableIntroMotion ? "hero-pillars-motion" : "hero-pillars-static"}
              initial={enableIntroMotion ? { opacity: 0, y: 18 } : false}
              animate={enableIntroMotion ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.72, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 flex flex-wrap gap-2.5"
            >
              {hero.pillars.map((item, index) => (
                <motion.div
                  key={`${enableIntroMotion ? "hero-pillar-motion" : "hero-pillar-static"}-${item}`}
                  initial={enableIntroMotion ? { opacity: 0, y: 20 } : false}
                  animate={enableIntroMotion ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.64, delay: 0.36 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="tag-chip"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.article
            key={enableIntroMotion ? "hero-card-motion" : "hero-card-static"}
            initial={enableIntroMotion ? { opacity: 0, y: 26 } : false}
            animate={enableIntroMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.78, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={enableDepthMotion ? { y: cardY, scale: cardScale, opacity: cardOpacity } : undefined}
            className="glass-panel premium-outline order-1 relative rounded-[34px] p-3 sm:p-4 lg:order-2"
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.28),transparent_68%)] blur-3xl"
              style={enableDepthMotion ? { y: orbY } : undefined}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -left-10 bottom-14 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.36),transparent_72%)] blur-3xl"
              style={enableDepthMotion ? { y: cardY } : undefined}
            />

            <div className="grid gap-3">
              <div className="grid gap-4 rounded-[30px] bg-[#161616] p-5 text-white shadow-[0_22px_60px_rgba(28,25,23,0.16)] sm:grid-cols-[minmax(0,1fr)_12rem] sm:p-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.24em] text-white/44">Dionis Grecu</div>
                  <div className="display-feature mt-3 max-w-[12ch] text-white">
                    {hero.cardTitle}
                  </div>
                  <p className="mt-4 max-w-md text-sm leading-7 text-white/64">
                    {hero.cardCopy}
                  </p>

                  <div className="tag-chip-dark mt-5">
                    {hero.availability}
                  </div>
                </div>

                <div className="relative min-h-[18rem] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04]">
                  <Image
                    src="/assets/111.png"
                    alt="Dionis Grecu"
                    width={1024}
                    height={1536}
                    priority
                    sizes="(max-width: 640px) 100vw, 192px"
                    className="h-full w-full object-cover object-[center_14%]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,20,20,0.02),rgba(20,20,20,0.08)_42%,rgba(20,20,20,0.58))]" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[24px] border border-stone-300/70 bg-white/84 px-5 py-4 sm:px-6 sm:py-5">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#2f4de0]/72">{hero.bestForLabel}</div>
                  <div className="mt-2 text-sm font-semibold leading-7 text-stone-900 sm:text-[15px]">
                    {hero.bestForCopy}
                  </div>
                </div>

                <div className="rounded-[24px] border border-stone-300/70 bg-white/84 px-5 py-4 sm:px-6 sm:py-5">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#2f4de0]/72">{hero.buildStyleLabel}</div>
                  <div className="mt-2 text-sm font-semibold leading-7 text-stone-900 sm:text-[15px]">
                    {hero.buildStyleCopy}
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
