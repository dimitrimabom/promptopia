import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  // Configuration de Google Provider pour l'authentification
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // Utilise Prisma comme adaptateur pour NextAuth
  adapter: PrismaAdapter(prisma),
  
  // Option pour stocker les sessions dans un JWT ou une DB
 
  
  // Gestion des callbacks pour ajouter des infos à la session
  callbacks: {
    async session({ session, token }) {
      // Associe l'ID de l'utilisateur au token de session
      session.user.id = token.sub;
      return session;
    },
  },
  
  // Assure-toi d'avoir un secret pour sécuriser l'authentification
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
