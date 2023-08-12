import { Separator } from "@/lib/components/ui/separator";

const Domains = (): React.ReactElement => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Domains</h3>
        <p className="text-sm text-muted-foreground">
          Manage here the domains and subdomains you have added, you can delete, modify or see which links are associated with these domains.
        </p>
      </div>
      <Separator />
    </div>
  );
};

export default Domains;