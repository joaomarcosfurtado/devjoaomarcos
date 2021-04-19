import { Container, Content } from "./styles";

export function Header () {
  return (
    <Container>
      <Content>
        <img src="https://github.com/joaomarcosfurtado.png" alt=""/>
        <h1>Olá 👋, bem vindo ao meu portfólio!</h1>
        <p>
          Meu nome é João Marcos tenho 21 anos, sou desenvolvedor Front-End 
          atualmente estou focado em ReactJS e seu eccosistema.
          Sou desenvolvedor há quase dois anos e tive oportunidade de realizar
          feitos bem interessantes. que tal saber mais sobre minha trajetória  
          <strong>  <a href="./resume">Veja meu Resumo.</a> </strong>
          E adoro trabalhar em projetos a parte para melhoria pessoal e profissional
          caso tenha interesse em conversar sobre isso você pode clicar no link
          abaixo e me enviar um e-mail, ou me chamar nas redes sociais.

        </p>
        <a href="#ContactMe">Entre em contato</a>
      </Content>
    </Container>
  );
} 