"use client";

import { buttonVariants } from "@/lib/components/ui/button";
import { Separator } from "@/lib/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/components/ui/tabs"
import Link from "next/link";
import LinkAnalytics from "./analytics";
import LinkSettings from "./settings";

const LinkOverview = (): React.ReactElement => {
  const media = useMediaQuery("(max-width: 640px)");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Link</h3>
          <p className="text-sm text-muted-foreground">
            Manage the link here, 
          </p>
        </div>
          {media ? (
            <Link href={"/workspaces"} className={buttonVariants({ variant: "default" })}><ArrowLeft className="h-4 w-4" /></Link>
          ) : (
            <Link href={"/workspaces"} className={buttonVariants({ variant: "outline", size: "sm" })}>
              Return to links
            </Link>
          )}
      </div>

      <Separator />
      
      <Tabs defaultValue="analytics" className="w-full">
        <TabsList>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="analytics">
          <LinkAnalytics />
        </TabsContent>
        <TabsContent value="settings">
          <LinkSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LinkOverview;