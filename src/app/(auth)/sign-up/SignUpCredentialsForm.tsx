"use client";

import { Alert, AlertTitle } from "@/lib/components/ui/alert";
import { Button } from "@/lib/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/lib/components/ui/form";
import { Input } from "@/lib/components/ui/input";
import { AlertTriangle } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { z } from "zod";

const LoginCredentialsFormScheme = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  verifyPassword: z.string().min(8),
});

export type LoginCredentialsFormType = z.infer<typeof LoginCredentialsFormScheme>;

export const SignUpCredentialsForm = ({
  createAccount,
}: {
  createAccount: (values: LoginCredentialsFormType) => Promise<unknown>;
}) => {
  const form = useZodForm({
    schema: LoginCredentialsFormScheme,
  });
  const [error, setError] = useState("");

  async function onSubmit(values: LoginCredentialsFormType) {
    if (values.passwordHash !== values.verifyPassword) {
      form.setError("verifyPassword", {
        message: "Password does not match",
      });
      return;
    }

    try {
      await createAccount(values);
    } catch (e) {
      setError("Email already used");
    }

    await signIn("credentials", {
      email: values.email,
      password: values.passwordHash,

      callbackUrl: `${window.location.origin}/`,
    });
  }

  return (
    <Form form={form} onSubmit={onSubmit} className="space-y-4 max-w-lg">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="john@doe.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="verifyPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirm password</FormLabel>
            <FormControl>
              <Input type="password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {error && (
        <Alert variant="destructive">
          <AlertTriangle size={16} />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}

      <Button type="submit" className="w-full">
        Let&apos;s start
      </Button>
    </Form>
  );
};
