import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
  // console.log("Authorizing user with email:", credentials.email);

  //       const user = await prisma.user.findUnique({
  //         where: { email: credentials.email }
  //       });

  //       if (user && await bcrypt.compare(credentials.password, user.password)) {
  //         return { id: user.id, email: user.email, name: user.name };
  //       }
  //       return null;
console.log("Authorizing user with email:", credentials.email);
  const user = await prisma.user.findUnique({
    where: { email: credentials.email }
  });

  if (user) {
    const isValid = await bcrypt.compare(credentials.password, user.password);
    console.log("Password valid:", isValid);
    if (isValid) {
      return { id: user.id, email: user.email, name: user.name };
    }
  }
  return null;
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  },
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt"
  }
});

export { handler as GET, handler as POST };
