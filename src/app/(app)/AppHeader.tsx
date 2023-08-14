import { ChooseTheme } from "@/lib/components/ui/choose-theme";
import { FeedbackButton } from "@/lib/features/feedback/FeedbackButton";

export default function AppHeader() {
  return (
    <header className="bg-background border-b-2 border-border shadow-xs">
      <div className="container px-4 flex items-center py-4 gap-2">
        <div className="flex-1" />
        <FeedbackButton />
        <ChooseTheme />
      </div>
    </header>
  );
}
