"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "../components/ui/button"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href?: string | null
    title: string
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()
  const path = pathname.split("/")[3] ?? null

  const replaceLast = (href: string): string => {
    const parts = pathname.split("/")
    parts[3] = href
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
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}