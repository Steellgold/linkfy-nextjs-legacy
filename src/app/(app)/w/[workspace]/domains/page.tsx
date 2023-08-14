import {
  Dashboard,
  DashboardContent,
  DashboardDescription,
  DashboardHeader,
  DashboardTitle,
} from "@/lib/features/layout/app/Dashboard";

const Domains = (): React.ReactElement => {
  return (
    <Dashboard>
      <DashboardHeader>
        <DashboardTitle>Domains</DashboardTitle>
      </DashboardHeader>
      <DashboardDescription>
        Manage here the domains and subdomains you have added, you can delete, modify
        or see which links are associated with these domains.
      </DashboardDescription>
      <DashboardContent>
        <p>Billing here</p>
      </DashboardContent>
    </Dashboard>
  );
};

export default Domains;
