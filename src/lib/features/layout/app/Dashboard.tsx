import { Typography } from "@/lib/components/ui/typography";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const DashboardTitle = ({ children }: PropsWithChildren) => {
  return <Typography variant="h2">{children}</Typography>;
};

export const DashboardDescription = ({ children }: PropsWithChildren) => {
  return (
    <Typography variant="muted" className="mt-1 max-w-lg">
      {children}
    </Typography>
  );
};

export const Dashboard = ({ children }: PropsWithChildren) => {
  return (
    <section className="container flex flex-col max-w-4xl px-4 pt-4 lg:px-6 lg:pt-6">
      {children}
    </section>
  );
};

export const DashboardHeader = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={cn("flex items-start flex-1 gap-1", className)}>{children}</div>
  );
};

export const DashboardActions = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={cn("flex ml-auto items-center gap-2", className)}>
      {children}
    </div>
  );
};

export const DashboardContent = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={cn("mt-4 lg:mt-8 max-w-2xl basis-full", className)}>
      {children}
    </div>
  );
};
