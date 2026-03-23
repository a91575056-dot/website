"use client";

import { LocaleProvider } from "@/components/locale-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import type { Locale } from "@/lib/i18n";

export function Providers({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <SmoothScroll />
      {children}
    </LocaleProvider>
  );
}
