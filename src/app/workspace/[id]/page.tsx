import { Separator } from "@/lib/components/ui/separator";

const Overview = (): React.ReactElement => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Overview</h3>
        <p className="text-sm text-muted-foreground">
          This is a brief overview of your workspace.
        </p>
      </div>
      <Separator />
    </div>
  );
};

export default Overview;