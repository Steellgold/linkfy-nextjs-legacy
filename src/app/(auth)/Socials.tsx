"use client";

import { Button } from "@/lib/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { SiGithub, SiGoogle } from "@icons-pack/react-simple-icons";
import { useSearchParams } from "next/navigation";

export const Socials = () => {
  const params = useSearchParams();
  const callbackUrl = params?.get("callbackUrl") ?? "/";

  const googleMutation = useMutation(() => signIn("google", { callbackUrl }));
  const githubMutation = useMutation(() => signIn("github", { callbackUrl }));

  return (
    <div className="flex flex-col gap-2">
      <Button
        variant="outline"
        className="w-full flex gap-2"
        onClick={() => {
          googleMutation.mutate();
        }}
      >
        <SiGoogle className="w-4 h-4 fill-current text-foreground shrink-0" />
        Continue With Google
      </Button>
      <Button
        variant="outline"
        className="w-full flex gap-2"
        onClick={() => {
          githubMutation.mutate();
        }}
      >
        <SiGithub className="w-4 h-4 fill-current text-foreground shrink-0" />
        Continue With GitHub
      </Button>
    </div>
  );
};
