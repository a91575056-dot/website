"use client";

import { useEffect } from "react";

import { scrollToSection } from "@/lib/section-scroll";

export function HashScrollManager() {
  useEffect(() => {
    const targetId = window.location.hash.slice(1);

    if (!targetId) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      scrollToSection(targetId, "auto");
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
