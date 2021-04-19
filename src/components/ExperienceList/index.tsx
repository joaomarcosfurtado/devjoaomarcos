import { useState } from "react";
import { ExperienceListItem } from "./ExperienceListItem/index";
import { Container, Content, Title } from "./styles";
import experienceItems from '../../../experiece.json'

interface Experience {
  id: number;
  company: string;
  role: string;
  date: string;
}

export function ExperienceList () {
  const [ experience, setExperience ] = useState<Experience[]>(() => {

    const storagedExperience = experienceItems;

    if (storagedExperience) {
      return storagedExperience;
    }

    return []
  })
 
  return(
    <>
      <Title>
        <h3>Experiência</h3>
        <a href="./resume">Clique aqui e veja de forma mais detalhada.</a>
      </Title>
      <Container>  
        <Content>
          {experience.map(experience => (
            <ExperienceListItem  
              key={experience.id} 
              experience={experience}
            />
          ))}
        </Content>
      </Container>
    </>
  );
}