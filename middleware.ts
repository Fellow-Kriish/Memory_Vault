import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Protect all /gallery routes
  const { pathname } = request.nextUrl

  // Only fire on /gallery routes (configured also with matcher)
  const cookie = request.cookies.get('vault_auth')?.value

  if (!cookie || cookie !== '1') {
    const loginUrl = new URL('/', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/gallery/:path*'],
}
