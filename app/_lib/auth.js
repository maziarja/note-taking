import { supabase } from "@/supabase";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { createUser, getUser } from "./data-service";

const authConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { password: "password", type: "passwoord" },
      },
      async authorize(credentials) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        });
        if (error || !data.user) {
          throw new Error("Email or Password is wrong");
        }
        return {
          id: data.user.id,
          email: data.user.email,
        };
      },
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ account, profile, user }) {
      try {
        const existingUser = await getUser(user.email);
        if (!existingUser)
          await createUser({ email: user.email, name: user.name });
        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }) {
      const currentUser = await getUser(session.user.email);
      session.user.id = currentUser.id;
      return session;
    },
  },
  pages: { signIn: "/auth/login" },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
