import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const cookies = request.cookies
  if (cookies.has('user')) return NextResponse.next()
  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: ['/admin/:path*'],
}
