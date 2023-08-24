"use server";

import { hashStringWithSalt } from "@/lib/auth/hash";
import { getAuthSession } from "@/lib/auth/nextauth";
import { prisma } from "@/lib/database/prisma";
import { env } from "@/lib/env";

export const updatePassword = async (values: { newPassword: string }) => {
  const { newPassword } = values;
  const session = await getAuthSession();

  const userId = session?.user?.id;

  if (!userId) {
    throw new Error("No user id found");
  }

  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: hashStringWithSalt(newPassword, env.NEXTAUTH_SECRET),
    },
    select: {
      id: true,
    },
  });

  return user;
};
