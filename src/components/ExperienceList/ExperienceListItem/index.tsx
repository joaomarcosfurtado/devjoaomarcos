import { Container } from "./styles";

interface Experience {
  id: number;
  company: string;
  role: string;
  date: string;
}

export function ExperienceListItem (props) {

  return (
    <Container>
      <p>{props.experience.company} </p>
      <p>{props.experience.role}</p>
      <p>{props.experience.date}</p>
    </Container>
  );
}