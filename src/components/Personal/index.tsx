import React from 'react'
import Input from '../Input'

const PersonalQuestions: React.FC = () => {
  return (
    <div>
      <Input label="Nome" name="name" />
      <Input label="Email" name="email" />
      <Input label="Telefone" name="phone" />
    </div>
  )
}

export default PersonalQuestions
