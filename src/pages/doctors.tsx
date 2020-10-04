import React from 'react'

import Template from '../template'
import Doctor from '../components/Doctor'

import * as S from '../styles/pages/Doctors'
import Router, { useRouter } from 'next/router'

const Doctors: React.FC = () => {
  const router = useRouter()
  const { formId } = router.query

  const doctors = [
    {
      id: '1',
      name: 'Gabrielle Zaniolo',
      desc: 'Psicóloga clínica',
      crp: '07/29829',
      time: 'seg, ter, quar - 8h às 15h',
      avatar:
        'https://zenklub.com.br/static/professionals/5ce2b351e66d032ea48b90d4/4c2058bd9661b850ef9976995a6ac68df0afa4f4-180x180.png'
    },
    {
      id: '2',
      name: 'José Arcanjo',
      desc: 'Autoconhecimento',
      crp: '11/14267',
      time: 'sex, sab, dom - 11h às 17h',
      avatar:
        'https://zenklub.com.br/static/professionals/5eaf430209c21d2aa389fb10/e974ef1d565e06c476c3e56715c1d197192d0280-180x180.png'
    },
    {
      id: '3',
      name: 'Alessandra Cassapula',
      desc: 'Psicologia positiva',
      crp: '84/145',
      time: 'seg, qua, sex - 8h às 12h',
      avatar:
        'https://zenklub.com.br/static/professionals/5e3ca75301fa633871996b8e/be896c357cd82f03be494762fa390161f8ccbff8-180x180.png'
    },
    {
      id: '4',
      name: 'Camila Ritt',
      desc: 'Procrastinação',
      crp: '07/27616',
      time: 'ter, qui, sab - 14h às 18h',
      avatar:
        'https://zenklub.com.br/static/professionals/5f6013ac0e798e2d0fcc0b76/d5cbd0d3711e804e4655debd5f733e3413407e22-180x180.png'
    }
  ]

  const onClick = () => {
    Router.push({
      pathname: '/contact',
      query: { formId }
    })
  }

  return (
    <Template title="Profissionais">
      <S.Container>
        {doctors.map(doctor => (
          <Doctor key={doctor.id} doctor={doctor} onClick={onClick} />
        ))}
      </S.Container>
    </Template>
  )
}

export default Doctors
