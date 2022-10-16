import styled from 'styled-components'

export const PostInfoContainer = styled.div``
export const PostInfoHeader = styled.header`
  padding: 2rem;

  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  div.actions {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.25rem;
  }

  strong.post-title {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  div.post-info {
    margin-top: 0.5rem;

    display: flex;
    align-items: center;
    gap: 2rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-size: 1rem;
      font-weight: 400;
      line-height: 160%;
      color: ${(props) => props.theme['base-label']};
    }
    span {
      color: ${(props) => props.theme['base-span']};
    }
  }
`
