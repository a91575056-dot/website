"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { AnimatedCounter } from "@/components/animated-counter";
import { SectionIntro } from "@/components/section-intro";
import { trustStats, trustStrip } from "@/lib/site-data";
import { usePerformanceMode } from "@/lib/use-performance-mode";

export function TrustSection() {
  const { isConstrained } = usePerformanceMode();

  return (
    <section className="pb-16 sm:pb-24">
      <div className="section-shell">
        <div className="glass-panel px-5 py-6 sm:px-8 sm:py-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <SectionIntro
              eyebrow="What You Get"
              title="Clear structure, mobile-first layout and a front-end stack chosen for the project."
              copy="The website should look professional, load well on phones, feel easy to use and make it simple for visitors to contact you."
              className="max-w-none"
            />

            <div className="grid gap-4 sm:grid-cols-3">
              {trustStats.map((item, index) => (
                <motion.article
                  key={item.label}
                  initial={isConstrained ? false : { opacity: 0, y: 24 }}
                  whileInView={isConstrained ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="interactive-card glass-panel rounded-[24px] border-white/10 px-5 py-6"
                >
                  <AnimatedCounter
                    value={item.value}
                    suffix={item.suffix}
                    className="font-display text-4xl leading-none tracking-[-0.05em] text-white sm:text-5xl"
                  />
                  <div className="mt-3 text-sm uppercase tracking-[0.24em] text-white/42">{item.label}</div>
                  <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="soft-divider mt-8" />

          <div className="mt-6 flex flex-wrap gap-3">
            {trustStrip.map((item, index) => (
              <motion.div
                key={item}
                initial={isConstrained ? false : { opacity: 0, y: 12 }}
                whileInView={isConstrained ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="tag-chip"
              >
                <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
