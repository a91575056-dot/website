"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { AnimatedCounter } from "@/components/animated-counter";
import { useLocale } from "@/components/locale-provider";
import { SectionIntro } from "@/components/section-intro";
import { getSiteData } from "@/lib/site-data";
import { usePerformanceMode } from "@/lib/use-performance-mode";

export function TrustSection() {
  const locale = useLocale();
  const { trust } = getSiteData(locale);
  const { isConstrained, hasMounted } = usePerformanceMode();
  const enableMotion = hasMounted && !isConstrained;

  return (
    <section className="pb-16 sm:pb-24">
      <div className="section-shell">
        <div className="glass-panel px-5 py-6 sm:px-8 sm:py-9">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <SectionIntro
              eyebrow={trust.eyebrow}
              title={trust.title}
              copy={trust.copy}
              className="max-w-none"
            />

            <div className="grid gap-4 sm:grid-cols-3">
              {trust.stats.map((item, index) => (
                <motion.article
                  key={`${enableMotion ? "motion" : "static"}-${item.label}`}
                  initial={enableMotion ? { opacity: 0, y: 24, scale: 0.985, filter: "blur(8px)" } : false}
                  whileInView={enableMotion ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : undefined}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={enableMotion ? { y: -10, scale: 1.015 } : undefined}
                  className="interactive-card rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,250,252,0.78))] px-5 py-6 shadow-[0_20px_48px_rgba(15,23,42,0.08)]"
                >
                  <AnimatedCounter
                    value={item.value}
                    suffix={item.suffix}
                    duration={1.45 + index * 0.08}
                    className="display-metric text-slate-950"
                  />
                  <div className="mt-3 text-sm uppercase tracking-[0.24em] text-[#2f4de0]/76">{item.label}</div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="soft-divider mt-8" />

          <div className="mt-6 flex flex-wrap gap-3">
            {trust.strip.map((item, index) => (
              <motion.div
                key={`${enableMotion ? "motion" : "static"}-${item}`}
                initial={enableMotion ? { opacity: 0, y: 12 } : false}
                whileInView={enableMotion ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="tag-chip"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#2f4de0]" />
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
