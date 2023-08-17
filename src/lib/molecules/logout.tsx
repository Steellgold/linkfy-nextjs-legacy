"use client";

import React, { ReactElement } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { DropdownMenuItem } from "../components/ui/dropdown-menu";
import { useRouter } from "next/navigation"
import { LogOutIcon } from "lucide-react";

export const Logout = (): ReactElement => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  return (
    <DropdownMenuItem onClick={() => {
      supabase.auth.signOut()
      router.refresh()
    }} className="group flex justify-between cursor-pointer transition-colors">
      <span className="group-hover:text-red-500">Sign out</span>
      <LogOutIcon className="w-4 h-4 group-hover:text-red-500" />
    </DropdownMenuItem>
  );
};
