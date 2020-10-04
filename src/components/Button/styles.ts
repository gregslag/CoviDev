import styled from 'styled-components'

type ButtonProps = {
  background: string
}

export const ButtonStyled = styled.button<ButtonProps>`
  padding: 0.8rem;
  background: ${props => props.background};
  border: none;
  border-radius: 0.4rem;
  font: 0.8rem Poppins;
  transition: opacity 0.5s;
  color: white;
  width: 124px;

  &:active {
    opacity: 0.5;
  }
`
