import Column from "../UI/Column";
import Row from "../UI/Row";
import Text from "../UI/Text";
import Title from "../UI/Title";

function Portfolio() {
  return (
    <Column className="align-center justify-between gap-2">
      <Title type="primary">Portfolio</Title>
      <Row className="align-center justify-between">
        <Text>Website</Text>
        <a href="https://www.jovinliu.com/" target="_blank">
          <Text
            type="tertiary"
            className="rounded-md bg-indigo-300 p-1 underline"
          >
            https://www.jovinliu.com
          </Text>
        </a>
      </Row>
    </Column>
  );
}

export default Portfolio;
