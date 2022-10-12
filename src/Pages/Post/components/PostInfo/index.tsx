import { PostInfoContainer, PostInfoHeader } from './styles'
import {
  ChevronLeft,
  UpRight,
  Github,
  Calendar,
  Comment,
} from '../../../../components/Icons'
import { ActionLink } from '../../../../components/ActionLink'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <div className="actions">
          <ActionLink.Root to="#">
            <ActionLink.Icon>
              <ChevronLeft />
            </ActionLink.Icon>
            <ActionLink.Text text="Voltar" />
          </ActionLink.Root>

          <ActionLink.Root to="#" blank>
            <ActionLink.Text text="Ver no Github" />
            <ActionLink.Icon>
              <UpRight />
            </ActionLink.Icon>
          </ActionLink.Root>
        </div>
        <strong className="post-title">
          JavaScript data types and data structures
        </strong>
        <div className="post-info">
          <div>
            <Github />
            <span>cameronwll</span>
          </div>
          <div>
            <Calendar />
            <span>Há 1 dia</span>
          </div>
          <div>
            <Comment />
            <span>5 comentários</span>
          </div>
        </div>
      </PostInfoHeader>
      <div className="post-content"></div>
    </PostInfoContainer>
  )
}
