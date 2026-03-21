"use client";

import { useRef } from "react";
import { ArrowRight, MessageCircleMore } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ctaPoints, instagramUrl, whatsappUrl } from "@/lib/site-data";
import { usePerformanceMode } from "@/lib/use-performance-mode";

export function CtaSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { isConstrained, hasMounted } = usePerformanceMode();
  const enableMotion = hasMounted && !isConstrained;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [36, -28]);
  const glowX = useTransform(scrollYProgress, [0, 1], [-18, 24]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [0.92, 1.08]);

  return (
    <section id="contact" ref={sectionRef} className="pb-20 pt-8 sm:pb-24">
      <div className="section-shell">
        <motion.div
          key={enableMotion ? "cta-motion" : "cta-static"}
          initial={enableMotion ? { opacity: 0, y: 24, scale: 0.985, filter: "blur(10px)" } : false}
          whileInView={enableMotion ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : undefined}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[34px] bg-[#151515] px-5 py-7 text-white shadow-[0_28px_80px_rgba(28,25,23,0.16)] sm:px-8 sm:py-9 lg:px-10"
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-10 top-[-4.5rem] h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.34),transparent_68%)] blur-3xl"
            style={enableMotion ? { y: glowY, x: glowX, scale: glowScale } : undefined}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-12 bottom-[-4rem] h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_70%)] blur-3xl"
            style={enableMotion ? { y: glowY, scale: glowScale } : undefined}
          />
          <div aria-hidden className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />

          <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
            <div>
              <div className="text-[11px] uppercase tracking-[0.26em] text-white/48">Contact</div>
              <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,8vw,4.8rem)] leading-[0.94] tracking-[-0.06em]">
                Need a website for your business, service or personal brand?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Send what the business does, what pages or sections you need and a few references. I can also advise the right
                setup: Next.js, React with Vite, Astro or a lighter static build.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {ctaPoints.map((item) => (
                  <span key={item} className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/70">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <div className="text-[11px] uppercase tracking-[0.26em] text-white/48">Fastest way to talk</div>
                <div className="mt-2 font-display text-3xl text-white">WhatsApp</div>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  Best for discussing price, timeline, project scope and which framework makes sense for the website.
                </p>
              </div>

              <Button asChild className="w-full justify-center">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircleMore className="mr-2 h-4 w-4" />
                  Send project details
                </a>
              </Button>

              <Button asChild variant="secondary" className="w-full justify-center border-white/14 bg-white/10 text-white hover:bg-white/16 hover:text-white">
                <a href={instagramUrl} target="_blank" rel="noreferrer">
                  See Instagram
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <p className="text-sm leading-7 text-white/46">A short brief is enough to start the conversation.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CtaSection;
