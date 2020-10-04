import styled from 'styled-components'
import Verified from '../../assets/check.svg'

export const Main = styled.div`
  background: #fff;
  padding: 10px;
  margin: 10px;
  color: black;
`

export const List = styled.ul`
  margin: 30px 0;
  width: 100%;
  list-style: none;


  li{
    margin: 5px;
    display: flex;
    align-items: center;
    font-size: 16px;
  }
`

export const LiIcon = styled(Verified)`
  width: 12px;
  height: 12px;
  margin-right: 8px;
`

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: space-between;

  & > :not(:last-child) {
    margin-right: 20px;
  }
`

export const Btn = styled.button`
  width: 100%;
`
