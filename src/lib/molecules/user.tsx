"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/lib/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/lib/components/ui/avatar";
import Link from "next/link";
import React, { ReactElement } from "react";
import { buttonVariants } from "../components/ui/button";

export const User = async(): Promise<ReactElement> => {
  const supabase = createClientComponentClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <>
      {user && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            {user.user_metadata.avatar_url ? (
              <AvatarImage src={user.user_metadata.avatar_url} alt={user.user_metadata.full_name} />
            ) : (
              <Avatar>
                <AvatarFallback>
                  {user.user_metadata.full_name.split(" ").map((name: string) => name[0]).join("")}
                </AvatarFallback>
              </Avatar>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Workspaces</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      
      {!user && (
        <Link href={"/sign-in"} className={buttonVariants({ variant: "outline" })}>
          Sign in
        </Link>
      )}
    </>
  )
}