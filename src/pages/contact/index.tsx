import React, { useCallback, useState } from 'react'

import Template from '../../template'

import PersonalQuestions from '../../components/Personal'
import Button from '../../components/Button'

import * as S from './styles'
import theme from '../../styles/theme'
import Router, { useRouter } from 'next/router'
import FormsService from '../../services/forms'

const Contact: React.FC = () => {
  const [formValues, setFormValues] = React.useState({})

  const router = useRouter()
  const { formId, doctorName } = router.query

  const onChange = (field: string, value: string): void => {
    setFormValues({ ...formValues, [field]: value })
  }

  const finishContact = async () => {
    await FormsService.updateForm(formId as string, formValues)
    await FormsService.finishForm(formId as string, doctorName as string)
    Router.push('/success')
  }

  return (
    <Template title="Contato">
      <S.Container>
        <p>Contatar {doctorName}</p>
        <PersonalQuestions onChange={onChange} />
        <S.Actions>
          <Button onClick={finishContact} background={theme.colors.primary}>
            Contatar
          </Button>
        </S.Actions>
      </S.Container>
    </Template>
  )
}

export default Contact
