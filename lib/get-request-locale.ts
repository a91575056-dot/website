import { cookies } from "next/headers";

import { defaultLocale, localeCookieName, resolveLocale } from "@/lib/i18n";

export function getRequestLocale() {
  try {
    return resolveLocale(cookies().get(localeCookieName)?.value);
  } catch {
    return defaultLocale;
  }
}
