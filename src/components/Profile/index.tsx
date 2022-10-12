import { ActionLink } from '../ActionLink'
import { Building, Github, UpRight, UserGroup } from '../Icons'
import {
  Description,
  ProfileContainer,
  ProfileHeader,
  UserInfo,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/rafaelmfs.png" alt="" />
      <div>
        <ProfileHeader>
          <strong className="name">Cameron Williamson</strong>

          <ActionLink.Root to="#" blank>
            <ActionLink.Text text="Github" />
            <ActionLink.Icon>
              <UpRight />
            </ActionLink.Icon>
          </ActionLink.Root>
        </ProfileHeader>
        <Description>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Description>
        <UserInfo>
          <div>
            <Github />
            <span>UserName</span>
          </div>
          <div>
            <Building />
            <span>Company</span>
          </div>
          <div>
            <UserGroup />
            <span>Seguidores</span>
          </div>
        </UserInfo>
      </div>
    </ProfileContainer>
  )
}
