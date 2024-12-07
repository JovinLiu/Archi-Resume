import Column from "../UI/Column";
import Row from "../UI/Row";
import Text from "../UI/Text";
import Title from "../UI/Title";

function Portfolio() {
  return (
    <Column className="align-center justify-between gap-2">
      <Title type="primary">Portfolio</Title>
      <Row className="align-center justify-between">
        <Column>
          <Text className="mb-1 pt-[0.1rem]">PDF file</Text>
          <a
            href="https://www.jovinliu.com/2024-Portfolio-JovinLiu-min.pdf"
            target="_blank"
          >
            <Text
              type="tertiary"
              className="rounded-md bg-sky-300 p-1 underline"
            >
              https://www.jovinliu.com/123123
            </Text>
          </a>
        </Column>
      </Row>
    </Column>
  );
}

export default Portfolio;
