import styled, { css } from 'styled-components'

const checked = css`
  border-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
`

type CheckboxStyledProps = {
  checked: boolean
}

export const CheckboxStyled = styled.div<CheckboxStyledProps>`
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.gray};
  padding: 12px;
  transition: border 0.3s;
  transition: color 0.3s;
  font: 0.8rem Poppins;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${props => (props.checked ? checked : null)}

  &:focus {
    transition: border 0.3s;
  }
`
