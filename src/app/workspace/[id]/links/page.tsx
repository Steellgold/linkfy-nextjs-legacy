import { Separator } from "@/lib/components/ui/separator";

const Links = (): React.ReactElement => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Links</h3>
        <p className="text-sm text-muted-foreground">
          Your links that you have generated will be displayed here, you can delete or modify them whenever you want
        </p>
      </div>
      <Separator />
    </div>
  );
};

export default Links