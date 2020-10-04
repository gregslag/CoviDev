import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import SafiraLogo from '../assets/safira.svg'
import Me from '../assets/me.svg'
import Someone from '../assets/someone.svg'

import { Container, Content, CardWrapper, Card } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
      <Content>
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
        <Link href="/blog">Assuntos relacionados</Link>
      </Content>
    </Container>
  )
}

export default Home
