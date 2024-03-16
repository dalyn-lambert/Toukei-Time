import type { NextAuthConfig } from 'next-auth';
import credentials from 'next-auth/providers/credentials';

export const authConfig = {
  pages: {
    signIn: '/',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const currentPage = nextUrl.pathname;
      // check if user trying to access a page that requires authentication
      if (currentPage !== '/') {
        if (isLoggedIn) {
          // allow an authenticated user to view the page
          return true;
        }
        // redirect unauthenticated users to login page
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/add', nextUrl));
      }
      return true;
    },
  },
  providers: [credentials({})], // Add providers with an empty array for now
} satisfies NextAuthConfig;
