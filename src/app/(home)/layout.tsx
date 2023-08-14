import { Navbar } from "@/lib/molecules/navbar";
import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
}
