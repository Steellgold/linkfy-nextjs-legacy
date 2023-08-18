import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Cookie from "cookies";
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import { AuthOptions, getServerSession } from "next-auth";
import { decode, encode } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "../database/prisma";
import { env } from "../env";
import { setupStripeCustomer } from "../stripe/setupStripeCustomer";
import { hashStringWithSalt } from "./hash";

const tokenName =
  env.NODE_ENV === "development"
    ? "next-auth.session-token"
    : "__Secure-next-auth.session-token";

export const authOptions: (
  req?: NextApiRequest,
  res?: NextApiResponse
) => AuthOptions = (req, res) => ({
  adapter: PrismaAdapter(prisma),
  // session: {
  //   strategy: 'jwt',
  // },
  secret: env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
    // EmailProvider({
    //   server: env.EMAIL_SERVER,
    //   from: env.EMAIL_FROM,
    //   sendVerificationRequest: sendVerificationRequest,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) return null;

        // Add logic here to look up the user from the credentials supplied
        const passwordHash = hashStringWithSalt(
          credentials.password,
          env.NEXTAUTH_SECRET
        );

        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
            password: passwordHash,
          },
        });

        if (user) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
          };
        } else {
          return null;
        }
      },
    }),
    // GoogleProvider({
    //   clientId: env.GOOGLE_ID,
    //   clientSecret: env.GOOGLE_SECRET,
    // }),
  ],
  callbacks: {
    session({ session, user }) {
      if (!session?.user) return session;
      session.user.id = user.id;
      session.user.image = user.image;
      return session;
    },
    async signIn({ user }) {
      // Check if this sign in callback is being called in the credentials authentication flow. If so, use the next-auth adapter to create a session entry in the database (SignIn is called after authorize so we can safely assume the user is valid and already authenticated).
      if (!req || !res) return true;
      if (
        req.query.nextauth?.includes("callback") &&
        req.query.nextauth?.includes("credentials") &&
        req.method === "POST"
      ) {
        if (user) {
          const uuid = uuidv4();
          // + 7 days
          const expireAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
          await prisma.session.create({
            data: {
              sessionToken: uuid,
              userId: user.id,
              // expires in 2 weeks
              expires: expireAt,
              accessToken: uuid,
            },
          });

          const cookie = new Cookie(req, res, {
            secure: process.env.NODE_ENV === "production",
          });

          const maxAge = 7 * 24 * 60 * 60; // 7 jours en secondes

          cookie.set(tokenName, uuid, {
            maxAge,
            // expires: expireAt,
            // httpOnly: true,
            secure: env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
          });
        }
      }

      return true;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async jwt({ token }) {
      return token;
    },
  },
  //needs to override default jwt behavior when using Credentials
  jwt: {
    encode(params) {
      if (!req || !res) {
        return encode(params);
      }
      if (
        req.query.nextauth?.includes("callback") &&
        req.query.nextauth?.includes("credentials") &&
        req.method === "POST"
      ) {
        const cookies = new Cookie(req, res);
        const cookie = cookies.get("next-auth.session-token");
        if (cookie) return cookie;
        else return "";
      }
      // Revert to default behaviour when not in the credentials provider callback flow
      return encode(params);
    },
    async decode(params) {
      if (!req || !res) {
        return decode(params);
      }
      if (
        req.query.nextauth?.includes("callback") &&
        req.query.nextauth?.includes("credentials") &&
        req.method === "POST"
      ) {
        return null;
      }
      // Revert to default behaviour when not in the credentials provider callback flow
      return decode(params);
    },
  },
  events: {
    createUser: async ({ user }) => {
      // Create a stripe customer for the user with their email address
      await setupStripeCustomer(user);
    },
  },
  pages: {
    signIn: "/signin",
    signOut: "/signout",
    verifyRequest: "/verify-request",
  },
});

type ParametersGetServerSession =
  | []
  | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
  | [NextApiRequest, NextApiResponse];

export const getAuthSession = async (...parameters: ParametersGetServerSession) => {
  const session = await getServerSession(...parameters, authOptions());
  return session;
};

export const getRequiredAuthSession = async (
  ...parameters: ParametersGetServerSession
) => {
  const session = await getAuthSession(...parameters);
  if (!session?.user?.id) {
    redirect("/login");
  }
  return session as {
    user: {
      id: string;
      email: string;
      name?: string;
      image?: string;
    };
  };
};
