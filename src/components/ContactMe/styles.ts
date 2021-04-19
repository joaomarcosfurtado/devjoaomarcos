import styled from "styled-components";

export const Container = styled.div`
  padding: 0rem 1rem 1.5rem;
  margin: 0 auto; 

  max-width: 1220px; 
`

export const Content = styled.div`
  padding: 0rem 1rem 1.5rem;
  margin: 0 auto; 
  border-radius: 5px;
  max-width: 1220px; 
  height: 480px;
  background-color: #F9F9F9;

  h4 {
    padding: 1.5rem 0;
    font-size: 1.4rem;
  }

  p {
    padding-bottom: 1rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 400;
    padding-bottom: 8px;
  }

  input[type=text], input[type=email] {
    margin-bottom: 25px;
    padding-bottom: 30px;
    border: 1px solid #E7E7E7;

    align-items: center;
    font-size: 1.2rem;
  }

  input[type=text]:last-child {
    padding-bottom: 60px;
    margin-bottom: 10px;
  }

 
`
export const FormFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  
  input[type=submit] {
    color: #000;
    font-weight: 400;
    padding-right: 3px;
    border: none;
    background: transparent;
    text-decoration: underline;
  }

`
