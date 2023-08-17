import { SiDiscord, SiGithub, SiGoogle } from "@icons-pack/react-simple-icons"
import { Button } from "@/lib/components/ui/button"
import React from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export const Providers = () => {
  const supabase = createClientComponentClient();

  return (
    <div className="flex space-x-2">
      <Button className="w-full flex gap-1" onClick={() => supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: process.env.NEXT_PUBLIC_REDIRECT_TO }
      })}>
        <SiGoogle size={20} />
      </Button>

      <Button className="w-full flex gap-1" onClick={() => supabase.auth.signInWithOAuth({
        provider: "github",
        options: { redirectTo: process.env.NEXT_PUBLIC_REDIRECT_TO }
      })}>
        <SiGithub size={20} />
      </Button>

      <Button className="w-full flex gap-1" onClick={() => supabase.auth.signInWithOAuth({
        provider: "discord",
        options: { redirectTo: process.env.NEXT_PUBLIC_REDIRECT_TO }
      })}>
        <SiDiscord size={20} />
      </Button>
    </div>
  )
}
