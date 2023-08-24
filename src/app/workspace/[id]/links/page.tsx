import { getAuthSession } from "@/lib/auth/nextauth";
import { Separator } from "@/lib/components/ui/separator";
import { prisma } from "@/lib/database/prisma";
import { LinksTable } from "@/lib/molecules/links/links-datatable";
import { linksColumns } from "@/lib/molecules/links/links-datatable.type";
import { ReactElement } from "react";

const Links = async(): Promise<ReactElement> => {
  const session = await getAuthSession();

  const workspace = await prisma.workspace.findFirst({
    where: {
      ownerId: session?.user?.id,
    },
    include: {
      links: true,
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Links</h3>
        <p className="text-sm text-muted-foreground">
          Your links that you have generated will be displayed here, you can delete or modify them whenever you want
        </p>
      </div>
      <Separator />
      {workspace ? (
        <LinksTable columns={linksColumns} data={workspace.links} />
      ) : (
        <div>
          <p className="text-sm text-muted-foreground">No workspace</p>
        </div>
      )}
    </div>
  );
};

export default Links