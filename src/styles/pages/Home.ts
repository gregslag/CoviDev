import styled from 'styled-components'
import { colors } from '../theme'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 0px;
  width: max-content;

  & > * {
    color: ${props => props.theme.colors.white};
  }

  & > button {
    border: 1px solid ${props => props.theme.colors.white};
    border-radius: 16px;
    padding: 10px;
    background: transparent;
    font-family: 'Montserrat', sans-serif;
  }

  & > a {
    text-decoration: underline;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }

  & > p {
    font-size: 18px;
    line-height: 30px;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    line-height: 40px;
    & strong {
      font-weight: 600;
    }
  }

  & > :not(:last-child) {
    margin-bottom: 30px;
  }
`

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 20px;
  }
`

export const Card = styled.div`
  border-radius: 8px;
  width: 140px;
  height: 140px;
  background: ${({ background }) => colors[background] || colors.malachite};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  & > p {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
`
