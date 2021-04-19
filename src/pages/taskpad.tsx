import { ContactMe } from "../components/ContactMe";
import { HeaderForCase } from "../components/HeaderForCase";
import { ProjectDetail } from "../components/ProjectDetails";
import { ProjectRoleList } from "../components/ProjectRole";
import { usePageInfo } from "../hooks/usePageInfo";
import { Container } from "../styles/pages/pages";
import HeaderPropsJson from '../../header.json'
import { useState } from "react";

interface HeaderProps{
  id: number;
  image: string;
  title: string;
  description: string;
  link?: string;
  linkname?: string;
}

export default function FpControladoria () {
  const { infosTaskPad, infosTaskpadDetail } = usePageInfo()
  
  const [ headerProps, setHeaderProps ] = useState<HeaderProps[]>(() => {
    
    const GetProps = []

    HeaderPropsJson.map(props =>{
      if (props.id === 3) {
        GetProps.push(props)
      }
    })

    if (GetProps) {
      return GetProps;
    } 
    
    return []
  })
  
  return (
    <Container>
      <HeaderForCase headerprops={headerProps}/>
      <ProjectRoleList projectrole={infosTaskPad}/>
      <ProjectDetail projectdetail={infosTaskpadDetail}/>
      <ContactMe />
    </Container>
  );
}