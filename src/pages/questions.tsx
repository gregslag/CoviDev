import React from 'react'
import Button from '../components/Button'
import theme from '../styles/theme'
import Template from '../template'
import PersonalQuestions from '../components/Personal'
import SymptomsQuestions from '../components/Symptoms'
import SuicideQuestions from '../components/Suicide'

import { Footer, Container, FormContainer, QuestionStyled } from '../styles/pages/Questions'

const Questions: React.FC = () => {
  const [step, setStep] = React.useState(1)

  let Form = SymptomsQuestions
  if (step === 1) Form = PersonalQuestions
  else if (step === 2) Form = SymptomsQuestions
  else if (step === 3) Form = SuicideQuestions

  return (
    <Template title="Questões" step={step}>
      <Container>
        <FormContainer>
          <QuestionStyled>Você percebeu alguns destes sintomas no seu amigo nas últimas duas semanas?</QuestionStyled>
          <Form />
        </FormContainer>
        <Footer>
          <Button
            onClick={() => setStep(step - 1)}
            background={theme.colors.primary}
          >
            Voltar
          </Button>
          <Button
            onClick={() => setStep(step + 1)}
            background={theme.colors.buttonPrimary}
          >
            Avançar
          </Button>
        </Footer>
      </Container>
    </Template>
  )
}

export default Questions
