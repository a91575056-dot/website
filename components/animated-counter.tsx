"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.2,
  className
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      }
    });

    return () => {
      controls.stop();
    };
  }, [duration, isInView, shouldReduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
