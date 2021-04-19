import styled from "styled-components";

export const Container = styled.li`
  width: 330px;
  height: 280px;

  margin-bottom: 80px;
  border-radius: 5px;

  list-style: none;

  -moz-animation: all 0.3s;
  animation: all 0.3s;
  -webkit-transition: all 0.3;
  transition: all 0.3s;
  
  &:hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media screen and (max-width: 400px) {
    width: 300px;
  }

`

export const Title = styled.div`
  
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 5px 5px 0 0;

  color: #fff;
  background-image: url('/assets/images/headerBackground.jpg');
  background-position: bottom;
  background-size: cover;

  strong {
    font-size: 1.4rem;
    font-weight: bold;
    margin-left: 20px; 
    margin-top: 10px;
  }
  
  p {
    font-weight: bold;
    color: #e7e7e7;
    margin-left: 20px;
  }

` 

export const Description = styled.div`

  height: 120px;
  width: 100%;

  p {
    max-width: 300px;
    margin-bottom: 12px;
    margin-left: 20px; 
    padding-top: 10px;

    font-weight: 400;
    opacity: 0.6;
  }

`

export const Footer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  
  padding-right: 10px;

  border-radius: 0 0 10px 10px;

  a {
    text-decoration: none;
    border-radius: 20px;

    background-color: #000;
    font-weight: 400;
    font-size: 1rem;
    color: #FFF;
    font-weight: bold;

    padding: 10px;
  }
`