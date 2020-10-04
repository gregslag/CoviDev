import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const FormContainer = styled.div`
  flex: 1;
  padding: 24px 16px;
`

export const QuestionStyled = styled.p`
  font: 0.8rem Poppins;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 24px;
  font-weight: bold;
`

export const Footer = styled.div`
  background: ${props => props.theme.colors.lightGray};
  padding: 24px 16px;
  display: flex;
  justify-content: space-between;
`
