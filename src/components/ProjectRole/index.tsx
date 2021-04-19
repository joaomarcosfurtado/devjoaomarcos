import { ProjectRoleItem } from "./ProjectRoleItem";
import { Container, Content } from "./styles";

interface ProjectRole {
  id: number;
  title: string;
  description: string;
}

export function ProjectRoleList (props) {
  
  return(
    <Container>  
      <Content>
          {props.projectrole.map(project => (
          <ProjectRoleItem  
            key={project.id} 
            experience={project}
          />
        ))}

      </Content>
    </Container>
  );
}
