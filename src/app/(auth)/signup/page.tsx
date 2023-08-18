import { Typography } from "@/lib/components/ui/Typography";
import { Link } from "lucide-react";
import { OrDivider } from "../OrDivider";
import { Socials } from "../Socials";
import { SignUpCredentialsForm } from "./SignUpCredentialsForm";
import { createAccount } from "./signup.action";

export const metadata = {
  title: "Sign In - Cube",
  description: "Page description",
};

export default function SignIn() {
  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-16 pb-12 md:pt-20 md:pb-20">
        {/* Page header */}
        <div className="max-w-3xl mx-auto text-center pb-12">
          <Typography variant="h2" className="w-fit m-auto">
            Create an account
          </Typography>
        </div>
        {/* Form */}
        <div className="max-w-sm mx-auto">
          <SignUpCredentialsForm createAccount={createAccount} />
          <OrDivider />
          <Socials />
          <div className="text-center mt-6">
            <Typography>
              Have an account ?{" "}
              <Typography variant="link" as={Link} href="/signin">
                Login
              </Typography>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
