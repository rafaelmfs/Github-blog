import styled from 'styled-components'

export const BaseContainer = styled.div`
  background-color: ${(props) => props.theme['base-background']};
  color: ${(props) => props.theme['base-text']};
  -webkit-font-smoothing: antialiased;
`
export const ContentContainer = styled.div`
  width: 864px;
  margin: 0 auto;
  transform: translateY(-88px);
`
