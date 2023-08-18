import { Typography } from "@/lib/components/ui/Typography";
import { Divider } from "../../../lib/components/ui/divider";
import { Socials } from "../Socials";
import { SignUpCredentialsForm } from "./SignUpCredentialsForm";
import { createAccount } from "./signup.action";
import Link from "next/link";

export const metadata = {
  title: "Sign up",
  description: "Create an account on Linkfy to start sharing and shortening links.",
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
          <Divider />
          <Socials />
          <div className="text-center mt-6">
            <Typography>
              Have an account ?{" "}
              <Typography variant="link" as={Link} href="/sign-in">
                Login
              </Typography>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
