import { PostCard, PostHeader } from './styles'

export function PostItem() {
  return (
    <PostCard>
      <PostHeader>
        <strong className="post-title">
          JavaScript data types and data structures
        </strong>
        <span className="post-date">Há creca de 1 semana</span>
      </PostHeader>
      <p className="post-description">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in Programming language
      </p>
    </PostCard>
  )
}
