import type { NextAuthConfig } from 'next-auth';
import credentials from 'next-auth/providers/credentials';

export const authConfig = {
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      // Revisit this sometime
      const isOnHome = nextUrl.pathname.startsWith('/');
      const isViewingLogs = nextUrl.pathname.startsWith('/view-logs');
      const isViewingResources = nextUrl.pathname.startsWith('/view-resources');
      const isLoggingStudies = nextUrl.pathname.startsWith('/log-studies');
      const isAddingResource = nextUrl.pathname.startsWith('/add-resource');
      if (isOnHome || isViewingLogs || isViewingResources || isLoggingStudies || isAddingResource) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    },
  },
  providers: [credentials({})], // Add providers with an empty array for now
} satisfies NextAuthConfig;
