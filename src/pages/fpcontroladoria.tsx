import { useEffect, useState } from "react";
import { ContactMe } from "../components/ContactMe";
import { HeaderForCase } from "../components/HeaderForCase";
import { ProjectDetail } from "../components/ProjectDetails";
import { ProjectRoleList } from "../components/ProjectRole";
import { usePageInfo } from "../hooks/usePageInfo";
import { Container } from "../styles/pages/pages";
import HeaderPropsJson from '../../header.json'
import Head from "next/head";

interface HeaderProps{
  id: number;
  image: string;
  title: string;
  description: string;
  link?: string;
  linkname?: string;
}

export default function FpControladoria () {
  const { infosFpControladoria, infosFpControladoriaDetail } = usePageInfo();
  const [ headerProps, setHeaderProps ] = useState<HeaderProps[]>(() => {
    
    const GetProps = []

    HeaderPropsJson.map(props =>{
      if (props.id === 2) {
        GetProps.push(props)
      }
    })

    if (GetProps) {
      return GetProps;
    } 
    
    return []
  })

  return (
    <>
      <Head>
          <title>Dev JM | FP Controlodaria</title>
      </Head>
      <Container>
        <HeaderForCase headerprops={headerProps}/>
        <ProjectRoleList projectrole={infosFpControladoria} />
        <ProjectDetail projectdetail={infosFpControladoriaDetail}/>
        <ContactMe />
      </Container>
    </>
  );
}