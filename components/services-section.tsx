"use client";

import { motion } from "framer-motion";
import { Code2, Layers3, MonitorSmartphone, Rocket, Sparkles } from "lucide-react";

import { SectionIntro } from "@/components/section-intro";
import { services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const iconMap = {
  Sparkles,
  Layers3,
  MonitorSmartphone,
  Rocket,
  Code2
} as const;

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Services"
          title="Website services for businesses, freelancers and personal brands."
          copy="From landing pages to service websites and portfolios, the goal is a clear structure, good mobile experience and a stack that matches the project."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Sparkles;
            const isFeatured = index === 0;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10 }}
                className={cn(
                  "interactive-card glass-panel h-full border-white/10 px-5 py-6 sm:px-6 sm:py-7",
                  isFeatured &&
                    "bg-[linear-gradient(180deg,rgba(56,189,248,0.14),rgba(99,102,241,0.08)_36%,rgba(255,255,255,0.04))] md:col-span-2 xl:col-span-2"
                )}
              >
                <div className="mb-6 flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(168,85,247,0.18),rgba(236,72,153,0.18))] text-white shadow-[0_0_26px_rgba(96,165,250,0.18)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/46">
                    {service.eyebrow}
                  </span>
                </div>

                <h3 className="font-display text-[1.7rem] leading-[1.05] tracking-[-0.04em] text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/64">{service.copy}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.benefits.map((benefit) => (
                    <span key={benefit} className="tag-chip bg-white/[0.03] text-white/66">
                      {benefit}
                    </span>
                  ))}
                </div>

                <div className="soft-divider mt-6" />
                <p className="mt-5 text-sm leading-7 text-white/52">{service.footer}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
