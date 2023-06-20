import { useMarkDownContext } from "../../Context/MarkDownContext";
import ReactMarkdown from "react-markdown";
import styled from "@emotion/styled";
import * as Colors from "../Colors";

const Inputs = () => {
  const context = useMarkDownContext();

  if (!context) {
    return null;
  }

  const { inputValue, handleInputChange, handleKeyDown, handleKeyUp } = context;

  return (
    <Container>
      <MainTitle>Let's Put It to the Test!</MainTitle>
      <Section>
        <ContentWrapper>
          <Content>
            <ContentTitle>Write in MarkDown</ContentTitle>
            <TextArea
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onKeyUp={handleKeyUp}
              placeholder="Write your content here..."
              rows={5}
            />
          </Content>
          <Content>
            <ContentTitle>Markdown Preview</ContentTitle>
            <MarkdownPreview>
              <ReactMarkdown>{inputValue}</ReactMarkdown>
            </MarkdownPreview>
          </Content>
        </ContentWrapper>
      </Section>
    </Container>
  );
};

export default Inputs;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.primaryColor};
  padding: 5% 0;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1100px;
  padding: 0 3%;
  background-color: ${Colors.secondaryColor};
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 29px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 29px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 29px -8px rgba(0, 0, 0, 0.75);
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 5%;

  @media (max-width: 1000px) {
    font-size: 7vw;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  padding: 3% 0 0;
  gap: 5%;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 10% 5% 3%;
  }
`;

const Content = styled.div`
  flex-basis: calc(50% - 0.5rem);
  margin-bottom: 2rem;
`;

const ContentTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 1000px) {
    font-size: 5vw;
  }
`;

const TextArea = styled.textarea`
  line-height: 0.5;
  width: 100%;
  min-height: 500px;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  resize: none;
  font-size: 20px;
  background: ${Colors.quaternaryColor};
  border: 1px solid #cccccc;

  &:focus {
    outline: none;
  }

  @media (max-width: 1000px) {
    font-size: 3vw;
  }
`;

const MarkdownPreview = styled.div`
  min-height: 500px;
  width: 100%;
  padding: 1rem;
  background: ${Colors.quaternaryColor};
  border: 1px solid ${Colors.tertiaryColor};
  border-radius: 4px;
`;
