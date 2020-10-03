import React from 'react'
import Head from 'next/head'

import SafiraLogo from '../assets/safira.svg'
import Me from '../assets/me.svg'
import Someone from '../assets/someone.svg'

import { Container, CardWrapper, Card, Title } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <SafiraLogo />
      <p>
        Seja bem-vindo.
        <br />
        <strong>O que deseja fazer?</strong>
      </p>
      <CardWrapper>
        <Card>
          <p>Para mim</p>
          <Me />
        </Card>
        <Card background="goldDrop">
          <p>Amigo(a)</p>
          <Someone />
        </Card>
      </CardWrapper>
      <button>Sou Profissional e quero ajudar</button>
      <a>Assuntos relacionados</a>
    </Container>
  )
}

export default Home
