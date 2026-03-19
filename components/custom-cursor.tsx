"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (reducedMotion || coarsePointer) {
      return;
    }

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const outer = outerRef.current;
    const inner = innerRef.current;

    if (!outer || !inner) {
      return () => {
        document.documentElement.classList.remove("has-custom-cursor");
      };
    }

    gsap.set([outer, inner], { xPercent: -50, yPercent: -50 });

    const moveOuterX = gsap.quickTo(outer, "x", { duration: 0.28, ease: "power3.out" });
    const moveOuterY = gsap.quickTo(outer, "y", { duration: 0.28, ease: "power3.out" });
    const moveInnerX = gsap.quickTo(inner, "x", { duration: 0.14, ease: "power3.out" });
    const moveInnerY = gsap.quickTo(inner, "y", { duration: 0.14, ease: "power3.out" });

    const handleMove = (event: PointerEvent) => {
      moveOuterX(event.clientX);
      moveOuterY(event.clientY);
      moveInnerX(event.clientX);
      moveInnerY(event.clientY);
    };

    const handleOver = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target.closest("a, button, [data-cursor='interactive']") : null;
      setActive(Boolean(target));
    };

    const handleLeaveWindow = () => {
      setActive(false);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerover", handleOver);
    window.addEventListener("blur", handleLeaveWindow);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      window.removeEventListener("blur", handleLeaveWindow);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={outerRef}
        className={`pointer-events-none fixed left-0 top-0 z-[60] h-10 w-10 rounded-full border bg-[radial-gradient(circle,rgba(125,211,252,0.16),rgba(168,85,247,0.08))] backdrop-blur-xl transition duration-300 ${
          enabled ? "hidden lg:block" : "hidden"
        } ${
          active
            ? "scale-[1.9] border-cyan-200/50 shadow-[0_0_36px_rgba(103,232,249,0.32)]"
            : "scale-100 border-white/20 shadow-[0_0_24px_rgba(168,85,247,0.14)]"
        }`}
      />
      <div
        ref={innerRef}
        className={`pointer-events-none fixed left-0 top-0 z-[61] h-2.5 w-2.5 rounded-full bg-white transition duration-300 ${
          enabled ? "hidden lg:block" : "hidden"
        } ${
          active ? "scale-150" : "scale-100"
        }`}
      />
    </>
  );
}
