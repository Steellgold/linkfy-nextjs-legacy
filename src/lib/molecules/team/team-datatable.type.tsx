"use client";

import { Checkbox } from "@/lib/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import type { WorkspaceUserRole } from "@prisma/client"
import Image from "next/image";
import dayjs from "dayjs";

export type TeamMember = {
  id: string;
  avatarUrl: string;
  name: string;
  email: string;
  role: WorkspaceUserRole;
  invitedAt: string;
};

export const teamColumns: ColumnDef<TeamMember>[] = [
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
  },
  {
    accessorKey: "avatarUrl",
    header: () => <span className="sr-only">Avatar</span>,
    cell: ({ row }) => <Image width={32} height={32} className="rounded-full" src={row.original.avatarUrl} alt={row.original.name.toString()} />
  },
  {
    accessorKey: "name",
    header: () => <span>Name</span>,
    cell: ({ row }) => {row.original.name},
  },
  {
    accessorKey: "email",
    header: () => <span>Email</span>,
    cell: ({ row }) => <Link href={`mailto:${row.original.email}`}>{row.original.email}</Link>,
  },
  {
    accessorKey: "role",
    header: () => <span>Role</span>,
    cell: ({ row }) => row.original.role,
  },
  {
    accessorKey: "invitedAt",
    header: () => <span>Invited At</span>,
    cell: ({ row }) => <span>{dayjs(row.original.invitedAt).format("DD MMM YYYY")}</span>,
  }
];
