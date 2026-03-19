"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 520);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.92 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/62 text-white/82 shadow-[0_18px_48px_rgba(3,8,24,0.3)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/16 hover:bg-slate-900/82 hover:text-white md:bottom-6 md:left-6"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4.5 w-4.5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
