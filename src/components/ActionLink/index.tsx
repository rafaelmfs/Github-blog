import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ActionLinkContainer } from './styles'

interface ActionLinkRootProps {
  children: ReactNode
  to: string
  blank?: boolean
}
function ActionLinkRoot({ children, blank, to }: ActionLinkRootProps) {
  return (
    <ActionLinkContainer>
      {blank ? (
        <a
          href={to}
          target="_blank"
          rel="noreferrer"
          className="actionlink-content"
        >
          {children}
        </a>
      ) : (
        <Link to={to} className="actionlink-content">
          {' '}
          {children}{' '}
        </Link>
      )}
    </ActionLinkContainer>
  )
}

interface ActionLinkTextProps {
  text: string
}
function ActionLinkText({ text }: ActionLinkTextProps) {
  return <span>{text}</span>
}

interface ActionLinkIconProps {
  children: ReactNode
}
function ActionLinkIcon({ children }: ActionLinkIconProps) {
  return <>{children}</>
}

export const ActionLink = {
  Root: ActionLinkRoot,
  Text: ActionLinkText,
  Icon: ActionLinkIcon,
}
