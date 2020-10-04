import React from 'react'
import Checkbox from '../Checkbox'
import { CheckboxContainer } from './styles'

const questions = [
  { name: 'goodbye', label: 'Se despedir' },
  { name: 'sell', label: 'Vender coisas' },
  { name: 'humor', label: 'Melhora brusca de humor' },
  { name: 'interest', label: 'Falta de interesse pelo bem-estar' },
  { name: 'productivity', label: 'Queda de produtividade' },
  { name: 'peace', label: 'Fazer as pazes com as pessoas' }
]

type Props = {
  checked: string[]
  onCheck: (name: string) => void
}

const SuicideQuestions: React.FC<Props> = (props: Props) => {
  return (
    <div>
      {questions.map(({ name, label }) => (
        <CheckboxContainer
          checked={props.checked.includes(name)}
          onClick={() => props.onCheck(name)}
        >
          {label}
        </CheckboxContainer>
      ))}
    </div>
  )
}

export default SuicideQuestions
