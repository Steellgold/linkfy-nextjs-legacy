import { buttonVariants } from "@/lib/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <Link className={buttonVariants({ variant: "outline" })} href="/signin">
      <LogIn className="mr-2 h-4 w-4" />
      Login
    </Link>
  );
};
