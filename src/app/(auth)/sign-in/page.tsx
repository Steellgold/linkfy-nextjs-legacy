/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/lib/components/ui/button";
import { Input } from "@/lib/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/lib/components/ui/form";
import { Outfit } from "next/font/google";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Separator } from "@/lib/components/ui/separator";
import Link from "next/link";
import { Providers } from "../providers";

const outfit = Outfit({ subsets: ["latin"] });

const SignIn = (): React.ReactElement => {
  const formSchema = z.object({
    email: z
      .string()
      .email()
      .nonempty({
        message: "Your email is required.",
      })
      .min(2, {
        message: "Your email is too short.",
      }),
    password: z
      .string()
      .nonempty({
        message: "Your password is required.",
      })
      .min(8, {
        message: "Your password is too short.",
      }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (): void => {
    console.log("Submitted!");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 md:mt-16 px-3">
      <Card className="w-full max-w-[30rem]">
        <CardHeader className="-mb-3">
          <CardTitle className={outfit.className}>Connect to your account</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className={cn("w-full flex gap-1", outfit.className)}
              >
                Sign in
              </Button>
            </form>

            <Separator className="my-3" />
            <Providers />
          </Form>
        </CardContent>

        <CardFooter className="flex flex-col justify-start items-start">
          <div>
            You don&apos;t have an account?&nbsp;
            <Link href={"/sign-up"} className="text-primary hover:underline">
              Click here to sign up.
            </Link>
          </div>
          <div>
            <Link href={"/forgot-password"} className="text-primary hover:underline">
              Forgot your password?
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
