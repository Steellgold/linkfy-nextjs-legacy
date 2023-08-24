"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "../components/ui/button"

export type Tabs = {
  items: {
    icon?: React.ReactNode | null
    href?: string | null
    title: string
  }[]
}

type SidebarNavProps = React.HTMLAttributes<HTMLElement> & Tabs & {
  tab?: number | null
}

export function SidebarNav({ className, items, tab, ...props }: SidebarNavProps) {
  const pathname = usePathname();
  if (!pathname) return null;
  
  const path = pathname.split("/")[tab ?? 3] ?? null

  const replaceLast = (href: string): string => {
    const parts = pathname.split("/")
    parts[tab ?? 3] = href

    if (parts.length > (tab ?? 3) + 1) {
      parts.splice(4, parts.length - 4)
    }

    return parts.join("/")
  }

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 overflow-x-auto lg:overflow-y-auto",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.title.toLowerCase()}
          href={item.href ? replaceLast(item.href) : replaceLast("")}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            (path === item.href || (path == null && items[0].href === item.href))
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent",
            "group justify-start"
          )}
        >
          {item.icon && (
            <span className="flex items-center justify-center w-6 h-6">
              {item.icon}
            </span>
          )}&nbsp;&nbsp;        
          <span className="group-hover:underline">{item.title}</span>
        </Link>
      ))}
    </nav>
  )
}