import { Avatar, AvatarFallback, AvatarImage } from "@/lib/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/lib/components/ui/dropdown-menu";
import Link from "next/link";
import { ReactElement } from "react";
import { getAuthSession } from "../auth/nextauth";
import { Button, buttonVariants } from "../components/ui/button";
import { Logout } from "./logout";

export const User = async (): Promise<ReactElement> => {
  const session = await getAuthSession();

  const user = session?.user;

  return (
    <>
      {user && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant={"outline"}>
              {user.image && user.name ? (
                <Avatar className="h-5 w-5">
                  <AvatarImage
                    src={user.image}
                    alt={user.name}
                    width={8}
                    height={8}
                  />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((name: string) => name[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <Avatar>
                  <AvatarFallback>
                    {(user.name ?? "")
                      .split(" ")
                      .map((name: string) => name[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              )}

              <span className="ml-2">{user.name}</span>
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
  );
};
