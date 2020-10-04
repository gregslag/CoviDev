import styled from 'styled-components'

export const InputBlock = styled.div`
  position: relative;
  & + div {
    margin-top: 1.4rem;
  }

  label {
    font-size: 0.8rem;
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
  }

  input {
    width: 100%;
    height: 2.6rem;
    margin-top: 0.4rem;
    border-radius: 0.4rem;
    background: white;
    outline: 0;
    padding: 0 0.8rem;
    font: 0.8rem Poppins;
    border: 1px solid ${props => props.theme.colors.text};
    transition: border 0.3s;

    &:focus {
      transition: border 0.3s;
      border: 1px solid ${props => props.theme.colors.primary};
    }
    &:focus-within::after {
      width: calc(100% - 3.2rem);
      height: 2px;
      content: '';
      background: var(--color-primary-light);
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;
    }
  }
`
