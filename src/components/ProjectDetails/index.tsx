import { useState } from "react";
import { ProjectDetailItem } from "./ProjectDetailsItem";
import { ProjectDetailImages } from "./projectDetailImages";
import { Container, Content } from "./styles";
import ProjectDetailsProps from '../../../projectDetails.json' 

interface Jobs {
  id: number;
  image: string;
  title: string;
  description: string;
  isFinished?: boolean;
  link?: string; 
}

export function ProjectDetail (props) {
  
  const [ jobs, setJobs ] = useState<Jobs[]>(() => {

    const storagedJobs = ProjectDetailsProps;

    if (storagedJobs) {
      return storagedJobs;
    }

    return []
  })
 
  
  return (
    <Container>
      <Content>
        {props.projectdetail.map(props => (
          <ProjectDetailItem key={props.id} job={props}/>
        ))}

        {props.projectdetail.map(props => (
            <ProjectDetailImages key={props.id} image={props.image}/>
          ))}
      </Content> 

      
    </Container>
  );
}