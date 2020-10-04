import React from 'react'
import Checkbox from '../Checkbox'
import {CheckboxContainer} from './styles'

const questions = [
  { name: 'goodbye', label: 'Se despedir' },
  { name: 'sell', label: 'Vender coisas' },
  { name: 'humor', label: 'Melhora brusca de humor' },
  { name: 'interest', label: 'Falta de interesse pelo bem-estar' },
  { name: 'productivity', label: 'Queda de produtividade' },
  { name: 'peace', label: 'Fazer as pazes com as pessoas' },
]

const SuicideQuestions: React.FC = () => {
  const [checked, setChecked] = React.useState([])

  const onCheck = (name: string) => {
    let updatedChecked = [...checked]
    if (checked.includes(name))
      updatedChecked = updatedChecked.filter(c => c !== name)
    else updatedChecked.push(name)
    setChecked(updatedChecked)
  }

  return (
    <div>
      {questions.map(({ name, label }) => (
        <CheckboxContainer checked={checked.includes(name)} onClick={() => onCheck(name)}>{label}</CheckboxContainer>
      ))}
    </div>
  )
}


export default SuicideQuestions;
