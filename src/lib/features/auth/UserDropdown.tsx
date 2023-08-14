"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/lib/components/ui/dropdown-menu";
import { useMutation } from "@tanstack/react-query";
import {
  CreditCard,
  DollarSign,
  Home,
  Link,
  Loader,
  LogOut,
  User2,
} from "lucide-react";
import { PropsWithChildren } from "react";

export function UserMenuDropdown({
  children,
  openBilling,
}: PropsWithChildren<{
  openBilling: () => Promise<string>;
}>) {
  const mutation = useMutation(async () => {
    // TODO - Sign out the current user
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => {
            const url = await openBilling();
            console.log({ url });
            window.location.href = url;
          }}
        >
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Billing</span>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/upgrade">
            <DollarSign className="mr-2 h-4 w-4" />
            Upgrade
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="https://quiz-ai.net">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/account">
            <User2 className="mr-2 h-4 w-4" />
            Account settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={(e) => {
            mutation.mutate();
            e.preventDefault();
          }}
        >
          {mutation.isLoading ? <Loader /> : <LogOut className="mr-2 h-4 w-4" />}
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
