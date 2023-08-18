import { Typography } from "@/lib/components/ui/Typography";
import { Separator } from "@/lib/components/ui/separator";

type DividerProps = {
  text?: string;
};

export const Divider = ({ text }: DividerProps) => {
  return (
    <div className="flex items-center my-6 relative h-4">
      <Separator />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-fit bg-gradient-to-r px-12 from-background/20 via-background to-background/20">
          <Typography italic variant="small">
            {text ?? "or"}
          </Typography>
        </div>
      </div>
    </div>
  );
};
