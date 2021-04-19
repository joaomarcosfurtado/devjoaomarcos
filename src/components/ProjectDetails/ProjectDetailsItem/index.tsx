import { Container, Description } from "./styles";


interface Jobs {
  id: number;
  image: string;
  title: string;
  description: string;
  link?: string;
}

export function ProjectDetailItem (props) {
  return(
    <>
    <Container>
      <img src={props.job.image} alt="FP Controladoria"/>
      <Description>
        <h2>{props.job.title}</h2>
        <p>
          {props.job.description}
        </p>
      </Description>
    </Container>
    </>
  );
}