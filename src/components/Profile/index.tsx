import {
  BuildingIcon,
  GithubIcon,
  UpRightFromSquareIcon,
  UserGroupIcon,
} from '../Icons'
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
          <a href="" className="github">
            Github
            <UpRightFromSquareIcon />
          </a>
        </ProfileHeader>
        <Description>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Description>
        <UserInfo>
          <div>
            <GithubIcon />
            <span>UserName</span>
          </div>
          <div>
            <BuildingIcon />
            <span>Company</span>
          </div>
          <div>
            <UserGroupIcon />
            <span>Seguidores</span>
          </div>
        </UserInfo>
      </div>
    </ProfileContainer>
  )
}
