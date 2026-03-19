"use client";

import { useEffect, useState } from "react";

type NavigatorWithHints = Navigator & {
  connection?: {
    saveData?: boolean;
  };
  deviceMemory?: number;
};

function detectConstrainedDevice() {
  if (typeof window === "undefined") {
    return true;
  }

  const navigatorWithHints = navigator as NavigatorWithHints;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const narrowViewport = window.matchMedia("(max-width: 900px)").matches;
  const saveData = Boolean(navigatorWithHints.connection?.saveData);
  const lowCpu = navigator.hardwareConcurrency <= 4;
  const lowMemory = typeof navigatorWithHints.deviceMemory === "number" && navigatorWithHints.deviceMemory <= 4;

  return prefersReducedMotion || coarsePointer || narrowViewport || saveData || lowCpu || lowMemory;
}

export function usePerformanceMode() {
  const [isConstrained, setIsConstrained] = useState(true);

  useEffect(() => {
    setIsConstrained(detectConstrainedDevice());
  }, []);

  return { isConstrained };
}
