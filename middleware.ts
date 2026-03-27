import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { defaultLocale, getLocalizedPath, isLocale } from "@/lib/i18n";

const PUBLIC_FILE_PATTERN = /\.[^/]+$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE_PATTERN.test(pathname)
  ) {
    return NextResponse.next();
  }

  const localeSegment = pathname.split("/")[1];

  if (isLocale(localeSegment)) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = getLocalizedPath(defaultLocale, pathname);

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: "/:path*"
};
