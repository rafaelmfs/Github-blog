import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { ptBR } from 'date-fns/locale'
import { Link } from 'react-router-dom'
import { Posts } from '../../../interfaces/Post'
import { PostCard, PostHeader } from './styles'

export function PostItem(props: Posts) {
  const createdAt = formatDistanceToNow(new Date(props.created_at), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PostCard>
      <Link to={`/post/${props.id}`} state={props}>
        <PostHeader>
          <strong className="post-title">{props.title}</strong>
          <span className="post-date">{createdAt}</span>
        </PostHeader>
        <p className="post-description">{props.body}</p>
      </Link>
    </PostCard>
  )
}
