import { HeaderForCase } from "../HeaderForCase";
import { Container, DivButton, Main } from "./styles";
import HeaderPropsJson from '../../../header.json'
import { useState } from "react";

export function ResumePage () {
  const [ headerProps, setHeaderProps ] = useState(() => {
    
    const GetProps = []

    HeaderPropsJson.map(props =>{
      if (props.id === 1) {
        GetProps.push(props)
      }
    })

    if (GetProps) {
      return GetProps;
    } 
    
    return []
  })
  
  return (
    <Container>
      <HeaderForCase headerprops={headerProps}/>

      <Main>
        <img src="/assets/images/Resume-James.png" alt=""/>
      </Main>
      <DivButton>
        <a href="/assets/images/Curriculo-JoaoMarcos.pdf" download="Curriculo-JoaoMarcos.pdf" >Baixar Resumo</a>
      </DivButton>
    </Container>
  );
} 