"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

import { useLocale } from "@/components/locale-provider";
import { getLocalizedSectionHref, stripLocaleFromPathname } from "@/lib/i18n";
import { scrollToSection } from "@/lib/section-scroll";

type SectionLinkProps = {
  targetId: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
};

export function SectionLink({ targetId, className, children, onNavigate }: SectionLinkProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const href = getLocalizedSectionHref(locale, targetId);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (stripLocaleFromPathname(pathname) !== "/") {
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
