import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
`

export const Content = styled.div`
  width: 1270px;
  max-width: 1270px;
  margin: auto;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 1080px) {
    section {
      margin-bottom: 80px;
    }
  }

  @media screen and (max-width: 615px) {
    section {
      margin-bottom: 0;
    }
  }

`