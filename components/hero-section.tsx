"use client";

import Image from "next/image";
import { ArrowRight, BadgeCheck, Clock3, MessageCircleMore, Sparkles } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { BlurRevealText } from "@/components/blur-reveal-text";
import { SectionLink } from "@/components/section-link";
import { Button } from "@/components/ui/button";
import { heroBadges, heroHighlights, whatsappUrl } from "@/lib/site-data";
import { usePerformanceMode } from "@/lib/use-performance-mode";

const particlePositions = [
  { left: "8%", top: "16%" },
  { left: "24%", top: "8%" },
  { left: "78%", top: "18%" },
  { left: "88%", top: "34%" },
  { left: "12%", top: "64%" },
  { left: "36%", top: "72%" },
  { left: "68%", top: "74%" },
  { left: "54%", top: "14%" }
];

const particleTones = [
  "bg-cyan-200 shadow-[0_0_20px_rgba(103,232,249,0.92)]",
  "bg-fuchsia-300 shadow-[0_0_20px_rgba(244,114,182,0.88)]",
  "bg-sky-300 shadow-[0_0_20px_rgba(125,211,252,0.9)]",
  "bg-violet-300 shadow-[0_0_20px_rgba(196,181,253,0.88)]"
];

const particleGlows = [
  "bg-cyan-300/28",
  "bg-fuchsia-400/24",
  "bg-sky-300/24",
  "bg-violet-300/24"
];

export function HeroSection() {
  const scope = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { isConstrained } = usePerformanceMode();
  const { scrollYProgress } = useScroll({
    target: scope,
    offset: ["start start", "end start"]
  });

  const visualY = useTransform(scrollYProgress, [0, 1], [0, -22]);
  const visualRotate = useTransform(scrollYProgress, [0, 1], [0, -1.5]);

  return (
    <section id="top" ref={scope} className="relative overflow-hidden pb-16 pt-8 sm:pb-24 sm:pt-10">
      <div className="hero-mesh pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute left-[-6%] top-14 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.24),transparent_68%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-6%] top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.2),transparent_66%)] blur-3xl" />
      <div className="pointer-events-none absolute left-[42%] top-28 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.16),transparent_66%)] blur-3xl" />

      {particlePositions.map((particle, index) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="pointer-events-none absolute block h-2 w-2"
          style={particle}
          animate={
            shouldReduceMotion
              ? undefined
              : isConstrained
                ? {
                    x: [0, index % 2 === 0 ? 4 : -4, 0],
                    y: [0, -8, 0],
                    opacity: [0.42, 0.95, 0.48],
                    scale: [1, 1.45, 1]
                  }
                : {
                    x: [0, index % 2 === 0 ? 7 : -7, 0],
                    y: [0, -16, 0],
                    opacity: [0.3, 1, 0.36],
                    scale: [1, 1.7, 1]
                  }
          }
          transition={{
            duration: (isConstrained ? 3.2 : 4.8) + index * 0.35,
            delay: index * 0.22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        >
          <span
            className={`absolute inset-[-6px] rounded-full blur-[8px] ${particleGlows[index % particleGlows.length]}`}
            aria-hidden
          />
          <span className={`absolute inset-0 rounded-full ${particleTones[index % particleTones.length]}`} aria-hidden />
        </motion.span>
      ))}

      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-cyan-100"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Websites for businesses, freelancers and personal brands
            </motion.div>

            <div className="mt-6 space-y-2">
              <BlurRevealText
                text="Landing pages, business websites"
                className="block font-display text-[clamp(3rem,13vw,6.6rem)] leading-[0.9] tracking-[-0.07em] text-white"
              />
              <BlurRevealText
                text="and portfolio sites built in the right stack."
                delay={0.18}
                className="text-gradient block font-display text-[clamp(3rem,13vw,6.6rem)] leading-[0.9] tracking-[-0.07em]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg"
            >
              I build mobile-first websites in Next.js, React with Vite, Astro or static HTML and Tailwind. For UI and animation I
              work with Tailwind CSS, GSAP, Framer Motion, Lenis and shadcn/ui when the project needs it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild size="lg">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircleMore className="mr-2 h-4 w-4" />
                  Get a quote on WhatsApp
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <SectionLink targetId="portfolio">
                  See examples
                  <ArrowRight className="ml-2 h-4 w-4" />
                </SectionLink>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/58"
            >
              <Clock3 className="h-4 w-4 text-cyan-200" />
              Usually replies within 24 hours
            </motion.div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroHighlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.56 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-panel rounded-[22px] border-white/10 px-4 py-4 text-sm leading-6 text-white/68"
                >
                  <BadgeCheck className="mb-3 h-4 w-4 text-cyan-200" />
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            style={isConstrained ? undefined : { y: visualY, rotate: visualRotate }}
            className="relative mx-auto w-full max-w-[30rem] xl:max-w-[33rem]"
          >
            <div className="glass-panel rounded-[32px] p-4 sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.14),transparent_28%)]" />

              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,28,0.95),rgba(10,10,20,0.92))] p-3 shadow-[0_26px_80px_rgba(3,6,22,0.55)]">
                <div className="flex items-center justify-between gap-3 px-2 pb-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/50">
                    Website preview
                  </div>
                </div>

                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#080d1c]">
                  <div className="relative">
                    <Image
                      src="/assets/111.png"
                      alt="Dionis Grecu portrait"
                      width={1024}
                      height={1536}
                      priority
                      sizes="(max-width: 640px) 92vw, (max-width: 1280px) 48vw, 528px"
                      className="h-[23rem] w-full object-cover object-[center_12%] sm:h-[27rem] lg:h-[30rem]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,20,0.02),rgba(5,9,20,0.05)_46%,rgba(5,9,20,0.36))]" />

                    <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/55 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-cyan-100 backdrop-blur-xl">
                      Front-end developer
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-[22px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl sm:p-5">
                  <div className="font-display text-[1.85rem] leading-[0.95] text-white sm:text-[2.15rem]">Modern websites that look clear and work well on every screen.</div>
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/62">
                    Good for landing pages, local business websites, freelancer portfolios and service presentation websites.
                  </p>
                </div>

                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {heroBadges.map((badge, index) => (
                    <motion.div
                      key={badge.label}
                      animate={shouldReduceMotion || isConstrained ? undefined : { y: [0, -4, 0] }}
                      transition={{
                        duration: 4.6 + index * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                      }}
                      className="rounded-[20px] border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl"
                    >
                      <div className="text-[10px] uppercase tracking-[0.22em] text-white/38">{badge.label}</div>
                      <div className="mt-2 text-sm font-semibold text-white">{badge.value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
