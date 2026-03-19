"use client";

import { ArrowRight, MessageCircleMore, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ctaPoints, instagramUrl, whatsappUrl } from "@/lib/site-data";

export function CtaSection() {
  return (
    <section id="contact" className="pb-20 pt-6 sm:pb-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel overflow-hidden rounded-[34px] border border-cyan-300/16 bg-[linear-gradient(135deg,rgba(56,189,248,0.12),rgba(99,102,241,0.12)_40%,rgba(236,72,153,0.12)_100%)] px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_28%)]" />

          <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.26em] text-cyan-100">
                <Sparkles className="h-3.5 w-3.5" />
                Ready to talk
              </div>

              <h2 className="mt-5 font-display text-[clamp(2.3rem,8vw,5rem)] leading-[0.95] tracking-[-0.05em] text-white">
                Need a website for your business, service or personal brand?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                Send what the business does, what pages or sections you need and a few references. I can also advise the right setup:
                Next.js, React with Vite, Astro or a lighter static build.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {ctaPoints.map((item) => (
                  <div key={item} className="tag-chip bg-white/[0.04] text-white/68">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[28px] px-5 py-6 sm:px-6">
              <div className="text-[11px] uppercase tracking-[0.26em] text-cyan-200/82">Fastest way to talk</div>
              <div className="mt-3 font-display text-3xl text-white">WhatsApp</div>
              <p className="mt-4 text-sm leading-7 text-white/62">
                Best for discussing price, timeline, project scope and which framework makes sense for the website.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Button asChild className="w-full justify-center">
                    <a href={whatsappUrl} target="_blank" rel="noreferrer">
                      <MessageCircleMore className="mr-2 h-4 w-4" />
                      Send project details
                    </a>
                  </Button>
                </motion.div>

                <Button asChild variant="secondary" className="w-full justify-center">
                  <a href={instagramUrl} target="_blank" rel="noreferrer">
                    See Instagram
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/46">A short brief is enough to start the conversation.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CtaSection;
