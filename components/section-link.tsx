"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

import { scrollToSection } from "@/lib/section-scroll";

type SectionLinkProps = {
  targetId: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
};

export function SectionLink({ targetId, className, children, onNavigate }: SectionLinkProps) {
  const pathname = usePathname();
  const href = targetId === "top" ? "/" : `/#${targetId}`;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      onNavigate?.();
      return;
    }

    event.preventDefault();
    scrollToSection(targetId);
    onNavigate?.();
  };

  return (
    <Link href={href} scroll={false} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
