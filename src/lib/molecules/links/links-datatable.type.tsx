"use client";

import {
  ArrowUpDown,
  CircleSlash,
  Lock,
  Settings,
  ToggleLeft,
  ToggleRight,
  Unlock,
} from "lucide-react";
import { Checkbox } from "@/lib/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/lib/components/ui/button";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/lib/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/lib/components/ui/dropdown-menu";
import { Badge } from "@/lib/components/ui/badge";

export type Link = {
  id: number;
  url: string;
  slug: string;
  status: "active" | "inactive" | "disabled";
  clicks: number;
  created_at: string;
  protected: boolean;
};

export const linksColumns: ColumnDef<Link>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "url",
    header: () => <div className="text-left">URL</div>,
    cell: ({ row }) => {
      const url: string = row.getValue("url");
      const finalUrl = url.replace(/(^\w+:|^)\/\//, "").replace(/\/$/, "");
      return typeof finalUrl === "string" ? (
        <Link
          href={row.getValue("url")}
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {finalUrl.length > 50 ? `${finalUrl.substring(0, 35)}` : finalUrl}
        </Link>
      ) : (
        <div className="text-center">N/A</div>
      );
    },
  },
  { header: "Slug", accessorKey: "slug" },
  {
    accessorKey: "status",
    header: () => <div className="text-left">Status</div>,
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <div className="flex justify-center">
          <TooltipProvider skipDelayDuration={1} delayDuration={1}>
            <Tooltip>
              <TooltipTrigger>
                {status === "active" && <ToggleRight className="cursor-auto h-4 w-4 text-green-500" />}
                {status === "inactive" && <ToggleLeft className="cursor-auto h-4 w-4 text-yellow-500" />}
                {status === "disabled" && <CircleSlash className="cursor-auto h-4 w-4 text-red-500" />}
              </TooltipTrigger>
              <TooltipContent>
                {status === "active" && "Active"}
                {status === "inactive" && "Inactive"}
                {status === "disabled" && "Disabled by an administator"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    },
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Clicks
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    accessorKey: "clicks",
    cell: ({ row }) => (
      <div className="flex justify-center">{row.getValue("clicks")}</div>
    ),
  },
  {
    accessorKey: "protected",
    header: () => <div className="text-left">Protected</div>,
    cell: ({ row }) => {
      const status = row.getValue("protected");
      return (
        <div className="flex justify-center">
          <TooltipProvider skipDelayDuration={1} delayDuration={1}>
            <Tooltip>
              <TooltipTrigger>
                {status === true && <Lock className="h-4 w-4 text-red-500" />}
                {status === false && <Unlock className="h-4 w-4 text-green-500" />}
              </TooltipTrigger>
              <TooltipContent>
                {status === true && "Protected (requires password)"}
                {status === false && "Not Protected (no password required)"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    },
  },
  { header: "Created At", accessorKey: "created_at" },
  {
    id: "actions",
    enableSorting: false,
    enableHiding: false,
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Settings className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuItem>
            Go to
          </DropdownMenuItem>
          <DropdownMenuItem>
            Statistics
          </DropdownMenuItem>
          <DropdownMenuItem>
          Generate QR Code
          </DropdownMenuItem>
          <DropdownMenuItem>
            Chat with AI&nbsp;<Badge variant="premium">Plus</Badge>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }    
];