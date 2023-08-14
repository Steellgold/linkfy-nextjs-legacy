import {
  Dashboard,
  DashboardContent,
  DashboardDescription,
  DashboardHeader,
  DashboardTitle,
} from "@/lib/features/layout/app/Dashboard";

const Settings = (): React.ReactElement => {
  return (
    <Dashboard>
      <DashboardHeader>
        <DashboardTitle>Settings</DashboardTitle>
      </DashboardHeader>
      <DashboardDescription>
        Manage your workspace here, you can modify its name, description, the secret
        password that is required for risky actions
      </DashboardDescription>
      <DashboardContent>
        <p>Settings here</p>
      </DashboardContent>
    </Dashboard>
  );
};

export default Settings;
