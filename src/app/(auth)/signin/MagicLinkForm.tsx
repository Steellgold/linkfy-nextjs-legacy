"use client";

import { Typography } from "@/lib/components/ui/Typography";
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
import { signIn } from "next-auth/react";
import { Button } from "react-day-picker";
import { z } from "zod";

const MagicLinkFormScheme = z.object({
  email: z.string().email(),
});

type MagicLinkFormType = z.infer<typeof MagicLinkFormScheme>;

export const MagicLinkForm = ({
  redirectUrl,
  title = "Login with Magic Link",
}: {
  redirectUrl?: string;
  title?: string;
}) => {
  const form = useZodForm({
    schema: MagicLinkFormScheme,
  });

  async function onSubmit(values: MagicLinkFormType) {
    await signIn("email", {
      email: values.email,
      callbackUrl: `/${redirectUrl ?? ""}`,
    });
  }

  return (
    <Form form={form} onSubmit={onSubmit} className="space-y-4 max-w-lg">
      <Typography variant="h3">{title}</Typography>
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

      <Button type="submit" className="w-full">
        Submit
      </Button>
    </Form>
  );
};
