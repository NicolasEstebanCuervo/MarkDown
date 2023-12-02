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
    text-align: center;
    font-size: 45px;
    font-weight: 800;

    @media (max-width: 1250px) {
        font-size: 35px;
    }

    @media (max-width: 1000px) {
        font-size: 25px;
    }

    @media (max-width: 750px) {
        font-size: 20px;
    }

    @media (max-width: 600px) {
        font-size: 7vw;
    }

    @media (max-width: 400px) {
        font-size: 8vw;
    }
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
  font-size: 40px;
  margin: 1% 5%;
    @media (max-width: 400px) {
        font-size: 10vw;
    }
`

const MarkDownCopyright = styled.h1`
    font-size: 30px;
    font-weight: 800;

    @media (max-width: 1250px) {
        font-size: 25px;
    }

    @media (max-width: 1000px) {
        font-size: 20px;
    }

    @media (max-width: 750px) {
        font-size: 15px;
    }

    @media (max-width: 600px) {
        font-size: 4vw;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
    }
`;