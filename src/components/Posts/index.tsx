import { useContextSelector } from 'use-context-selector'
import { UserContext } from '../../context/UserContext'
import { PostItem } from './PostItem'
import { PostsList } from './styles'

export function Posts() {
  const posts = useContextSelector(UserContext, (context) => {
    return context.posts
  })

  return (
    <PostsList>
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </PostsList>
  )
}
