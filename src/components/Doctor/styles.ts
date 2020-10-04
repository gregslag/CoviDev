import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 16px;
`

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.p`
  margin: 0;
  font-family: Poppins, Arial, Helvetica, sans-serif;
  color: #222;
`
export const Info = styled.span`
  font-family: Poppins, Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: #666;
`
