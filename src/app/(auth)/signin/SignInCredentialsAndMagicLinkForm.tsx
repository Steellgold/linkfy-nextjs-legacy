"use client";

import { Typography } from "@/lib/components/ui/Typography";
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
import { AlertTriangle, Link } from "lucide-react";
import { SignInResponse, signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import { useLocalStorage } from "usehooks-ts";
import { z } from "zod";

const LoginCredentialsFormScheme = z.object({
  email: z.string().email(),
  password: z.string().min(8).optional(),
});

type LoginCredentialsFormType = z.infer<typeof LoginCredentialsFormScheme>;

const ErrorMapping: Record<string, string> = {
  CredentialsSignin: "Invalid credentials. Please try again.",
  EmailSignin: "Error during sing in with email.",
};

export const SignInCredentialsAndMagicLinkForm = () => {
  const form = useZodForm({
    schema: LoginCredentialsFormScheme,
  });
  const [isWithPassword, setIsWithPassword] = useLocalStorage(
    "password-sign-in-settings",
    false
  );
  const params = useSearchParams();

  const paramsError = params?.get("error");
  const error = paramsError ? ErrorMapping[paramsError] : null;

  async function onSubmit(values: LoginCredentialsFormType) {
    let result: SignInResponse | undefined;
    if (isWithPassword) {
      result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: `${window.location.origin}/`,
      });
    } else {
      result = await signIn("email", {
        email: values.email,
        callbackUrl: `${window.location}`,
      });
    }
    console.log(result);
  }

  return (
    <Form form={form} onSubmit={onSubmit} className="space-y-4 max-w-lg">
      <Typography variant="h3">
        {isWithPassword ? "Login with Password" : "Login with MagicLink"}
      </Typography>
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
      {isWithPassword ? (
        <>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Typography
            variant="link"
            as="button"
            type="button"
            className="text-sm"
            onClick={() => {
              setIsWithPassword(false);
            }}
          >
            Use magic link
          </Typography>
        </>
      ) : (
        <Typography
          variant="link"
          as="button"
          type="button"
          className="text-sm"
          onClick={() => {
            setIsWithPassword(true);
          }}
        >
          Use password
        </Typography>
      )}

      <Button type="submit" className="w-full">
        {isWithPassword ? "Login with Password" : "Login with MagicLink"}
      </Button>

      {error && (
        <Alert variant="destructive">
          <AlertTriangle size={16} />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}

      {isWithPassword && (
        <Typography variant="small">
          Forgot password ?{" "}
          <Typography variant="link" as={Link} href="/reset-password-magic-link">
            Reset it
          </Typography>
        </Typography>
      )}
    </Form>
  );
};
