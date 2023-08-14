import {
  Dashboard,
  DashboardContent,
  DashboardDescription,
  DashboardHeader,
  DashboardTitle,
} from "@/lib/features/layout/app/Dashboard";

const Billing = (): React.ReactElement => {
  return (
    <Dashboard>
      <DashboardHeader>
        <DashboardTitle>Billing</DashboardTitle>
      </DashboardHeader>
      <DashboardDescription>
        Manage your billing, upgrade your plan, and more!
      </DashboardDescription>
      <DashboardContent>
        <p>Billing here</p>
      </DashboardContent>
    </Dashboard>
  );
};

export default Billing;
