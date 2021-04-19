import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem .4rem 1.5rem;
  margin: 0 auto; 

  max-width: 1220px; 

`

export const Main = styled.main`

  padding-top: 100px; 
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    padding: 3rem 1rem 1.5rem;
    margin: 0 auto; 
    max-width: 1220px; 

    height: 1220px;
  }

  @media (max-width: 840px) {
    padding-top: 50px;
    
    img {
      height: 900px;
    }
  }
  
  @media (max-width: 630px) {
    padding-top: 50px;
    
    img {
      height: 500px;
      padding: 0;
    }
  }
  
`

export const DivButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 15px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    padding: 15px 30px;
    background-color: #6736DE;
    color: #FFF;
    font-weight: bold;
    transition: filter 0.2s;
  }

  a:hover {
    filter: brightness(0.8);
  }
`