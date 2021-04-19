import { useEffect, useState } from 'react';
import { RepositoryItem } from './RepositoryItem/RepositoryItem'
import { Container, Content, Title } from './styles';

export function RepositoryList () {
  
  const [ repositories, setRepositories ] = useState([])
  
  useEffect(() => {
    fetch('https://api.github.com/users/joaomarcosfurtado/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  },[])

  return (
    <>
      <Title>
        <h2>Veja meus repositórios no Github! 🚀</h2>
      </Title>
      <Container>
        <Content>
          {repositories.map(repository => {
            return <RepositoryItem key={repository.name} repository={repository}/>
          })}
        </Content>
      </Container>
    </>
  );
}