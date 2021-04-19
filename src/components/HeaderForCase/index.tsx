import { Header, LinkHome } from "./styles";

export function HeaderForCase (props) {
  return (
    <Header>
        <LinkHome>
          <a href="./">
            <img src="/assets/icons/arrow.svg" alt=""/>
          </a>
          <p>Voltar para home</p>
        </LinkHome>
        <img src={props.headerprops[0].image} alt=""/>
        <h1>{props.headerprops[0].title}</h1>
        <p>{props.headerprops[0].description} <strong> <a href={props.headerprops[0].link}>{props.headerprops[0].linkname}</a> </strong> </p>
      </Header>
  );
}