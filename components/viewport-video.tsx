"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

import { cn } from "@/lib/utils";

type ViewportVideoProps = {
  src: string;
  className?: string;
  poster?: string;
};

export function ViewportVideo({ src, className, poster }: ViewportVideoProps) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const isInView = useInView(ref, { amount: 0.65, margin: "-10% 0px -10% 0px" });

  useEffect(() => {
    const video = ref.current;

    if (!video) {
      return;
    }

    if (isInView) {
      video.currentTime = 0;
      const playPromise = video.play();

      if (playPromise) {
        void playPromise.catch(() => {});
      }

      return;
    }

    video.pause();
    video.currentTime = 0;
  }, [isInView, src]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      className={cn(className)}
    />
  );
}
