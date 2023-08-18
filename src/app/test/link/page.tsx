import { getAuthSession } from "@/lib/auth/nextauth";
import { prisma } from "@/lib/database/prisma";

export default async function page() {
  const session = await getAuthSession();

  const userWorkspace = await prisma.workspace.findFirst({
    where: {
      ownerId: session?.user?.id,
    },
    include: {
      links: true,
    },
  });

  if (!userWorkspace) {
    return <div>no workspace</div>;
  }

  return (
    <div>
      {userWorkspace.links.map((link) => {
        return <div key={link.id}>{link.shortUrl}</div>;
      })}
    </div>
  );
}
