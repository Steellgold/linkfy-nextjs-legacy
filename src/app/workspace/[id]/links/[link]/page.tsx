import { Separator } from "@/lib/components/ui/separator";

const Link = (): React.ReactElement => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Link</h3>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </div>
      <Separator />
    </div>
  );
};

export default Link