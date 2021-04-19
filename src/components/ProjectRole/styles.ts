import styled from "styled-components";

export const Container = styled.div`
  padding-top: 10rem; 

  @media (max-width: 580px) {
    padding-top: 5rem;
  }
`
export const Content = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
 
  h3 {
    padding-bottom: 10px;
    width: 300px;
  }

`