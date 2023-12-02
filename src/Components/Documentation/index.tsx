import styled from "@emotion/styled";
import * as Colors from "../Colors";

const Documentation = () => {
    return (
        <Container>
            <MainContainer>
                <Section>
                    <SectionTitle>What is Markdown?</SectionTitle>
                    <Paragraph>
                        Markdown is a lightweight and easy-to-use language for
                        formatting text in an elegant way. With its simple
                        syntax, you can effortlessly add headers, paragraphs,
                        text emphasis, lists, links, images, source code,
                        tables, block quotes, and horizontal lines to your
                        documents. It is a popular tool for writing online
                        content as it allows you to focus on the text itself
                        without worrying about formatting details.
                    </Paragraph>
                </Section>
                <Section>
                    <SectionTitle>Headers</SectionTitle>
                    <Paragraph>
                        Headers are used in document structuring to organize and
                        divide content into sections. You can use the pound
                        symbol (#) followed by a space to create headers. The
                        number of pound symbols used determines the header
                        level.{" "}
                    </Paragraph>
                    <Example>
                        <MarkdownCode>
                            # Heading level 1<br />
                            ## Heading level 2<br />
                            ### Heading level 3<br />
                            #### Heading level 4<br />
                            ##### Heading level 5<br />
                            ###### Heading level 6<br />
                        </MarkdownCode>
                    </Example>
                </Section>

                <Section>
                    <SectionTitle>Paragraphs</SectionTitle>
                    <Paragraph>
                        In Markdown, you can create paragraphs by separating
                        them with a blank line. This allows you to structure
                        your text into distinct blocks. If you want to insert a
                        line break within a paragraph, you can do so by adding
                        two spaces at the end of a line. This will create a line
                        break without starting a new paragraph. It's a
                        convenient way to introduce visual breaks or create
                        lists with line-by-line items. With Markdown's
                        simplicity and flexibility, you can easily format your
                        text and ensure readability in a straightforward manner.
                    </Paragraph>
                    <Example>
                        <MarkdownCode>
                            This is a paragraph.
                            <br />
                            This is another paragraph.
                        </MarkdownCode>
                    </Example>
                </Section>

                <Section>
                    <SectionTitle>Text Emphasis</SectionTitle>
                    <Paragraph>
                        In Markdown, you can apply emphasis to your text using
                        asterisks (*) or underscores (_). Enclose the text you
                        want to emphasize in single asterisks or underscores for
                        italicizing, like this or this. To make text bold, use
                        double asterisks or underscores, like this or this.
                        Additionally, you can create a strikethrough effect by
                        using two tildes (~), like this. Remember to use
                        emphasis sparingly and strategically to maintain
                        readability and convey your intended message
                        effectively.
                    </Paragraph>
                    <Example>
                        <MarkdownCode>
                            *Italic text*
                            <br />
                            _Italic text_
                            <br />
                            **Bold text**
                            <br />
                            __Bold text__
                            <br />
                            ~~Strikethrough text~~
                            <br />
                        </MarkdownCode>
                    </Example>
                </Section>

                <Section>
                    <SectionTitle>Unordered Lists</SectionTitle>
                    <Paragraph>
                        You can create unordered lists using hyphens (-), plus
                        signs (+), or asterisks (*). Each item in the list
                        starts with one of these characters, followed by a
                        space. The items can be as short or as long as needed,
                        and they can contain multiple sentences or paragraphs.
                        The order of the items in the list doesn't matter; they
                        are all considered equal. Unordered lists are commonly
                        used to present a set of related information or to
                        highlight key points.
                    </Paragraph>
                    <Example>
                        <MarkdownCode>
                            - List item 1<br />
                            - List item 2<br />
                            - List item 3<br />
                        </MarkdownCode>
                    </Example>

                    <SectionTitle>Ordered Lists</SectionTitle>
                    <Paragraph>
                        To create an ordered numbered list, you can use numbers
                        followed by a period. Each item in the list starts with
                        a number, followed by a period and a space. The items
                        can be as short or as long as needed, and they can
                        contain multiple sentences or paragraphs. The order of
                        the items in the list is important, as it indicates a
                        specific sequence or hierarchy. Ordered numbered lists
                        are commonly used when you want to present information
                        in a structured and sequential manner.
                    </Paragraph>
                    <Example>
                        <MarkdownCode>
                            1. List item 1<br />
                            2. List item 2<br />
                            3. List item 3<br />
                        </MarkdownCode>
                    </Example>
                </Section>

                <Section>
                    <SectionTitle>Links</SectionTitle>
                    <Paragraph>
                        Links in Markdown allow you to connect text to external
                        resources like web pages or documents using the syntax
                        [Link text](Link URL). Ensure the "Link text" provides a
                        clear description, while the "Link URL" includes the
                        complete web address. Utilizing links enhances your
                        content by providing quick access to additional
                        information and referencing sources.
                    </Paragraph>
                    <Example>
                        <MarkdownCode>
                            [Link text](URL_of_the_link)
                        </MarkdownCode>
                    </Example>
                </Section>

                <Section>
                    <SectionTitle>Images</SectionTitle>
                    <Paragraph>
                        In Markdown, you can insert images using the syntax
                        ![Alternate Text](Image URL). Provide a brief
                        description in the "Alternate Text" and the complete URL
                        or file path of the image in "Image URL." Make sure the
                        URL is correct and accessible for the image to display
                        correctly. Remember that Markdown links images from
                        either an online or local location.
                    </Paragraph>
                    <Example>
                        <MarkdownCode>
                            ![Alternate text](URL_of_the_image)
                        </MarkdownCode>
                    </Example>
                </Section>

                <Section>
                    <SectionTitle>Block Quotes</SectionTitle>
                    <Paragraph>
                        In Markdown, you can use the greater than symbol &gt; at
                        the beginning of each line to create a block quote. This
                        formatting feature is useful for highlighting quoted
                        text or adding emphasis to certain content within your
                        Markdown document. By adding the greater than symbol at
                        the start of each line, you can create a block quote
                        that spans multiple lines.
                    </Paragraph>
                    <Example>
                        <MarkdownCode>
                            &gt; This is a block quote.
                            <br />
                            &gt; You can have multiple lines in a block quote.
                            <br />
                        </MarkdownCode>
                    </Example>
                </Section>

                <Section>
                    <SectionTitle>Horizontal Lines</SectionTitle>
                    <Paragraph>
                        You can create horizontal lines in Markdown using three
                        hyphens (---) or three asterisks (***). These lines are
                        useful for visually separating sections of your document
                        or adding emphasis. Here is an example:
                    </Paragraph>
                    <Example>
                        <MarkdownCode>---</MarkdownCode>
                    </Example>
                </Section>
            </MainContainer>
        </Container>
    );
};

export default Documentation;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5% 0;
    background: ${Colors.secondaryColor};
    font-family: "Quicksand", sans-serif;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    max-width: 700px;

    @media (max-width: 600px) {
        width: 90%;
    }
`;

const Section = styled.div`
    margin: 10px 0;
    max-width: 600px;
`;

const SectionTitle = styled.h2`
    color: ${Colors.senaryColor};
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

const Paragraph = styled.p`
    color: ${Colors.senaryColor};
    font-family: "Quicksand", sans-serif;
    font-size: 18px;
    margin: 0;

    @media (max-width: 1250px) {
        font-size: 15px;
    }

    @media (max-width: 1000px) {
        font-size: 20px;
    }

    @media (max-width: 750px) {
        font-size: 15px;
    }

    @media (max-width: 600px) {
        font-size: 5vw;
    }

    @media (max-width: 400px) {
        font-size: 6vw;
    }
`;

const Example = styled.div`
    height: 200px;
    padding: 1rem;
    background: ${Colors.quaternaryColor};
    border: 1px solid ${Colors.tertiaryColor};
    border-radius: 4px;
    width: 100%;
    max-width: 700px;
    margin: 5% 0;

    @media (max-width: 1000px) {
        max-width: 90vw;
        height: 200px;
    }

    @media (max-width: 500px) {
        max-width: 90vw;
        height: 100px;
    }

    @media (max-width: 200px) {
        height: 50px;
    }
`;

const MarkdownCode = styled.div`
    font-size: 22px;
    @media (max-width: 1000px) {
        font-size: 2.5vw;
    }
`;
