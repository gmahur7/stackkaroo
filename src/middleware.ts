import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('authToken')?.value;
  const role = request.cookies.get('role')?.value;
  const path = request.nextUrl.pathname;

  console.log("role: ",role,path);
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  if(path === '/  looking-to-hire' && role !== 'super-admin'){
    return NextResponse.redirect(new URL('/login', request.url));
  }
    return NextResponse.next();
  
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|login|register).*)',
  ],
};