"use client";

import { useRef } from "react";
import { BadgeCheck, Clock3 } from "lucide-react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SectionIntro } from "@/components/section-intro";
import { processHighlights, processSteps } from "@/lib/site-data";
import { usePerformanceMode } from "@/lib/use-performance-mode";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ProcessSection() {
  const scope = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const { isConstrained, hasMounted } = usePerformanceMode();
  const enableMotion = hasMounted && !isConstrained;

  useGSAP(
    () => {
      if (!enableMotion) {
        return;
      }

      if (!progressRef.current) {
        return;
      }

      gsap.fromTo(
        progressRef.current,
        { scaleY: 0, transformOrigin: "top top" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top 55%",
            end: "bottom 75%",
            scrub: true
          }
        }
      );

      const cards = gsap.utils.toArray<HTMLElement>("[data-process-card]");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0.4 },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              end: "top 48%",
              scrub: true
            }
          }
        );
      });
    },
    { scope, dependencies: [enableMotion] }
  );

  return (
    <section id="process" ref={scope} className="py-16 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="glass-panel h-fit rounded-[30px] px-5 py-6 sm:px-7 sm:py-7 lg:sticky lg:top-28">
            <SectionIntro
              eyebrow="Process"
              title="Simple process, clear scope and the right framework from the start."
              copy="We decide what the website needs early: sections, style, content direction and development setup. Then I build and refine it until it is ready to publish."
              className="max-w-none"
            />

            <div className="mt-7 grid gap-3">
              {processHighlights.map((item) => (
                <div key={item} className="tag-chip w-fit border-slate-200 bg-white/82 text-slate-600">
                  <BadgeCheck className="h-3.5 w-3.5 text-[#2f4de0]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative sm:pl-16">
            <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-slate-200 sm:block sm:left-6" />
            <div
              ref={progressRef}
              className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px origin-top bg-[linear-gradient(180deg,rgba(96,165,250,0.92),rgba(59,130,246,0.88),rgba(244,114,182,0.72))] sm:block sm:left-6"
            />

            <div className="space-y-5">
              {processSteps.map((step, index) => (
                <motion.article
                  key={`${enableMotion ? "motion" : "static"}-${step.step}`}
                  data-process-card
                  initial={enableMotion ? { opacity: 0, y: 28, scale: 0.985, filter: "blur(10px)" } : false}
                  whileInView={enableMotion ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : undefined}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="interactive-card glass-panel rounded-[28px] px-5 py-6 sm:px-6 sm:py-7"
                >
                  <div className="absolute -left-12 top-6 hidden h-9 w-9 items-center justify-center rounded-full border border-white/90 bg-white text-sm font-semibold text-slate-900 shadow-[0_14px_28px_rgba(15,23,42,0.08)] sm:flex sm:-left-[3.65rem] sm:top-7">
                    {step.step}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="text-sm uppercase tracking-[0.24em] text-[#2f4de0]/78">Step {step.step}</div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/82 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-slate-500">
                      <Clock3 className="h-3.5 w-3.5 text-[#2f4de0]" />
                      {step.timeframe}
                    </div>
                  </div>

                  <h3 className="mt-4 font-display text-3xl leading-none text-slate-950 sm:text-[2rem]">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{step.copy}</p>

                  <div className="mt-6 rounded-[22px] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(248,250,252,0.96),rgba(241,245,249,0.88))] p-4">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Deliverable</div>
                    <div className="mt-2 text-sm leading-7 text-slate-700">{step.deliverable}</div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
