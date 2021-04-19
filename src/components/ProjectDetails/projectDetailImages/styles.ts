import styled from "styled-components";

export const Images = styled.div`
  img {
    padding-top: 50px;
    width: 1155px;
    margin: 0 auto; 

    height: 800px;
  }
  
  &:last-child {
    padding-bottom: 50px;
  }


  @media (max-width: 1100px) {
    img {
      padding-top: 50px;
      height: 600px;
      width: 800px;
    }
  }

  @media (max-width: 840px) {
    
    
    img {
      height: 600px;
      width: 650px;
    }
  }
  
  @media (max-width: 650px) {
    padding-top: 50px;
    
    img {
      height: 500px;
      width: 400px;
      padding: 0;
    }
  }

  @media (max-width: 400px) {
    padding-top: 50px;
    
    img {
      height: 300px;
      width: 300px;
      padding: 0;
    }
  }
`