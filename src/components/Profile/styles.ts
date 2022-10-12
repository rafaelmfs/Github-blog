import styled from 'styled-components'

export const ProfileContainer = styled.div`
  padding: 2rem;
  padding-left: 2.5rem;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 2rem;

  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    width: 9.5rem;
    height: 9.5rem;
    border-radius: 8px;
  }

  @media (max-width: 620px) {
    img {
      width: 0;
      height: 0;
    }
  }
`
export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;

  strong.name {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  @media (max-width: 450px) {
    flex-direction: column;
  }
`
export const Description = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};
`
export const UserInfo = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1rem;

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }

  @media (max-width: 450px) {
    gap: 0.5rem;
    div {
      gap: 0.5rem;
    }
  }

  @media (max-width: 380px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
