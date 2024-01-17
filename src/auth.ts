import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { authConfig } from './auth.config';
import { getUserWithEmail } from './lib/data';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      //@ts-ignore TODO: REVISIT
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUserWithEmail(email);
          if (!user) return null;
          if (password === user.password) {
            return user;
          }
          return null;
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
