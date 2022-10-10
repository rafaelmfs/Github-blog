import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { BaseContainer, ContentContainer } from './styles'

export function Baselayout() {
  return (
    <BaseContainer>
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </BaseContainer>
  )
}
