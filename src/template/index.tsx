import React from 'react'
import Link from 'next/link'

import * as S from './styles'

import ArrowLeft from '../assets/arrow-left.png'

type Props = {
  title: string
}

const Template: React.FC<Props> = ({ title, children }) => {
  return (
    <S.Container>
      <S.Header>
        <S.Navigation>
          <Link href="/">
            <img src={ArrowLeft} width="18" height="12" />
          </Link>
          <span>Safira</span>
        </S.Navigation>
        <S.Title>{title}</S.Title>
      </S.Header>
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}

export default Template
