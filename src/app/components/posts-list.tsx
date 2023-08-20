import PostCard from './post-card'
import { type Post } from '@/app/types/posts'
export function PostsList ({ posts }: { posts: Post[] | null }) {
  return (
        <>
              {
        posts?.map(post => {
          const { id, user, content } = post
          const { name: userFullName, avatar_url: avatarUrl, user_name: userName } = user
          return (
            <PostCard
              key={id}
              userName={userName}
              avatarUrl={avatarUrl}
              userFullName={userFullName}
              content={content}
              />
          )
        })

      }
        </>
  )
}
