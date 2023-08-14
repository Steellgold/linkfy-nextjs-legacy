"use client";

import { Button, buttonVariants } from "@/lib/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/lib/components/ui/tooltip";
import {
  Dashboard,
  DashboardActions,
  DashboardContent,
  DashboardDescription,
  DashboardHeader,
  DashboardTitle,
} from "@/lib/features/layout/app/Dashboard";
import Link from "next/link";

type Workspace = {
  title: string;
  description: string;
  href: string;
  default: boolean;
};

const workspaces: Workspace[] = [
  // { title: "Personal", description: "Your personal workspace", href: "/workspace/personal", default: true },
  // { title: "Secret project", description: "A secret project", href: "/workspace/18a1b2c3", default: false },
];

const Home = (): React.ReactElement => {
  return (
    <Dashboard>
      <DashboardHeader>
        <DashboardTitle>Workspaces</DashboardTitle>
        <DashboardActions>
          <Link className={buttonVariants({})} href="/workspaces/create">
            Create workspace
          </Link>
        </DashboardActions>
      </DashboardHeader>
      <DashboardDescription>
        Manage your workspaces, invite people, create projects and more!
      </DashboardDescription>

      <DashboardContent>
        {workspaces.length == 0 ? (
          <NoWorkspace />
        ) : (
          <Workspaces workspaces={workspaces} />
        )}
      </DashboardContent>
    </Dashboard>
  );
};

const Workspaces = ({ workspaces }: { workspaces: Workspace[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {workspaces.map((workspace) => (
      <div
        key={workspace.title}
        className="flex flex-col space-y-3 border border-gray-300 dark:border-gray-100/10 rounded-md p-4"
      >
        <div className="flex flex-col space-y-1">
          <h3 className="text-lg font-bold tracking-tight">{workspace.title}</h3>
          <p className="text-muted-foreground">{workspace.description}</p>
        </div>
        <div className="relative flex flex-col space-y-2">
          <Link
            href={workspace.href}
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "w-full",
            })}
          >
            Go to workspace
          </Link>
        </div>
      </div>
    ))}

    <div className="flex flex-col space-y-2 border border-gray-300 dark:border-gray-100/10 rounded-md p-4">
      <div className="flex flex-col space-y-3">
        <div>
          <h3 className="text-lg font-bold tracking-tight">New workspace</h3>
          <p className="text-muted-foreground">
            Create a new workspace to manage your projects, invite people and more!
          </p>
        </div>
        <Button variant={"outline"} className="w-full">
          Create a workspace
        </Button>
      </div>
    </div>
  </div>
);

const NoWorkspace = () => (
  <div className="flex flex-col items-center justify-center space-y-6 border border-gray-300 dark:border-gray-100/10 rounded-md p-10">
    <div className="flex flex-col space-y-2">
      <h3 className="text-lg font-bold tracking-tight">No workspaces</h3>
      <p className="text-muted-foreground">
        You don&apos;t have any workspaces yet, create one or be invited!
      </p>
      <div className="flex space-x-2">
        <TooltipProvider>
          <Tooltip delayDuration={1}>
            <TooltipTrigger className="w-full">
              <Button variant={"outline"} className="w-full" disabled>
                Create a workspace
              </Button>
            </TooltipTrigger>
            <TooltipContent>Coming soon!</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Link
          href={"/workspace/personal"}
          className={buttonVariants({
            variant: "outline",
            size: "sm",
            className: "w-full",
          })}
        >
          Go to personal workspace
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
