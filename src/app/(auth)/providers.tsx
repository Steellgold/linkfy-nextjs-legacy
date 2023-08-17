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
        options: { redirectTo: `${location.origin}/auth/callback` }
      })}>
        <SiGoogle size={20} />
      </Button>

      <Button className="w-full flex gap-1" onClick={() => supabase.auth.signInWithOAuth({
        provider: "github",
        options: { redirectTo: `${location.origin}/auth/callback` }
      })}>
        <SiGithub size={20} />
      </Button>

      <Button className="w-full flex gap-1" onClick={() => supabase.auth.signInWithOAuth({
        provider: "discord",
        options: { redirectTo: `${location.origin}/auth/callback` }
      })}>
        <SiDiscord size={20} />
      </Button>
    </div>
  )
}
