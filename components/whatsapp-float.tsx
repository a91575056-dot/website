"use client";

import { MessageCircleMore } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { whatsappUrl } from "@/lib/site-data";
import { usePerformanceMode } from "@/lib/use-performance-mode";

export function WhatsAppFloat() {
  const shouldReduceMotion = useReducedMotion();
  const { isConstrained } = usePerformanceMode();

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full border border-stone-300 bg-[#fbf7f1] px-2.5 py-2.5 text-stone-900 shadow-[0_20px_50px_rgba(28,25,23,0.14)] transition hover:-translate-y-0.5 md:bottom-6 md:right-6 md:px-4 md:py-3"
      initial={false}
      animate={shouldReduceMotion || isConstrained ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: [0, -6, 0], scale: 1 }}
      transition={
        shouldReduceMotion || isConstrained
          ? { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
          : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
      }
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#34d399_0%,#22c55e_100%)] text-white shadow-[0_14px_30px_rgba(34,197,94,0.28)]">
        <MessageCircleMore className="h-5 w-5" />
      </span>
      <span className="hidden text-sm font-medium sm:block">Chat on WhatsApp</span>
    </motion.a>
  );
}
