"use server";

import { hashStringWithSalt } from "@/lib/auth/hash";
import { prisma } from "@/lib/database/prisma";
import { env } from "@/lib/env";
import { setupStripeCustomer } from "@/lib/stripe/setupStripeCustomer";
import { LoginCredentialsFormType } from "./SignUpCredentialsForm";

export const createAccount = async (values: LoginCredentialsFormType) => {
  const { email, password, name } = values;

  const user = await prisma.user.create({
    data: {
      email,
      password: hashStringWithSalt(password, env.NEXTAUTH_SECRET),
      name,
    },
  });

  await setupStripeCustomer(user);

  return user;
};
