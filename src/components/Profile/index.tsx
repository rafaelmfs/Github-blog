import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { ActionLink } from '../ActionLink'
import { Building, Github, UpRight, UserGroup } from '../Icons'
import {
  Description,
  ProfileContainer,
  ProfileHeader,
  UserInfo,
} from './styles'

export function Profile() {
  const { user } = useContext(UserContext)

  return (
    <ProfileContainer>
      {user.name && (
        <>
          <img src={user.avatar_url} alt="" />
          <div>
            <ProfileHeader>
              <strong className="name">{user.name}</strong>

              <ActionLink.Root to={user.html_url} blank>
                <ActionLink.Text text="Github" />
                <ActionLink.Icon>
                  <UpRight />
                </ActionLink.Icon>
              </ActionLink.Root>
            </ProfileHeader>
            <Description>
              {user.bio.length > 155
                ? `${user.bio.slice(0, 154)}...`
                : user.bio}
            </Description>
            <UserInfo>
              <div>
                <Github />
                <span>{user.login}</span>
              </div>
              {user.company && (
                <div>
                  <Building />
                  <span>{user.company}</span>
                </div>
              )}
              <div>
                <UserGroup />
                <span>{user.followers} seguidores</span>
              </div>
            </UserInfo>
          </div>
        </>
      )}
    </ProfileContainer>
  )
}
