import { Header, LinkHome } from "./styles";

export function HeaderForCase () {
  return (
    <Header>
        <LinkHome>
          <a href="./">
            <img src="/assets/icons/arrow.svg" alt=""/>
          </a>
          <p>Voltar para home</p>
        </LinkHome>
        <img src="/assets/images/logo-painted.png" alt=""/>
        <h1>Leia um pouco sobre mim</h1>
        <p>
          Sou programador há quase dois anos e tive oportunidade 
          de realizar feitos bem interessantes até hoje. 
          
          atuo com linguagem desktop mas venho estudado 
          bastante o ecossistema do ReactJS.
          
          Dê uma olhada no meu <strong> <a href="https://github.com/joaomarcosfurtado">github</a> </strong> 
          <br/>
          e veja mais sobre minha tragetória logo abaixo.
        </p>
      </Header>
  );
}