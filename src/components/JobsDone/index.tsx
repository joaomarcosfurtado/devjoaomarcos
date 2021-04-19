import { useState } from "react";
import { JobsDoneList } from "./JobsDoneList";
import { Container, Content } from "./styles";
import JobsItem from '../../../jobsdone.json' 

interface Jobs {
  id: number;
  image: string;
  title: string;
  description: string;
  isFinished?: boolean;
}

export function JobsDone () {
  
  const [ jobs, setJobs ] = useState<Jobs[]>(() => {

    const storagedJobs = JobsItem;

    if (storagedJobs) {
      return storagedJobs;
    }

    return []
  })
 
  
  return (
    <Container>
      <Content>
        {jobs.map(job => (
          <JobsDoneList key={job.id} job={job}/>
        ))}
      </Content>  
    </Container>
  );
}