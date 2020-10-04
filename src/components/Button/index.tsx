import React from 'react'
import { ButtonStyled } from './styles'

type Props = {
  background: string;
  onClick: () => void;
}

const Button: React.FC<Props> = (props: Props) => {
  return <ButtonStyled {...props} />
}

export default Button
