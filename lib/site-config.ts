import { defaultLocale, getLocalizedPath, supportedLocales, type Locale } from "@/lib/i18n";

export const siteUrl = "https://dionisweb.com";
export const siteName = "Dionis Web";
export const siteDescription =
  "Portfolio and freelance website of Dionis Grecu for landing pages, basic websites and front-end builds.";
export const siteImagePath = "/assets/111.png";

export const staticSiteRoutes = [
  {
    path: "/",
    changeFrequency: "weekly" as const,
    priority: 1
  },
  {
    path: "/landing-page-development",
    changeFrequency: "weekly" as const,
    priority: 0.9
  },
  {
    path: "/website-development",
    changeFrequency: "weekly" as const,
    priority: 0.9
  },
  {
    path: "/freelance-front-end-developer",
    changeFrequency: "weekly" as const,
    priority: 0.9
  }
] as const;

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function getLocalizedUrl(locale: Locale, path: string = "/") {
  return absoluteUrl(getLocalizedPath(locale, path));
}

export function getLocaleAlternates(path: string = "/") {
  return supportedLocales.reduce<Record<string, string>>((alternates, locale) => {
    alternates[locale] = getLocalizedUrl(locale, path);
    return alternates;
  }, { "x-default": getLocalizedUrl(defaultLocale, path) });
}
