import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 16px;
  /* height: 100%; */
  flex: 1;
`

export const Card = styled.div`
  display: flex;
  width: 100%;
  height: 110px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 24px;

  :hover {
    opacity: 0.8;
    transition: opacity 0.3s;
  }

  img {
    border-radius: 10px;
    height: 86px;
    width: 85px;
    margin-right: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;

    h3 {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 24px;
      /* or 171% */

      display: flex;
      align-items: center;

      color: #000000;
    }

    p {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 20px;

      color: #bfbfbf;
    }

    a {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 11px;
      line-height: 24px;
      text-decoration-line: underline;

      color: #017cba;
      text-align: right;
    }
  }
`
