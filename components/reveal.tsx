"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

import { usePerformanceMode } from "@/lib/use-performance-mode";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  blur = 10,
  scale = 0.985,
  amount = 0.22,
  once = true,
  transition,
  ...props
}: HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: number;
  scale?: number;
  amount?: number;
  once?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const { isConstrained, hasMounted } = usePerformanceMode();
  const enableMotion = hasMounted && !shouldReduceMotion && !isConstrained;

  return (
    <motion.div
      key={enableMotion ? "reveal-motion" : "reveal-static"}
      initial={enableMotion ? { opacity: 0, y, scale, filter: `blur(${blur}px)` } : false}
      whileInView={enableMotion ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : undefined}
      viewport={{ once, amount }}
      transition={transition ?? { duration: 0.82, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
