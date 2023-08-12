"use client";

import { buttonVariants } from "@/lib/components/ui/button"
import { Separator } from "@/lib/components/ui/separator"
import { SidebarNav, Tabs } from "@/lib/molecules/sidebar"
import { ArrowLeft, CaseLower, CreditCard, GalleryVertical, LinkIcon, Settings, TreePine, Users2Icon } from "lucide-react"
import Link from "next/link"
import { useMediaQuery } from "usehooks-ts";

const sidebarNavItems: Tabs = {
  items: [
    { title: "Overview", href: null, icon: <GalleryVertical className="w-5 h-5" /> },
    { title: "Links", href: "links", icon: <LinkIcon className="w-5 h-5" /> },
    { title: "Trees", href: "trees", icon: <TreePine className="w-5 h-5" /> },
    { title: "Domains", href: "domains", icon: <CaseLower className="w-5 h-5" /> },
    { title: "Team", href: "team", icon: <Users2Icon className="w-5 h-5" /> },
    { title: "Billing", href: "billing", icon: <CreditCard className="w-5 h-5" /> },
    { title: "Settings", href: "settings", icon: <Settings className="w-5 h-5" /> }
  ]
}

interface WorkspaceLayoutProps {
  children: React.ReactNode
}

export default function WorkspaceLayout({ children }: WorkspaceLayoutProps) {
  const media = useMediaQuery("(max-width: 640px)");

  return (
    <div className="mx-auto mt-14 max-w-screen-2xl">
      <div className="space-y-6 p-2 pb-16 md:block">
        <div className="space-y-0.5 flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold tracking-tight">Workspace</h2>
            <p className="text-muted-foreground">
              Manage your workspace settings and set up billing here.
            </p>
          </div>
          {media ? (
            <Link href={"/workspaces"} className={buttonVariants({ variant: "default" })}><ArrowLeft className="h-4 w-4" /></Link>
          ) : (
            <Link href={"/workspaces"} className={buttonVariants({ variant: "outline", size: "sm" })}>
              Return to workspaces
            </Link>
          )}
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems.items} />
          </aside>
          <div className="flex-1 lg:max-w-7xl">{children}</div>
        </div>
      </div>
    </div>
  )
}