import React from 'react'

import Template from '../../template'
import Doctor from '../../components/Doctor'

import * as S from './styles'

const Doctors: React.FC = () => {
  return (
    <Template title="Profissionais">
      <S.Container>
        <Doctor />
        <Doctor />
        <Doctor />
        <Doctor />
        <Doctor />
      </S.Container>
    </Template>
  )
}

export default Doctors
