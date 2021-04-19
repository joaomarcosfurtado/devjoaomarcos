import { useState } from "react";
import { ProjectDetailItem } from "./ProjectDetailsItem";
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

export function ProjectDetail () {
  
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
        {jobs.map(job => (
          <ProjectDetailItem key={job.id} job={job}/>
        ))}
      </Content>  
    </Container>
  );
}