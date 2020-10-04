import styled from 'styled-components'

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
  }
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
