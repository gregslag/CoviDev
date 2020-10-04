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

type Props = {
  checked: string[]
  onCheck: (name: string) => void
}

const SymptomsQuestions: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      {symptoms.map(({ name, label }) => (
        <Checkbox
          checked={props.checked.includes(name)}
          onClick={() => props.onCheck(name)}
        >
          {label}
        </Checkbox>
      ))}
    </Container>
  )
}

export default SymptomsQuestions
