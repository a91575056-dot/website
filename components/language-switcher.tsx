"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { useLocale } from "@/components/locale-provider";
import { getSiteData } from "@/lib/site-data";
import { localeCookieName, localeOptions, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
  compact?: boolean;
  onSelect?: () => void;
};

export function LanguageSwitcher({ className, compact = false, onSelect }: LanguageSwitcherProps) {
  const locale = useLocale();
  const { header } = getSiteData(locale);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSelect = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      onSelect?.();
      return;
    }

    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    onSelect?.();
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-stone-300 bg-white/78 p-1 shadow-[0_10px_24px_rgba(28,25,23,0.06)]",
        compact && "w-full justify-between rounded-[22px] bg-[#fbf7f1] p-1.5",
        className
      )}
    >
      {localeOptions.map((option) => {
        const isActive = option.value === locale;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => handleSelect(option.value)}
            disabled={isPending}
            className={cn(
              "rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.22em] transition",
              compact && "min-w-[4.5rem] px-4 py-3 text-sm tracking-[0.18em]",
              isActive
                ? "bg-[#2f4de0] text-white shadow-[0_12px_26px_rgba(47,77,224,0.24)]"
                : "text-stone-500 hover:bg-stone-100 hover:text-stone-950",
              isPending && "cursor-wait opacity-80"
            )}
            aria-pressed={isActive}
            aria-label={`${header.languageSwitcherLabelPrefix} ${option.label}`}
          >
            {option.shortLabel}
          </button>
        );
      })}
    </div>
  );
}
