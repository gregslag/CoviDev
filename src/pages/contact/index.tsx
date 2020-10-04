import React, { useCallback, useState } from 'react'

import Template from '../../template'

import PersonalQuestions from '../../components/Personal'
import Button from '../../components/Button'

import * as S from './styles'
import theme from '../../styles/theme'
import Router from 'next/router'

const Contact: React.FC = () => {
  const onChange = useCallback(() => {}, [])

  const finishContact = useCallback(() => {
    onChange()
    Router.push('/success')
  }, [])

  return (
    <Template title="Contato">
      <S.Container>
        <p>Contatar Dra. Gabrielle Zaniolo</p>
        <PersonalQuestions />
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
