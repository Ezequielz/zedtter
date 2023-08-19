import PostCard from './post-card'

export function PostsList ({ posts }) {
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
