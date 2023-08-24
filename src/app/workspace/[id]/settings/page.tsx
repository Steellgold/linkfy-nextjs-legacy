import { Separator } from "@/lib/components/ui/separator";

const Settings = (): React.ReactElement => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your workspace here, you can modify its name, description, the secret password that is required for risky actions
        </p>
      </div>
      <Separator />
    </div>
  );
};

export default Settings;