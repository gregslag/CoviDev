import React from 'react'

import * as S from './styles'

type Props = {
  onClick: () => void
  doctor: any
}

const Doctor: React.FC<Props> = (props: Props) => {
  return (
    <S.Container onClick={props.onClick}>
      <S.Avatar src={props.doctor.avatar} alt={props.doctor.name} />
      <S.RightContent>
        <S.Name>{props.doctor.name}</S.Name>
        <S.Info>
          <strong>{props.doctor.desc}</strong>
        </S.Info>
        <S.Info>CRP: {props.doctor.crp}</S.Info>
        <S.Info>{props.doctor.time}</S.Info>
      </S.RightContent>
    </S.Container>
  )
}

export default Doctor
