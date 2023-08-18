import { Typography } from "@/lib/components/ui/Typography";
import { Divider } from "../../../lib/components/ui/divider";
import { Socials } from "../Socials";
import { SignInCredentialsAndMagicLinkForm } from "./SignInCredentialsAndMagicLinkForm";

export const metadata = {
  title: "Sign in",
  description: "Sign in to your Linkfy account.",
};

export default function SignIn() {
  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-16 pb-12 md:pt-20 md:pb-20">
        {/* Page header */}
        <div className="max-w-3xl mx-auto text-center pb-12">
          <Typography variant="h2" className="w-fit m-auto">
            Welcome back !
          </Typography>
        </div>
        {/* Form */}
        <div className="max-w-sm mx-auto">
          <SignInCredentialsAndMagicLinkForm />
          <Divider />
          <Socials />
          <div className="text-center mt-6">
            <Typography variant="small">
              Don't you have an account?{" "}
              <Typography variant="link" as="a" href="/sign-up">
                Get Started
              </Typography>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
