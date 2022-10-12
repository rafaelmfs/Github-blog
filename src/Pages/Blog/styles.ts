import styled from 'styled-components'

export const BlogContainer = styled.div``

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 3rem;

  > div {
    width: 100%;
    margin-top: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  > div span {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
  > div h2 {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 160%;

    color: ${(props) => props.theme['base-subtitle']};
  }

  > input {
    width: 100%;

    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
  }

  > input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  > input:focus {
    border: ${(props) => props.theme.blue};
  }
`
