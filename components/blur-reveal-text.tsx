"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type BlurRevealTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function BlurRevealText({ text, className, delay = 0 }: BlurRevealTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span aria-label={text} className={cn("block", className)}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block will-change-transform"
          initial={{ opacity: 0, y: 28, filter: "blur(14px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.75 }}
          transition={{
            duration: 0.85,
            delay: delay + index * 0.06,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
}
