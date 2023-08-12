import { buttonVariants } from "@/lib/components/ui/button"
import { Separator } from "@/lib/components/ui/separator"
import { SidebarNav } from "@/lib/molecules/sidebar"
import Link from "next/link"

const sidebarNavItems = [
  { title: "Overview", href: null },
  { title: "Links", href: "links" },
  { title: "Trees", href: "trees" },
  { title: "Domains", href: "domains" },
  { title: "Team", href: "team" },
  { title: "Billing", href: "billing" },
  { title: "Settings", href: "settings" }
]

interface WorkspaceLayoutProps {
  children: React.ReactNode
}

export default function WorkspaceLayout({ children }: WorkspaceLayoutProps) {
  return (
    <div className="mx-auto mt-14 max-w-screen-xl">
      <div className="space-y-6 p-2 pb-16 md:block">
        <div className="space-y-0.5 flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold tracking-tight">Workspace</h2>
            <p className="text-muted-foreground">
              Manage your workspace settings and set up billing here.
            </p>
          </div>
          <Link href={"/workspaces"} className={buttonVariants({ variant: "outline", size: "sm" })}>
            Return to Workspaces
          </Link>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-5xl">{children}</div>
        </div>
      </div>
    </div>
  )
}