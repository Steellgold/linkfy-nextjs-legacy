import { SiDiscord, SiGithub, SiGoogle } from '@icons-pack/react-simple-icons'
import { Button } from '@/lib/components/ui/button'
import React from 'react'

export const Providers = () => {
  return (
    <div className="flex space-x-2">
      <Button className="w-full flex gap-1">
        <SiGoogle size={20} />
      </Button>

      <Button className="w-full flex gap-1">
        <SiGithub size={20} />
      </Button>

      <Button className="w-full flex gap-1">
        <SiDiscord size={20} />
      </Button>
    </div>
  )
}
