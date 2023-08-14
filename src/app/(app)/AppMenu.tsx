"use client";

import { Label } from "@/lib/components/ui/label";
import { Typography } from "@/lib/components/ui/typography";
import { AuthButton } from "@/lib/features/auth/AuthButton";
import { AppIcon } from "@/lib/features/branding/AppIcon";
import { WorkspaceSelect } from "@/lib/features/workspace/WorkspaceSelect";
import { cn } from "@/lib/utils";
import {
  CreditCard,
  Gauge,
  Link2,
  PersonStandingIcon,
  Trees,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  {
    title: "Dashboard",
    href: "/",
    icon: <Gauge size={16} />,
  },
  {
    title: "Myl.ink",
    href: "/links",
    icon: <Link2 size={16} />,
  },
  {
    title: "Domains",
    href: "/domains",
    icon: <Workflow size={16} />,
  },
  {
    title: "Workspaces",
    href: "/workspaces",
    icon: <Workflow size={16} />,
  },
];

const WORKSPACE_ITEMS = (w: string) => [
  {
    title: "Overview",
    href: `/w/${w}`,
    icon: <Gauge size={16} />,
  },
  {
    title: "Links",
    href: `/w/${w}/links`,
    icon: <Gauge size={16} />,
  },

  {
    title: "Trees",
    href: `/w/${w}/trees`,
    icon: <Trees size={16} />,
  },

  {
    title: "Domains",
    href: `/w/${w}/domains`,
    icon: <Workflow size={16} />,
  },

  {
    title: "Teams",
    href: `/w/${w}/teams`,
    icon: <PersonStandingIcon size={16} />,
  },

  {
    title: "Billing",
    href: `/w/${w}/billing`,
    icon: <CreditCard size={16} />,
  },
];

export const AppMenu = () => {
  const pathname = usePathname();
  const isWorkSpace = pathname.startsWith("/w");
  const workspace = pathname.split("/")[2];

  const items = isWorkSpace ? WORKSPACE_ITEMS(workspace) : ITEMS;

  return (
    <nav className="bg-background border-r-2 flex flex-col gap-2 border-border shadow-md h-full p-4 w-60">
      <div className="flex gap-1 items-center mb-8">
        <AppIcon size={24} />
        <Typography variant="h3">Myl.ink</Typography>
      </div>
      <div className="mb-8">
        <Label>Workspaces</Label>
        <WorkspaceSelect workspace={[]} />
      </div>
      {items.map((item) => (
        <MenuItem
          active={pathname === item.href}
          key={item.href}
          href={item.href}
          icon={item.icon}
        >
          {item.title}
        </MenuItem>
      ))}
      <div className="flex-1"></div>
      {/* TODO : Passe the current user */}
      <AuthButton user={undefined} />
    </nav>
  );
};

export const MenuItem = ({
  children,
  icon,
  href,
  active,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  href: string;
  active: boolean;
}) => {
  return (
    <Typography
      className={cn(
        "p-2 hover:bg-accent flex items-center gap-2 rounded-md w-full text-card-foreground",
        {
          "bg-accent/50": active,
        }
      )}
      as={Link}
      href={href}
      variant="small"
    >
      <div>{icon}</div>
      {children}
    </Typography>
  );
};
