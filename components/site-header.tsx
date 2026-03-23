"use client";

import { Menu, MessageCircleMore } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { useLocale } from "@/components/locale-provider";
import { SectionLink } from "@/components/section-link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { getSiteData, whatsappUrl } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const locale = useLocale();
  const { navItems, header, brandRole } = getSiteData(locale);
  const { scrollY, scrollYProgress } = useScroll();
  const [isCompact, setIsCompact] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const current = Math.max(latest, 0);
    const delta = current - lastScrollY.current;
    const isNearTop = current <= 24;

    setIsCompact(current > 20);

    if (isNearTop || isOpen) {
      setIsHidden(false);
      lastScrollY.current = current;
      return;
    }

    if (Math.abs(delta) < 8) {
      return;
    }

    if (delta > 0 && current > 120) {
      setIsHidden(true);
    } else if (delta < 0) {
      setIsHidden(false);
    }

    lastScrollY.current = current;
  });

  return (
    <>
      <div aria-hidden className="h-16 sm:h-[4.5rem]" />

      <motion.header
        className={cn("fixed inset-x-0 top-0 z-40", isHidden && "pointer-events-none")}
        animate={{
          y: isHidden ? "-118%" : "0%",
          opacity: isHidden ? 0 : 1,
          backgroundColor: isCompact ? "rgba(244,239,231,0.9)" : "rgba(244,239,231,0.72)",
          borderBottomColor: isCompact ? "rgba(120,113,108,0.14)" : "rgba(120,113,108,0.08)",
          boxShadow: isCompact ? "0 18px 42px rgba(28,25,23,0.08)" : "0 10px 24px rgba(28,25,23,0.03)"
        }}
        transition={{
          y: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.22, ease: [0.4, 0, 0.2, 1] },
          backgroundColor: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
          borderBottomColor: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
          boxShadow: { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
        }}
        style={{
          willChange: "transform, opacity",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)"
        }}
      >
        <div className="section-shell">
          <div className="flex h-16 items-center justify-between gap-4 border-b border-transparent sm:h-[4.5rem]">
            <SectionLink targetId="top" className="min-w-0" onNavigate={() => setIsOpen(false)}>
              <div className="text-sm font-semibold tracking-[-0.03em] text-stone-950 sm:text-base">Dionis Grecu</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 sm:text-[11px]">{brandRole}</div>
            </SectionLink>

            <nav className="hidden items-center gap-7 text-sm text-stone-600 lg:flex">
              {navItems.map((item) => (
                <SectionLink key={item.targetId} targetId={item.targetId} className="transition hover:text-stone-950">
                  {item.label}
                </SectionLink>
              ))}
            </nav>

            <div className="hidden items-center gap-3 sm:flex">
              <LanguageSwitcher />
              <Button asChild size="sm">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  {header.ctaLabel}
                </a>
              </Button>
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="inline-flex rounded-full border border-stone-300 bg-[#fbf7f1] p-2.5 text-stone-700 shadow-[0_10px_24px_rgba(28,25,23,0.08)] lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{header.openNavigationLabel}</span>
              </SheetTrigger>
              <SheetContent className="bg-[#f5efe7]">
                <SheetTitle className="sr-only">{header.sheetTitle}</SheetTitle>
                <SheetDescription className="sr-only">{header.sheetDescription}</SheetDescription>

                <div className="mt-10 flex flex-col gap-8">
                  <div>
                    <div className="text-sm uppercase tracking-[0.24em] text-[#2f4de0]">{header.mobileTitle}</div>
                    <div className="mt-3 max-w-xs font-display text-2xl leading-tight tracking-[-0.05em] text-stone-950">
                      {header.mobileDescription}
                    </div>
                  </div>

                  <LanguageSwitcher compact onSelect={() => setIsOpen(false)} />

                  <div className="flex flex-col gap-3">
                    {navItems.map((item) => (
                      <SectionLink
                        key={item.targetId}
                        targetId={item.targetId}
                        onNavigate={() => setIsOpen(false)}
                        className="rounded-[22px] border border-stone-300 bg-[#fbf7f1] px-4 py-3 text-base text-stone-900 transition hover:border-stone-400"
                      >
                        {item.label}
                      </SectionLink>
                    ))}
                  </div>

                  <Button asChild className="w-full">
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
                      <MessageCircleMore className="mr-2 h-4 w-4" />
                      {header.whatsappLabel}
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <motion.div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-[linear-gradient(90deg,rgba(47,77,224,0),rgba(47,77,224,0.88),rgba(255,255,255,0.82),rgba(47,77,224,0))]"
          style={{ scaleX: scrollYProgress }}
        />
      </motion.header>
    </>
  );
}
