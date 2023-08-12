"use client";

import { buttonVariants } from "@/lib/components/ui/button"
import { Separator } from "@/lib/components/ui/separator"
import { SidebarNav, Tabs } from "@/lib/molecules/sidebar"
import { ArrowLeft, Clock, Lock, Plane } from "lucide-react"
import Link from "next/link"
import { useMediaQuery } from "usehooks-ts";

const sidebarNavItems: Tabs = {
  items: [
    { title: "Destination", href: null, icon: <Plane className="w-5 h-5" /> },
    { title: "Protection", href: "protected", icon: <Lock className="w-5 h-5" /> },
    { title: "Expiration", href: "expiration", icon: <Clock className="w-5 h-5" /> }
  ]
}

interface LinkLayoutLayoutProps {
  children: React.ReactNode
}

export default function LinkLayout({ children }: LinkLayoutLayoutProps) {
  const media = useMediaQuery("(max-width: 640px)");

  return (
    <div className="mx-auto mt-14 max-w-screen-2xl">
      <div className="space-y-6 p-2 pb-16 md:block">
        <div className="space-y-0.5 flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold tracking-tight">Link</h2>
            <p className="text-muted-foreground">
              Manage this link and its settings.
            </p>
          </div>
          {media ? (
            <Link href={"/workspaces/personal/links"} className={buttonVariants({ variant: "default" })}><ArrowLeft className="h-4 w-4" /></Link>
          ) : (
            <Link href={"/workspaces/personal/links"} className={buttonVariants({ variant: "outline", size: "sm" })}>
              Return to links
            </Link>
          )}
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems.items} tab={4} />
          </aside>
          <div className="flex-1 lg:max-w-7xl">{children}</div>
        </div>
      </div>
    </div>
  )
}