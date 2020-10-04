import React from 'react'

import * as S from './styles'

const Doctor: React.FC = () => {
  return (
    <S.Container onClick={() => alert('Agendar')}>
      <S.Avatar
        src="https://zenklub.com.br/static/professionals/5ce2b351e66d032ea48b90d4/4c2058bd9661b850ef9976995a6ac68df0afa4f4-180x180.png"
        alt="Gabrielle Zaniolo"
      />
      <S.RightContent>
        <S.Name>Gabrielle Zaniolo</S.Name>
        <S.Info>Psicóloga clínica</S.Info>
        <S.Info>CRP 07/29829</S.Info>
        <S.Info>seg, ter, quar - 8h às 15h</S.Info>
      </S.RightContent>
    </S.Container>
  )
}

export default Doctor
