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
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full border border-white/12 bg-slate-950/72 px-3 py-3 text-white shadow-[0_20px_60px_rgba(3,8,24,0.45)] backdrop-blur-2xl sm:px-4 md:bottom-6 md:right-6"
      animate={shouldReduceMotion || isConstrained ? undefined : { y: [0, -6, 0] }}
      transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(56,189,248,0.95),rgba(99,102,241,0.92),rgba(236,72,153,0.9))] shadow-[0_0_28px_rgba(99,102,241,0.32)]">
        <MessageCircleMore className="h-5 w-5" />
      </span>
      <span className="hidden text-sm font-medium sm:block">Chat on WhatsApp</span>
    </motion.a>
  );
}
