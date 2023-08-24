import { authOptions } from "@/lib/auth/nextauth";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, authOptions(req, res));
}
