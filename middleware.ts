import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from '@/lib/i18n';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const pathname = nextUrl.pathname;

  // 1. Handle i18n Redirection
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = defaultLocale;
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, req.url)
    );
  }

  // 2. Handle Authentication
  const isOnAdminDashboard = pathname.includes('/dashboard/admin');
  const isOnLogin = pathname.includes('/login');
  const userRole = (req.auth?.user as any)?.role;

  // Only protect ADMIN dashboard
  if (isOnAdminDashboard) {
    if (!isLoggedIn) {
      const locale = pathname.split('/')[1] || defaultLocale;
      return NextResponse.redirect(new URL(`/${locale}/login`, nextUrl));
    }
    
    if (userRole !== 'ADMIN') {
      const locale = pathname.split('/')[1] || defaultLocale;
      return NextResponse.redirect(new URL(`/${locale}/ikp-booking`, nextUrl));
    }
  }

  // Redirect to appropriate dashboard if logged in and on login page
  if (isOnLogin && isLoggedIn) {
    const locale = pathname.split('/')[1] || defaultLocale;
    if (userRole === 'ADMIN') {
      return NextResponse.redirect(new URL(`/${locale}/dashboard/admin`, nextUrl));
    }
    return NextResponse.redirect(new URL(`/${locale}/ikp-booking`, nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next|favicon.ico|icon.jpg|icon.png|apple-icon.png|locales|images|assets).*)',
  ],
};
