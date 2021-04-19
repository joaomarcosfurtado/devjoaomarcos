import { createContext, ReactNode, useContext, useState } from "react";
import projectRoleProps from '../../projectRole.json'
import projectDetailProps from '../../projectDetails.json'

interface PageInfoProps {
  children: ReactNode;
}

interface ProjectRole {
  id: number;
  title: string;
  description: string;
}

interface Jobs {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface PageInfoContextData {
  infosFpControladoria: ProjectRole[];
  infosTaskPad: ProjectRole[]
  infosFpControladoriaDetail: Jobs[];
  infosTaskpadDetail: Jobs[];
}

const PageInfoContext = createContext<PageInfoContextData>({} as PageInfoContextData);

export function PageInfoProvider({ children }: PageInfoProps): JSX.Element {
  
  const [ infosFpControladoria, setInfosFpControladoria ] = useState<ProjectRole[]>(() => {
    
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
    
    if (Infos) {
      return Infos;
    } 
    
    return []
  }); 

  const [ infosTaskPad, setInfosTaskPad ] = useState<ProjectRole[]>(() => {
    
    const Infos = []
    projectRoleProps.map(project => {
      
      if (
          project.id === 4 ||
          project.id === 5 ||
          project.id === 6 
      ){
          Infos.push(project)
       } 
    })
    
    if (Infos) {
      return Infos;
    } 
    
    return []
  }); 

  const [ infosFpControladoriaDetail, setInfosFpControladoriaDetail ] = useState<Jobs[]>(() => {
    
    const Infos = []
    projectDetailProps.map(project => {
      
      if (
          project.id === 1 ||
          project.id === 2 ||
          project.id === 3 
        )  {
          Infos.push(project)
      } 
    })
    
    if (Infos) {
      return Infos;
    } 
    
    return []
  }); 

  const [ infosTaskpadDetail, setInfosTaskpadDetail ] = useState<Jobs[]>(() => {
    
    const Infos = []
    projectDetailProps.map(project => {
      
      if (
          project.id === 4 ||
          project.id === 5 ||
          project.id === 6 
      ){
          Infos.push(project)
       } 
    })
    
    if (Infos) {
      return Infos;
    } 
    
    return []
  }); 

  return (
    <PageInfoContext.Provider
      value={{ 
        infosFpControladoria,
        infosTaskPad,
        infosFpControladoriaDetail,
        infosTaskpadDetail,
       }}
    >
      {children}
    </PageInfoContext.Provider>
  );
}

export function usePageInfo(): PageInfoContextData {
  const context = useContext(PageInfoContext);

  return context;
}