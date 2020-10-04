import React from 'react'
import Head from 'next/head'
import { Main, ContainerBtn, Btn, List } from '../styles/pages/Result'
import Template from '../template'
import Button from '../components/Button'
import theme from '../styles/theme'
import Router from 'next/router'

const Result: React.FC = props => {

  const goToDoctors = () => {
    Router.push('/doctors')
  }

  return (
    <Template title="Recomendações">
      <Main>
        <Head>
          <title>Recomendações</title>
        </Head>
        <p>Algumas dicas que selecionamos para você:</p>
        <List>
          <li>Procure um profissional</li>
          <li>Elimine os meios letais</li>
          <li>Não deixe essa pessoa sozinha</li>
        </List>
        <ContainerBtn>
          {props.cvv ? <Button background="red">CVV</Button> : ''}
          <Button onClick={() => goToDoctors()} background={theme.colors.primary}>Piscólogos</Button>
        </ContainerBtn>
      </Main>
    </Template>
  )
}

export default Result

Result.defaultProps = {
  recomendations: [],
  cvv: true
}
