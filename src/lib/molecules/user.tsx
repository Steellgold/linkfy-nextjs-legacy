import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/lib/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/lib/components/ui/avatar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button, buttonVariants } from "../components/ui/button";
import React, { ReactElement } from "react";
import { cookies } from "next/headers";
import Link from "next/link";
import { Logout } from "./logout";

export const User = async(): Promise<ReactElement> => {
  const supabase = createServerComponentClient({ cookies });
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <>
      {user && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant={"outline"}>
              {user.user_metadata.avatar_url ? (
                <Avatar className="h-5 w-5">
                  <AvatarImage src={user.user_metadata.avatar_url} alt={user.user_metadata.full_name} width={8} height={8} />
                  <AvatarFallback>{user.user_metadata.full_name.split(" ").map((name: string) => name[0]).join("")}</AvatarFallback>
                </Avatar>
              ) : (
                <Avatar>
                  <AvatarFallback>
                    {user.user_metadata.full_name.split(" ").map((name: string) => name[0]).join("")}
                  </AvatarFallback>
                </Avatar>
              )}

              <span className="ml-2">{user.user_metadata.full_name}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-32">
            <Link href={"/workspaces"}>
              <DropdownMenuItem className="cursor-pointer">
                Workspaces
              </DropdownMenuItem>
            </Link>
            <Link href={"/pricing"}>
              <DropdownMenuItem className="cursor-pointer">
                Subscription
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <Logout />
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