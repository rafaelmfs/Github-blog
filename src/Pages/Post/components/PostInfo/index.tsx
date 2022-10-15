import { PostInfoContainer, PostInfoHeader } from './styles'
import {
  ChevronLeft,
  UpRight,
  Github,
  Calendar,
  Comment,
} from '../../../../components/Icons'
import { ActionLink } from '../../../../components/ActionLink'
import { useLocation } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostDetails {
  title: string
  user: {
    login: string
  }
  created_at: string
  comments: number
  html_url: string
}

export function PostInfo() {
  const post = useLocation()
  const postDetails: PostDetails = post.state

  const createdAt = formatDistanceToNow(new Date(postDetails.created_at), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <div className="actions">
          <ActionLink.Root to="/">
            <ActionLink.Icon>
              <ChevronLeft />
            </ActionLink.Icon>
            <ActionLink.Text text="Voltar" />
          </ActionLink.Root>

          <ActionLink.Root to={postDetails.html_url} blank>
            <ActionLink.Text text="Ver no Github" />
            <ActionLink.Icon>
              <UpRight />
            </ActionLink.Icon>
          </ActionLink.Root>
        </div>
        <strong className="post-title">{postDetails.title}</strong>
        <div className="post-info">
          <div>
            <Github />
            <span>{postDetails.user.login}</span>
          </div>
          <div>
            <Calendar />
            <span>{createdAt}</span>
          </div>
          <div>
            <Comment />
            <span>
              {postDetails.comments}{' '}
              {postDetails.comments > 1 ? 'comentários' : 'comentário'}
            </span>
          </div>
        </div>
      </PostInfoHeader>
    </PostInfoContainer>
  )
}
