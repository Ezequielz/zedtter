import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { AuthButtonServer } from './components/auth-button-server'
import { PostsList } from './components/posts-list'
import { type Database } from './types/database'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }
  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(name, avatar_url, user_name)')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

    <section className='max-w-[800px] mx-auto border-r border-l border-white/20 min-h-screen'>
      <AuthButtonServer />
      <PostsList posts={posts} />
    </section>

    </main>
  )
}
