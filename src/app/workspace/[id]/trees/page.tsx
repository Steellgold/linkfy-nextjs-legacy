import { Separator } from "@/lib/components/ui/separator";

const Trees = (): React.ReactElement => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Trees</h3>
        <p className="text-sm text-muted-foreground">
          Link trees are links that you can group on a page to organize and share them easily. <br />
          Useful when you want to share your social networks, or training
        </p>
      </div>
      <Separator />
    </div>
  );
};

export default Trees;