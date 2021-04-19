import { useEffect, useState } from "react";
import { ProjectRoleItem } from "./ProjectRoleItem";
import { Container, Content } from "./styles";
import projectRole from '../../../projectRole.json'

interface ProjectRole {
  id: number;
  title: string;
  description: string;
}

export function ProjectRoleList () {
  const [ experience, setExperience ] = useState<ProjectRole[]>(() => {

    const storagedExperience = projectRole;

    if (storagedExperience) {
      return storagedExperience;
    }

    return []
  })

  useEffect(() => {

  }, [])
 
  return(
    <Container>  
      <Content>
        {experience.map(experience => (
          <ProjectRoleItem  
            key={experience.id} 
            experience={experience}
          />
        ))}
      </Content>
    </Container>
  );
}