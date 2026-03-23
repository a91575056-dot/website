export const supportedLocales = ["en", "ro", "ru"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "en";
export const localeCookieName = "site_locale";

export const localeOptions: Array<{
  value: Locale;
  shortLabel: string;
  label: string;
}> = [
  { value: "ro", shortLabel: "RO", label: "Română" },
  { value: "en", shortLabel: "EN", label: "English" },
  { value: "ru", shortLabel: "RU", label: "Русский" }
];

export function resolveLocale(value?: string | null): Locale {
  if (!value) {
    return defaultLocale;
  }

  return supportedLocales.includes(value as Locale) ? (value as Locale) : defaultLocale;
}
