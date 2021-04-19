import { Container } from "./styles";

interface Experience {
  id: number;
  company: string;
  role: string;
  date: string;
}

export function ProjectRoleItem (props) {

  return (
    <Container>
      <h3>{props.experience.title} </h3>
      <p>{props.experience.description}</p>
    </Container>
  );
}