import { HeaderForCase } from "../HeaderForCase";
import { Container, DivButton, Main } from "./styles";

export function ResumePage () {
  return (
    <Container>
      <HeaderForCase/>

      <Main>
        <img src="/assets/images/Resume-James.png" alt=""/>
      </Main>
      <DivButton>
        <button>Baixar Resumo</button>
      </DivButton>
    </Container>
  );
} 