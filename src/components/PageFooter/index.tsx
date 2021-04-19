import { Container, Content, LeftSide, RightSide } from "./styles";

export function PageFooter () {
  return(
    <Container>
      <Content>
        <LeftSide>
          <img src="assets/images/logo-nobackground.png" alt=""/>
          <p>Feito por João Marcos</p>
        </LeftSide>
      
        <RightSide>
          <a href="https://www.linkedin.com/in/joao-marcos-furtado-de-paula/">linkedin</a>
          <a href="https://github.com/joaomarcosfurtado">github</a>
          <a href="https://www.instagram.com/devjoaomarcos/?hl=pt-br">instagram</a>
        </RightSide>
      </Content>
    </Container>
  );
}