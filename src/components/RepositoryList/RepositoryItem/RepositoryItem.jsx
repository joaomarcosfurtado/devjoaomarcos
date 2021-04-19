import { Container, Description, Title, Footer } from "./styles";

export function RepositoryItem (props) {
  return (
    <Container>
      <Title>
        <p>Título: </p>
        <strong>{props.repository.name}</strong>
      </Title>

      <Description>
        <p>{props.repository.description}</p>
      </Description>
      
      <Footer>
        <a href={props.repository.html_url}>
          Acessar repositório
        </a>
      </Footer>
    </Container>
  );
}