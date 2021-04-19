import { ContactMe } from "../components/ContactMe";
import { HeaderForCase } from "../components/HeaderForCase";
import { ProjectRoleList } from "../components/ProjectRole";
import { Container } from "../styles/pages/pages";

export default function FpControladoria () {
  return (
    <Container>
      <HeaderForCase />
      <ProjectRoleList />
      {/* <ContactMe /> */}
    </Container>
  );
}