import { Typography } from "@/lib/components/ui/typography";
import Link from "next/link";
import { MagicLinkForm } from "../sign-in/MagicLinkForm";

export const metadata = {
  title: "Reset the password",
  description: "Fill the form to reset your password with a magic link.",
};

export default function ResetPassword() {
  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-16 pb-12 md:pt-20 md:pb-20">
        {/* Page header */}
        <div className="max-w-3xl mx-auto text-center pb-12">
          <Typography variant="h2" className="w-fit m-auto">
            Change your password
          </Typography>
        </div>
        {/* Form */}
        <div className="max-w-sm mx-auto flex flex-col gap-6">
          <MagicLinkForm
            title="Reset password via Magic Link"
            redirectUrl="reset-password"
          />
          
          <Typography variant="small">
            Don't have an account ?{" "}
            <Typography variant="link" as={Link} href="/sign-up">
              Get Started
            </Typography>
          </Typography>
        </div>
      </div>
    </div>
  );
}
