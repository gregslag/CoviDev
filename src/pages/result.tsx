import React from 'react'
import Head from 'next/head'
import { Main, ContainerBtn, Btn, List, LiIcon } from '../styles/pages/Result'
import Template from '../template'
import Button from '../components/Button'
import theme from '../styles/theme'
import Router, { useRouter } from 'next/router'
import Virefied from '../assets/verified.svg'

const Result: React.FC = props => {
  const router = useRouter()
  const { formId } = router.query

  const goToDoctors = () => {
    Router.push({ pathname: '/doctors', query: { formId } })
  }

  return (
    <Template title="Recomendações">
      <Main>
        <Head>
          <title>Recomendações</title>
        </Head>
        <p>
          <strong>Algumas dicas que selecionamos para você:</strong>
        </p>
        <List>
          <li>
            <LiIcon />
            Procure um profissional
          </li>
          <li>
            <LiIcon />
            Elimine os meios letais
          </li>
          <li>
            <LiIcon />
            Não deixe essa pessoa sozinha
          </li>
        </List>
        <ContainerBtn>
          {props.cvv ? <Button background="red">CVV</Button> : ''}
          <Button
            onClick={() => goToDoctors()}
            background={theme.colors.primary}
          >
            Piscólogos
          </Button>
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
