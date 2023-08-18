import { Typography } from "@/lib/components/ui/Typography";

export const metadata = {
  title: "Sign In - Cube",
  description: "Page description",
};

export default function SignIn() {
  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-16 pb-12 md:pt-20 md:pb-20">
        {/* Page header */}
        <div className="max-w-3xl mx-auto text-center pb-12 flex flex-col gap-4">
          <Typography variant="h2" className="w-fit m-auto">
            Check your email
          </Typography>
          <Typography variant="lead" className="w-fit m-auto">
            A sign in link has been sent to your email address.
          </Typography>
        </div>
      </div>
    </div>
  );
}
