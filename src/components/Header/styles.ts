import styled from "styled-components";

export const Container = styled.header`
  height: 400px; 
  width: 100%; 
  display: flex;
  align-items: center;
  justify-content: left;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;

  padding: 0 1rem;
 
  h1 {
    font-size: 1.4rem;
    margin-top: 15px;
    margin-bottom: 8px;
  }
  
  img {
    width: 64px;
    border-radius: 50%;
  }

  p {
    margin-bottom: 15px;
  }

  a {
    font-weight: 400;
    font-size: 1rem;
    color: #000;
  }

  @media (max-width: 530px) {
    margin-top: 50px;
  }
`