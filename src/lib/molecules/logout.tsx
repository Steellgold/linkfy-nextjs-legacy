"use client";

import React, { ReactElement } from "react";
import { DropdownMenuItem } from "../components/ui/dropdown-menu";
import { LogOutIcon } from "lucide-react";

export const Logout = (): ReactElement => {
  return (
    <DropdownMenuItem onClick={() => {
      // TODO: Implement logout
    }} className="group flex justify-between cursor-pointer transition-colors">
      <span className="group-hover:text-red-500">Sign out</span>
      <LogOutIcon className="w-4 h-4 group-hover:text-red-500" />
    </DropdownMenuItem>
  );
};
