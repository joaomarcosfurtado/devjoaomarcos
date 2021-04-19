import { useEffect, useState } from "react";
import { ProjectRoleItem } from "./ProjectRoleItem";
import { Container, Content } from "./styles";
import projectRoleProps from '../../../projectRole.json'
import { info } from "node:console";

interface ProjectRole {
  id: number;
  title: string;
  description: string;
}

export function ProjectRoleList () {
  const [ projectRole, setProjectRole ] = useState<ProjectRole[]>([])

  useEffect(() => {
    const Infos = []
    projectRoleProps.map(project => {
      
      if (
          project.id === 1 ||
          project.id === 2 ||
          project.id === 3 
        )  {
          
          Infos.push(project)
      }

    })
    
    setProjectRole(Infos)

  }, [])
 
  return(
    <Container>  
      <Content>
        {projectRole.map(experience => (
          <ProjectRoleItem  
            key={experience.id} 
            experience={experience}
          />
        ))}
      </Content>
    </Container>
  );
}