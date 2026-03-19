"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircleMore } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems, whatsappUrl } from "@/lib/site-data";

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [isCompact, setIsCompact] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsCompact(latest > 28);

    if (isOpen) {
      setIsHidden(false);
      lastScrollY.current = latest;
      return;
    }

    const previous = lastScrollY.current;
    const delta = latest - previous;

    if (latest <= 72) {
      setIsHidden(false);
      lastScrollY.current = latest;
      return;
    }

    if (Math.abs(delta) < 8) {
      lastScrollY.current = latest;
      return;
    }

    if (delta > 0 && latest > 140) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    lastScrollY.current = latest;
  });

  return (
    <motion.header
      className="sticky top-0 z-40 px-4 pt-4 will-change-transform sm:px-6"
      animate={{
        y: isHidden ? "-140%" : "0%",
        opacity: isHidden ? 0.92 : 1
      }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="section-shell max-w-7xl rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur-2xl sm:px-5"
        animate={{
          backgroundColor: isCompact ? "rgba(10, 14, 30, 0.88)" : "rgba(10, 14, 30, 0.62)",
          borderColor: isCompact ? "rgba(125, 211, 252, 0.18)" : "rgba(255,255,255,0.1)",
          boxShadow: isCompact
            ? "0 20px 60px rgba(4, 8, 28, 0.45), inset 0 1px 0 rgba(255,255,255,0.08)"
            : "0 12px 36px rgba(4, 8, 28, 0.18)"
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="#top" className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(56,189,248,0.14),rgba(168,85,247,0.12),rgba(236,72,153,0.14))] shadow-[0_0_32px_rgba(96,165,250,0.14)]">
              <Image src="/assets/logo-cropped.png" alt="Dionis Grecu logo" width={34} height={34} className="h-8 w-8" />
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-white">Dionis Grecu</div>
              <div className="truncate text-[11px] uppercase tracking-[0.24em] text-white/46">Front-end developer</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-white/62 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative transition hover:text-white after:absolute after:bottom-[-0.45rem] after:left-0 after:h-px after:w-0 after:bg-[linear-gradient(90deg,rgba(103,232,249,0.9),rgba(236,72,153,0.9))] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-white/60 xl:block">
              Next.js, Astro, React / Vite
            </div>
            <Button asChild size="sm">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Get in touch
              </a>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="inline-flex rounded-full border border-white/10 bg-white/[0.06] p-2.5 text-white lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open navigation</span>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
              <SheetDescription className="sr-only">
                Open the main navigation and contact actions for the website.
              </SheetDescription>
              <div className="mt-10 flex flex-col gap-8">
                <div>
                  <div className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">Navigation</div>
                  <div className="mt-3 text-2xl font-display text-white">Websites for businesses, services and personal brands.</div>
                </div>

                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-white transition hover:border-white/20 hover:bg-white/[0.08]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <Button asChild className="w-full">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
                    <MessageCircleMore className="mr-2 h-4 w-4" />
                    Get in touch
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </motion.header>
  );
}
