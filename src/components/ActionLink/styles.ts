import styled from 'styled-components'

export const ActionLinkContainer = styled.div`
  align-self: flex-start;

  position: relative;

  .actionlink-content {
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
  }

  ::after {
    content: '';
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.blue};
    position: absolute;
    bottom: 0;

    transition: 400ms;
  }

  :hover::after {
    width: 100%;
  }
`
