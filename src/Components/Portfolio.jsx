import Column from "../UI/Column";
import Row from "../UI/Row";
import Text from "../UI/Text";
import Title from "../UI/Title";

function Portfolio() {
  return (
    <Column className="align-center justify-between gap-2">
      <Title type="primary" className="text-sky-500">
        Portfolio
      </Title>
      <Row className="align-center justify-between">
        <Text>Website</Text>
        <a
          href="https://www.jovinliu.com/"
          target="_blank"
          className="rounded-lg bg-sky-300 px-1"
        >
          <Text type="primary" className=" text-white">
            https://www.jovinliu.com
          </Text>
        </a>
      </Row>
    </Column>
  );
}

export default Portfolio;
