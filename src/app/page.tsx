import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { AuthButtonServer } from './components/auth-button-server'
import { PostsList } from './components/posts-list'
import { type Database } from './types/database'
import { ComposePost } from './components/compose-post'
import { type Post } from './types/posts'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }
  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(name, avatar_url, user_name)')
    .order('created_at', { ascending: false })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

    <section className='max-w-[600px] w-full mx-auto border-r border-l border-white/20 min-h-screen'>
      <ComposePost userAvatarUrl={session.user?.user_metadata?.avatar_url} />
      <PostsList posts={posts as Post[]} />
    </section>
      <AuthButtonServer />

    </main>
  )
}
