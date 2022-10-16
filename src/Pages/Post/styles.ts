import styled from 'styled-components'

export const PostContainer = styled.div``
export const PostContent = styled.div`
  padding: 2.5rem 2rem;

  img {
    width: 100%;
  }

  a,
  a:link,
  a:visited {
    text-decoration: none;
    line-height: 160%;
    color: ${(props) => props.theme.blue};
  }

  a:hover,
  a:visited:hover {
    text-decoration: underline;
  }
`
