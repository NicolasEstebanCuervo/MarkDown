import styled from "@emotion/styled";
import * as Colors from "../Colors";

const Header = () => {
  return (
    <HeaderContainer>
      <MainHeaderContainer>
        <HeaderTitle>MarkDown Transpilation</HeaderTitle>
        <HeaderSubtitle>
          Convert your ideas into digital art of the written word.
        </HeaderSubtitle>
      </MainHeaderContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background: ${Colors.primaryColor};
  color: ${Colors.quaternaryColor};
  height: auto;
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;
const HeaderTitle = styled.h1`
   text-align: center;
    font-size: 50px;
    font-weight: 800;

    @media (max-width: 1250px) {
        font-size: 40px;
    }

    @media (max-width: 1000px) {
        font-size: 30px;
    }

    @media (max-width: 750px) {
        font-size: 25px;
    }

    @media (max-width: 600px) {
        font-size: 7vw;
    }

    @media (max-width: 400px) {
        font-size: 8vw;
    }
`;

const HeaderSubtitle = styled.h2`
    text-align: center;
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
