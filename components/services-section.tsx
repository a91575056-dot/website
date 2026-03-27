"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import { getLocalizedPath } from "@/lib/i18n";
import { SectionIntro } from "@/components/section-intro";
import { getSiteData, whatsappUrl } from "@/lib/site-data";
import { usePerformanceMode } from "@/lib/use-performance-mode";

export function ServicesSection() {
  const locale = useLocale();
  const { services } = getSiteData(locale);
  const featuredServices = services.cards;
  const { isConstrained, hasMounted } = usePerformanceMode();
  const enableMotion = hasMounted && !isConstrained;

  return (
    <section id="services" className="py-14 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
          <SectionIntro
            eyebrow={services.eyebrow}
            title={services.title}
            copy={services.copy}
            className="max-w-none"
          />

          <div className="space-y-4">
            {featuredServices.map((service, index) => {
              return (
                <motion.article
                  key={`${enableMotion ? "motion" : "static"}-${service.title}`}
                  initial={enableMotion ? { opacity: 0, y: 22, scale: 0.985, filter: "blur(10px)" } : false}
                  whileInView={enableMotion ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : undefined}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={enableMotion ? { y: -10, scale: 1.01 } : undefined}
                  className="interactive-card glass-panel relative rounded-[28px] px-5 py-5 sm:px-6"
                >
                  <div className="grid gap-4 lg:grid-cols-[7rem_minmax(0,1fr)_auto] lg:items-start lg:gap-6">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-[#2f4de0]/82">{service.eyebrow}</div>

                    <div>
                      <h3 className="display-card text-stone-950">{service.title}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-700">{service.copy}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.benefits.map((benefit) => (
                          <span key={benefit} className="tag-chip">
                            {benefit}
                          </span>
                        ))}
                      </div>

                      <p className="mt-4 text-sm leading-6 text-stone-500">{service.footer}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 self-start lg:justify-end">
                      <Link
                        href={getLocalizedPath(locale, service.href)}
                        className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/88 px-3 py-2 text-xs uppercase tracking-[0.2em] text-stone-700 transition duration-300 hover:-translate-y-0.5 hover:border-stone-400 hover:bg-white hover:text-stone-950"
                      >
                        {services.learnMoreLabel}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-2 text-xs uppercase tracking-[0.2em] text-stone-500 transition duration-300 hover:text-stone-950"
                      >
                        {services.askLabel}
                      </a>
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

export default ServicesSection;
