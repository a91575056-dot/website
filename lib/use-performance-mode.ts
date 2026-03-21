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
    return false;
  }

  const navigatorWithHints = navigator as NavigatorWithHints;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = Boolean(navigatorWithHints.connection?.saveData);
  const cpuThreads = navigator.hardwareConcurrency || 4;
  const lowCpu = cpuThreads <= 2;
  const lowMemory = typeof navigatorWithHints.deviceMemory === "number" && navigatorWithHints.deviceMemory <= 2;

  return prefersReducedMotion || saveData || (lowCpu && lowMemory);
}

export function usePerformanceMode() {
  const [isConstrained, setIsConstrained] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setIsConstrained(detectConstrainedDevice());
    setHasMounted(true);
  }, []);

  return { isConstrained, hasMounted };
}
