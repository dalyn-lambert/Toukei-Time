import type { NextAuthConfig } from 'next-auth';
import credentials from 'next-auth/providers/credentials';

export const authConfig = {
  pages: {
    signIn: '/',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      // Revisit this sometime
      const isOnHome = nextUrl.pathname.startsWith('/home');
      const isOnView = nextUrl.pathname.startsWith('/view');
      const isOnAdd = nextUrl.pathname.startsWith('/add');

      if (isOnHome || isOnAdd || isOnView) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/home', nextUrl));
      }
      return true;
    },
  },
  providers: [credentials({})], // Add providers with an empty array for now
} satisfies NextAuthConfig;
