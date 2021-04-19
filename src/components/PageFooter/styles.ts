import styled from "styled-components";

export const Container = styled.footer `
  
  padding: 3rem 1rem 1.5rem;
  margin: 0 auto; 

  max-width: 1220px; 
`

export const Content = styled.div `
  margin: 0 auto; 
  max-width: 1220px; 
  display: flex;
  justify-content: space-between; 
`

export const LeftSide = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 20px;
    padding-right: 10px;
  }
`

export const RightSide = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: #999999;
    font-weight: 300;
    padding-right: 50px;
  }

  a:last-child {
    padding-right: 0;
  }
  
  @media (max-width: 530px) {
    flex-direction: column;

    a {
      padding-right: 0;
    }
  }

`