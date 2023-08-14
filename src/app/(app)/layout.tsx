import { PropsWithChildren } from "react";
import AppHeader from "./AppHeader";
import { AppMenu } from "./AppMenu";

export default function layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-full">
      <AppMenu />
      <div className="flex flex-1 flex-col">
        <AppHeader />
        <div className="h-full w-full overflow-auto">{children}</div>
      </div>
    </div>
  );
}
