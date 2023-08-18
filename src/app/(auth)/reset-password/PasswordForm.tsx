"use client";

import { Typography } from "@/lib/components/ui/typography";
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
import { useToast } from "@/lib/components/ui/use-toast";
import { signOut } from "next-auth/react";
import { z } from "zod";

const ResetPasswordFormScheme = z.object({
  password: z.string().min(8).optional(),
  verifyPassword: z.string().min(8).optional(),
});

type MagicLinkFormType = z.infer<typeof ResetPasswordFormScheme>;

export const MagicLinkForm = ({
  resetPassword,
}: {
  resetPassword: (values: MagicLinkFormType) => Promise<void>;
}) => {
  const form = useZodForm({
    schema: ResetPasswordFormScheme,
  });
  const { toast } = useToast();

  async function onSubmit(values: MagicLinkFormType) {
    return resetPassword(values)
      .then(() => {
        signOut();
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: "Error",
          description: error.error,
        });
      });
  }

  return (
    <Form form={form} onSubmit={onSubmit} className="space-y-4 max-w-lg">
      <Typography variant="h3">Login with magic link</Typography>
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
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
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="password" {...field} />
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
