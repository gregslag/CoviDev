import React from 'react'
import Input from '../Input'

type Props = {
  onChange: (field: string, value: string) => void;
}

const PersonalQuestions: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Input onChange={(e) => props.onChange("name", e.target.value)} label="Nome" name="name" />
      <Input onChange={(e) => props.onChange("email", e.target.value)} label="Email" name="email" />
      <Input onChange={(e) => props.onChange("phone", e.target.value)} label="Telefone" name="phone" />
    </div>
  )
}

export default PersonalQuestions
