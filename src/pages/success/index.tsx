import React from 'react'
import Router from 'next/router'

import theme from '../../styles/theme'
import Template from '../../template'

import Button from '../../components/Button'

import * as S from './styles'

import CircularCheck from '../../assets/circularCheck.png'

const Success: React.FC = () => {
  return (
    <Template title="Sucesso!">
      <S.Container>
        <img src={CircularCheck} />
        <p>
          Contato realizado com sucesso! Aguarde o retorno do(a) profissional.
        </p>
        <Button
          onClick={() => Router.push('/')}
          background={theme.colors.primary}
        >
          Ok!
        </Button>
      </S.Container>
    </Template>
  )
}

export default Success
