import { Separator } from "@/lib/components/ui/separator";

const Team = (): React.ReactElement => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Team</h3>
        <p className="text-sm text-muted-foreground">
          Here invite your colleagues, friends, partners so that they can access your workspace, generate links, or view statistics. <br />
          You will also be able to create or assign custom permissions to your members in the future
        </p>
      </div>
      <Separator />
    </div>
  );
};

export default Team;