"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

import { useLocale } from "@/components/locale-provider";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { getSiteData, type PortfolioItem, whatsappUrl } from "@/lib/site-data";

export function PortfolioDialogGrid() {
  const locale = useLocale();
  const { portfolio } = getSiteData(locale);
  const [activeVideo, setActiveVideo] = useState<PortfolioItem | null>(null);

  return (
    <>
      <div className="grid gap-6 xl:grid-cols-3">
        {portfolio.items.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            className="premium-outline group overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))]"
          >
            <button className="block w-full text-left" onClick={() => setActiveVideo(item)} type="button">
              <div className="relative overflow-hidden border-b border-white/10">
                <div className="absolute left-4 top-4 z-10 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febb2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <video
                  className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  src={item.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,170,255,0.08),transparent_26%,rgba(0,0,0,0.58))]" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                  <span className="rounded-full border border-cyan-300/15 bg-black/35 p-3">
                    <Play className="h-4 w-4 fill-current" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-[0.26em] text-white/70">{portfolio.openVideoPreview}</div>
                    <div className="text-sm">{item.duration}</div>
                  </div>
                </div>
              </div>
            </button>

            <div className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">{item.meta}</p>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">
                  {item.label}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[hsl(var(--muted-foreground))]">{item.copy}</p>
              <div className="mt-6">
                <Button asChild variant="secondary">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    {portfolio.requestThisStyle}
                  </a>
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {activeVideo ? (
        <Dialog open onOpenChange={(open) => !open && setActiveVideo(null)}>
          <DialogContent>
            <DialogTitle className="sr-only">
              {activeVideo.title} {portfolio.videoPreviewSuffix}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {portfolio.fullscreenPreviewPrefix} {activeVideo.title}. {portfolio.fullscreenPreviewHint}
            </DialogDescription>

            <div className="mb-4 pr-10">
              <p className="text-xs uppercase tracking-[0.28em] text-[hsl(var(--muted-foreground))]">{portfolio.openVideoPreview}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{activeVideo.title}</h3>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
              <video key={activeVideo.video} src={activeVideo.video} controls autoPlay playsInline className="aspect-video w-full" />
            </div>
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  );
}
