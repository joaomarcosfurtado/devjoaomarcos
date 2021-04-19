import styled from "styled-components";

export const Container = styled.div`
  padding: 0rem 1rem 1.5rem;
  margin: 0 auto; 

  max-width: 1220px; 
  
`
export const Content = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0rem;

  max-width: 1220px;
  margin: auto;
`

export const Title = styled.div`
  padding: 3rem 1rem 1.5rem;
  margin: 0 auto; 

  max-width: 1220px; 

  h3 {
    font-size: 1.4rem;
    width: 300px;
  }
  
  @media (max-width: 1080px) {
    padding: 3rem 1rem 1.5rem;
  }

  @media (max-width: 400px) {
    padding: 3rem .8rem 1.5rem;
  }
`