//export { default } from 'next-auth/middleware';
/*
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    if (isLoggedIn) { return NextResponse.next();}
}
*/
//export const config = { matcher: ['/posts/new', '/posts/:postId/edit', '/api/:path*'] }

//import { NextResponse } from 'next/server'
//import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
//export function middleware(request: NextRequest) {
//  return NextResponse.redirect(new URL('/signin', request.url))
//}
 
export { default } from 'next-auth/middleware';

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/posts/new', '/posts/:postId/edit', '/api/:path*']
}

