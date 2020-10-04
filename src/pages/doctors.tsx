import React from 'react'

import Template from '../template'
import Doctor from '../components/Doctor'

import * as S from '../styles/pages/Doctors'
import Router, { useRouter } from 'next/router'

const Doctors: React.FC = () => {
  const router = useRouter()
  const { formId } = router.query

  const onClick = () => {
    Router.push({
      pathname: '/contact',
      query: { formId }
    })
  }

  return (
    <Template title="Profissionais">
      <S.Container>
        <Doctor onClick={onClick} />
        <Doctor onClick={onClick} />
        <Doctor onClick={onClick} />
        <Doctor onClick={onClick} />
        <Doctor onClick={onClick} />
      </S.Container>
    </Template>
  )
}

export default Doctors
