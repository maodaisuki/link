import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { isSavedShortURL, searchLongLink } from './lib/database'
 
export async function middleware(request: NextRequest) {
  // console.log(request.url);
  if(await isSavedShortURL(request.url)) {
    const redirectURL = await searchLongLink(request.url);
    return NextResponse.redirect(new URL(redirectURL, request.url));
  }
  return NextResponse.redirect(new URL('/404', request.url))
}
 
export const config = {
  matcher: '/s/:path*',
}