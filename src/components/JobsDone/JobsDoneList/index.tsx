import { Container, Description } from "./styles";


interface Jobs {
  id: number;
  image: string;
  title: string;
  description: string;
}

export function JobsDoneList (props) {
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
      
        { props.job.isFinished ? (
            
            <a href="#">Veja Mais</a> 
          ) : (
            <a href="#">
              <button disabled>
                Coming Soon
              </button>
            </a> 
          )
        }
      
    </Container>
   
    </>
  );
}