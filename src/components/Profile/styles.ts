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

  a.github {
    align-self: flex-start;

    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    gap: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 160%;
    color: ${(props) => props.theme.blue};

    position: relative;
  }

  a.github::after {
    content: '';
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.blue};
    position: absolute;
    bottom: 0;

    transition: 400ms;
  }

  a.github:hover::after {
    width: 100%;
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

  div span {
  }
`