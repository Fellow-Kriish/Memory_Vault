import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Admin routes: require vault_admin cookie
  if (pathname.startsWith('/admin')) {
    const adminCookie = request.cookies.get('vault_admin')?.value
    if (!adminCookie || adminCookie !== '1') {
      const loginUrl = new URL('/admin', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next()
  }

  // Gallery routes: require vault_auth cookie
  if (pathname.startsWith('/gallery')) {
    const cookie = request.cookies.get('vault_auth')?.value
    if (!cookie || cookie !== '1') {
      const loginUrl = new URL('/', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next()
  }

  // Other routes: allow
  return NextResponse.next()
}

export const config = {
  matcher: ['/gallery/:path*', '/admin/:path*'],
}
