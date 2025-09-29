import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const locales = ["en", "fr", "es"];
const defaultLocale = "en";

// Get the preferred locale from the request
function getLocale(request: NextRequest): string {
  // Check if there's a locale cookie
  const localeCookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (localeCookie && locales.includes(localeCookie)) {
    return localeCookie;
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get("Accept-Language");
  if (acceptLanguage) {
    const detectedLocale = locales.find((locale) =>
      acceptLanguage.toLowerCase().includes(locale)
    );
    if (detectedLocale) return detectedLocale;
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for API routes, static files, etc.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.includes(".") || // Has file extension
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml")
  ) {
    return NextResponse.next();
  }

  // Check if pathname already includes a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const locale = getLocale(request);

    // For root path, we need to be careful not to create infinite redirects
    if (pathname === "/") {
      // Only redirect if the detected locale is not the default
      // or if you want to always show the locale in the URL
      const newUrl = new URL(`/${locale}`, request.url);
      newUrl.search = request.nextUrl.search;

      const response = NextResponse.redirect(newUrl);
      response.cookies.set("NEXT_LOCALE", locale, {
        maxAge: 60 * 60 * 24 * 365, // 1 year
        sameSite: "lax",
        path: "/",
      });

      return response;
    } else {
      // For other paths, add the locale prefix
      const newUrl = new URL(`/${locale}${pathname}`, request.url);
      newUrl.search = request.nextUrl.search;

      const response = NextResponse.redirect(newUrl);
      response.cookies.set("NEXT_LOCALE", locale, {
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
        path: "/",
      });

      return response;
    }
  }

  // Extract locale from pathname and update cookie if needed
  const currentLocale = pathname.split("/")[1];

  if (locales.includes(currentLocale)) {
    const response = NextResponse.next();
    const localeCookie = request.cookies.get("NEXT_LOCALE")?.value;

    if (localeCookie !== currentLocale) {
      response.cookies.set("NEXT_LOCALE", currentLocale, {
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
        path: "/",
      });
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt, sitemap.xml etc.
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.).*)",
  ],
};
