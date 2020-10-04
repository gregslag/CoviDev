import { Container } from './styles'
import React from 'react'
import Checkbox from '../Checkbox'

const symptoms = [
  { name: 'pleasure', label: 'Perda de prazer e interesse' },
  { name: 'irritability', label: 'Irritabilidade' },
  { name: 'indecision', label: 'Falta de concentração' },
  { name: 'appetite', label: 'Perda ou ganho de apetite' },
  { name: 'sleep', label: 'Dormir de mais ou de menos' },
  { name: 'agitation', label: 'Agitação ou lentidão' },
  { name: 'fatigue', label: 'Fadiga' },
  { name: 'fault', label: 'Sentimento de culpa' }
]

const SymptomsQuestions: React.FC = () => {
  const [checked, setChecked] = React.useState([])

  const onCheck = (name: string) => {
    let updatedChecked = [...checked]
    if (checked.includes(name))
      updatedChecked = updatedChecked.filter(c => c !== name)
    else updatedChecked.push(name)
    setChecked(updatedChecked)
  }


  return (
    <Container>
      {symptoms.map(({ name, label }) => (
        <Checkbox checked={checked.includes(name)} onClick={() => onCheck(name)}>{label}</Checkbox>
      ))}
    </Container>
  )
}

export default SymptomsQuestions
