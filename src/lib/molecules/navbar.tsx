"use client";

import { buttonVariants } from "@/lib/components/ui/button";
import { ChooseTheme } from "@/lib/components/ui/choose-theme";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <nav className={cn("mx-auto mt-3 flex max-w-screen-2xl items-center justify-between px-5")} suppressHydrationWarning>
      <div className="flex items-center space-x-2">
        <Link href={"/"}>
          {(theme == "dark" && (
            <Image src={"/assets/logo-light.png"} alt={"Linkfy"} width={40} height={40} />
          )) ||
            (theme == "light" && (
              <Image src={"/assets/logo-dark.png"} alt={"Linkfy"} width={40} height={40} />
            )) || (
              <Image src={"/assets/logo-light.png"} alt={"Linkfy"} width={40} height={40} />
            )}
        </Link>
      </div>

      <div className="flex h-5 items-center space-x-2 text-sm">
        <Link href={"/"} className={buttonVariants({ variant: "link" })}>
          Pricing
        </Link>
        <Link href={"/"} className={buttonVariants({ variant: "link" })}>
          API
        </Link>
        <Link href={"/sign-in"} className={buttonVariants({ variant: "outline" })}>
          Sign in
        </Link>
        <ChooseTheme />
      </div>
    </nav>
  );
};
