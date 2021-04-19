import styled from "styled-components";

export const Title = styled.div`
  padding: 10rem 1rem 1.5rem;
  margin: 0 auto; 

  max-width: 1220px; 

  h2 {
    font-size: 1.4rem;
    width: 300px;
  }
  
  @media (max-width: 1080px) {
    padding: 1rem 1rem 1.5rem;
  }

  @media (max-width: 400px) {
    padding: 0 .8rem 1.5rem;
  }
`

export const Container = styled.section`
  display: flex;
`


export const Content = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  width: 1220px;
  max-width: 1220px;
  margin: auto;
`
