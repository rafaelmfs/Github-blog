import styled from 'styled-components'

export const SearchFormContainer = styled.form`
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

  div.input-area {
    width: 100%;
    margin: 0;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    position: relative;
  }

  div.input-area:focus-within {
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  div.input-area input {
    width: 96%;
    padding: 0;
    background: transparent;
    border: 0;
    margin: 0;
    color: ${(props) => props.theme['base-text']};
  }

  div.input-area input:focus {
    box-shadow: none;
  }

  div.input-area button.button-x-off {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme['base-text']};
    display: none;
  }

  div.input-area button.button-x-on {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme['base-text']};
    display: block;
    transition: 200ms;
  }

  div.input-area button.button-x-on:hover {
    cursor: pointer;
    color: ${(props) => props.theme['base-title']};
  }

  > input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  > input:focus {
    border: ${(props) => props.theme.blue};
  }
`
