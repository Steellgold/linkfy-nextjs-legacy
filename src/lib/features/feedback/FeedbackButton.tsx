import { Button } from "@/lib/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/lib/components/ui/popover";
import { FeedbackForm } from "./FeedbackForm";

export const FeedbackButton = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async ({ feedback }: { feedback: string }) => {
    "use server";

    // TODO : Server logic
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          Feedback
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <FeedbackForm onSubmit={onSubmit} />
      </PopoverContent>
    </Popover>
  );
};
