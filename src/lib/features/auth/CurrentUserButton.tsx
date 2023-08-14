/* eslint-disable @next/next/no-img-element */

import { Button } from "@/lib/components/ui/button";
import { UserMenuDropdown } from "./UserDropdown";

// TODO : Update user type with supabase user
export const UserButton = ({ user }: { user: unknown }) => {
  return (
    // TODO : Update with stripe callback
    <UserMenuDropdown openBilling={() => new Promise((r) => r(""))}>
      <Button variant="outline" size="sm" className="flex items-center gap-2">
        <div>{user.name || user.email?.split("@")[0]}</div>
        <img
          className="w-6 h-6 rounded-full"
          src={
            user.image ??
            "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
          }
          alt={user.name ?? "placeholder image"}
        />
      </Button>
    </UserMenuDropdown>
  );
};
