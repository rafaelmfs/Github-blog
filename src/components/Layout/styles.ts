import styled from 'styled-components'

export const BaseContainer = styled.div`
  width: 100%;
  height: 100vh;
  color: ${(props) => props.theme['base-text']};
  -webkit-font-smoothing: antialiased;
`
export const ContentContainer = styled.div`
  max-width: 864px;
  width: 90%;
  margin: 0 auto;
  transform: translateY(-88px);

  padding-bottom: 2rem;
`
