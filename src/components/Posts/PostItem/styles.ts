import styled from 'styled-components'

export const PostCard = styled.div`
  max-width: 26rem;
  max-height: 16.25rem;
  overflow: hidden;

  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border: 2px solid transparent;
  border-radius: 10px;

  p.post-description {
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};

    margin-top: 1.25rem;
  }

  :hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    cursor: pointer;
  }
`

export const PostHeader = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  strong.post-title {
    width: 80%;
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 160%;
  }

  span.post-date {
    text-align: end;
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 160%;
  }
`
