import React from 'react'
import Head from 'next/head'
import { Main, ContainerBtn, Btn, List } from '../styles/pages/Result'
import Template from '../template'

const Result: React.FC = (props) => {
  // const props = {
  //   recomendations: ["DICA 1", "DICA 2","DICA 3"],
  //   cvv: true
  // }

  return (
    <Template title="Recomendações">
      <Main>
        <Head>
          <title>Recomendações</title>
        </Head>
        <p>Algumas dicas que selecionamos para você:</p>
        <List>
          {props.recomendations.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </List>
        <ContainerBtn>
          {props.cvv ? <Btn>btn1</Btn> : ''}
          <Btn>btn2</Btn>
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
