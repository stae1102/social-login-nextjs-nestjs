import GoogleProvider from 'next-auth/providers/google';
import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';

export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/login',
  },
};

export default NextAuth(authOptions);
