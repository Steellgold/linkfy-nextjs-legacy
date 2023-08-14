import { buttonVariants } from "@/lib/components/ui/button";
import {
  Dashboard,
  DashboardActions,
  DashboardContent,
  DashboardDescription,
  DashboardHeader,
  DashboardTitle,
} from "@/lib/features/layout/app/Dashboard";
import Link from "next/link";

export default function Links() {
  return (
    <Dashboard>
      <DashboardHeader>
        <DashboardTitle>Myl.ink</DashboardTitle>
        <DashboardActions>
          <Link href="/links/create" className={buttonVariants()}>
            Create link
          </Link>
        </DashboardActions>
      </DashboardHeader>
      <DashboardDescription>You can find your links here</DashboardDescription>

      <DashboardContent>Test</DashboardContent>
    </Dashboard>
  );
}
