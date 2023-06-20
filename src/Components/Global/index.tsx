import styled from '@emotion/styled';
import Header from "../Header";
import Documentation from "../Documentation";
import Inputs from '../Inputs';
import FooterSection from '../Footer';

const Global = () => {
  return (
    <ContenedorPrincipal>
      <Header />
      <Documentation />
      <Inputs />
      <FooterSection />
    </ContenedorPrincipal>
  );
};

export default Global;

const ContenedorPrincipal = styled.main`
  height: 100vh;
`