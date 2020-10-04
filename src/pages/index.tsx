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
          Seja bem-vindo(a).
          <br />
          <strong>Para quem seria o atendimento?</strong>
        </p>
        <CardWrapper>
          <Link href="/questions">
            <Card>
              <p>Para mim</p>
              <Me />
            </Card>
          </Link>
          <Link href="/questions">
            <Card background="goldDrop">
              <p>Amigo(a)</p>
              <Someone />
            </Card>
          </Link>
        </CardWrapper>
        <button>Sou Profissional e quero ajudar</button>
        <Link href="/blog">Blog</Link>
        <a href="https://www.cvv.org.br/" target="_blank">
          Preciso conversar com alguém
        </a>

        {/* <Button
            onClick={() => goToDoctors()}
            background={theme.colors.primary}
            style={{
              background: 'transparent',
              border: `1px solid ${theme.colors.primary}`,
              color: theme.colors.primary,
              width: '100%'
            }}
          >
            Conhecer profissionais
          </Button> */}
      </Content>
    </Container>
  )
}

export default Home
