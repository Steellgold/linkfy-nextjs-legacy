"use client";

import { buttonVariants } from "@/lib/components/ui/button";
import { ChooseTheme } from "@/lib/components/ui/choose-theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ReactElement } from "react";
import { Icon } from "./icon";
import { User } from "./user";

export const Navbar = (): ReactElement => {
  return (
    <nav className={cn("mx-auto mt-3 flex max-w-screen-2xl items-center justify-between px-5")} suppressHydrationWarning>
      <div className="flex items-center space-x-2">
        <Icon />
      </div>

      <div className="flex h-5 items-center space-x-2 text-sm">
        <Link href={"/"} className={buttonVariants({ variant: "link" })}>
          Pricing
        </Link>
        <Link href={"/"} className={buttonVariants({ variant: "link" })}>
          API
        </Link>
        <User />
        <ChooseTheme />
      </div>
    </nav>
  );
};
