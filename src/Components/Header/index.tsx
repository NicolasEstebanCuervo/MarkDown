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
  font-size: 50px;

  @media (max-width: 1100px) {
    font-size: 40px;
  }

  @media (max-width: 800px) {
    font-size: 30px;
  }

  @media (max-width: 650px) {
    font-size: 6vw;
  }
`;

const HeaderSubtitle = styled.h2`
  font-size: 35px;
  font-weight: 600;

  @media (max-width: 1100px) {
    font-size: 25px;
  }

  @media (max-width: 800px) {
    font-size: 20px;
  }

  @media (max-width: 650px) {
    font-size: 3.2vw;
  }
`;
