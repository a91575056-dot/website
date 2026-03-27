export const supportedLocales = ["en", "ro", "ru"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "en";

export const localeOptions: Array<{
  value: Locale;
  shortLabel: string;
  label: string;
}> = [
  { value: "ro", shortLabel: "RO", label: "Romana" },
  { value: "en", shortLabel: "EN", label: "English" },
  { value: "ru", shortLabel: "RU", label: "Russkiy" }
];

function normalizePathname(pathname?: string | null) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return normalized !== "/" && normalized.endsWith("/") ? normalized.slice(0, -1) : normalized;
}

export function isLocale(value?: string | null): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export function resolveLocale(value?: string | null): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function stripLocaleFromPathname(pathname?: string | null) {
  const normalized = normalizePathname(pathname);
  const segments = normalized.split("/");
  const maybeLocale = segments[1];

  if (!isLocale(maybeLocale)) {
    return normalized;
  }

  const remainder = `/${segments.slice(2).join("/")}`;
  return normalizePathname(remainder);
}

export function getLocalizedPath(locale: Locale, pathname: string = "/") {
  const strippedPath = stripLocaleFromPathname(pathname);
  return strippedPath === "/" ? `/${locale}` : `/${locale}${strippedPath}`;
}

export function getLocalizedSectionHref(locale: Locale, targetId: string) {
  const homePath = getLocalizedPath(locale, "/");
  return !targetId || targetId === "top" ? homePath : `${homePath}#${targetId}`;
}
