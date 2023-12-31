'use client'
import { useRouter } from 'next/navigation'
import { type Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { GitHubIcon } from './icons'
import { Button } from '@nextui-org/react'

export function AuthButton ({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'https://zedtter.vercel.app/auth/callback'
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
        <header>
            {
                session === null
                  ? (
                    <button onClick={handleSignIn}
                        type="button"
                        className="text-white bg-[#24292F] hover:bg-[#24292F]/30 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-50 mr-2 mb-2">
                        <GitHubIcon />
                        Iniciar sesion con Github
                    </button>
                    )
                  : (
                    <Button onClick={handleSignOut}>
                        Cerrar sesion
                    </Button>

                    )
            }

        </header>
  )
}
