import React from 'react'
import { CheckboxStyled } from './styles'

type CheckboxProps = {
  children: React.ReactNode;
  onClick: () => void;
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  return <CheckboxStyled {...props}>{props.children}</CheckboxStyled>
}

export default Checkbox
