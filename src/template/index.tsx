import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import * as S from './styles'

import ArrowLeft from '../assets/arrow-left.png'

type Props = {
  title: string
  step?: number
}

const Template: React.FC<Props> = ({ title, step, children }) => {
  return (
    <S.Container>
      <S.Header>
        <S.Navigation>
          <Link href="/">
            <img src={ArrowLeft} width="18" height="12" />
          </Link>
          <span>Safira</span>
        </S.Navigation>
        <S.TitleContainer>
          <S.Title>{title}</S.Title>
          {step && <span>{step} de 4</span>}
        </S.TitleContainer>
      </S.Header>
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}

export default Template
