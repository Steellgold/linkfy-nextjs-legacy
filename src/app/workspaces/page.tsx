"use client";

import { Button, buttonVariants } from "@/lib/components/ui/button";
import { Separator } from "@/lib/components/ui/separator";
import Link from "next/link";

const Home = (): React.ReactElement => {
  return (
    <div className="mx-auto mt-14 max-w-screen-xl">
      <div className="space-y-6 p-2 pb-16 md:block">
        <div className="space-y-0.5 flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold tracking-tight">Workspaces</h2>
            <p className="text-muted-foreground">
              Manage your workspaces, invite people, create projects and more!
            </p>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col items-center justify-center space-y-6 mt-16 border border-gray-300 dark:border-gray-100/10 rounded-md p-10">
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-bold tracking-tight">No workspaces</h3>
            <p className="text-muted-foreground">
              You don&apos;t have any workspaces yet, create one or be invited!
            </p>
            <div className="flex space-x-2">
              <Button variant={"outline"} className="w-full" disabled>
                Create a workspace
              </Button>
              <Link href={"/workspace/personal"} className={buttonVariants({ variant: "outline", size: "sm", className: "w-full" })}>
                Go to personal workspace
              </Link>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
