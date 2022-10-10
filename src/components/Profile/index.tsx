import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Description,
  InfoContainer,
  InfoHeader,
  ProfileContainer,
  UserInfo,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/rafaelmfs.png" alt="" />
      <InfoContainer>
        <InfoHeader>
          <strong className="name"></strong>
          <a href="" className="github"></a>
        </InfoHeader>
        <Description></Description>
        <UserInfo>
          <div>
            <FontAwesomeIcon icon="fa-brands fa-github" />
            <span>UserName</span>
          </div>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-building" />
            <span>Company</span>
          </div>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-user-group" />
            <span>Seguidores</span>
          </div>
        </UserInfo>
      </InfoContainer>
    </ProfileContainer>
  )
}
