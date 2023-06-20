import styled from "@emotion/styled";
import * as Colors from "../Colors";

const FooterSection = () => {
  return (
    <Footer>
      <FooterContainer>
        <TitleMadeWith>
          Made with Nicolas{" "}
          <LinkPortafolio href="https://nicolas-cuervo.vercel.app/">Cuervo</LinkPortafolio>
        </TitleMadeWith>
        <ContainerIcons>
            <Link href="https://github.com/NicolasEstebanCuervo" target="_blank"><i className="bi bi-github"></i></Link>
            <Link href="https://twitter.com/EstebanCuervo_" target="_blank"><i className="bi bi-twitter"></i></Link>
            <Link href="https://www.instagram.com/rojas_cuervo/" target="_blank"><i className="bi bi-instagram"></i></Link>
        </ContainerIcons>
        <MarkDownCopyright>@MarkDown All Rights Reserved.</MarkDownCopyright>
      </FooterContainer>
    </Footer>
  );
};

export default FooterSection;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.secondaryColor};
  font-family: "Quicksand", sans-serif;
  padding: 50px 0 ;
`;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TitleMadeWith = styled.h1`
    font-size: 25px;
`;

const LinkPortafolio = styled.a`
    color:${Colors.octonaryColor};
    text-decoration-line: none;
`;

const ContainerIcons = styled.div`
    display: flex;
`;

const Link = styled.a`
  color: ${Colors.senaryColor};
  font-size: 35px;
  margin: 1% 5%;
`

const MarkDownCopyright = styled.h1`
    font-size: 20px;
`;