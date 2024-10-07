import Column from "../UI/Column";
import Row from "../UI/Row";
import Text from "../UI/Text";

function Basic() {
  return (
    <Column className="gap-2">
      <Row className="align-center justify-between">
        <Text>Address</Text>
        <Text type="tertiary">Melbourne, Australia</Text>
      </Row>
      <Row className="align-center justify-between">
        <Text>Mobile Number</Text>
        <Text type="tertiary">0413 685 018</Text>
      </Row>
      <Row className="align-center justify-between">
        <Text>Email</Text>
        <a href="mailto:liujovin@gmail.com">
          <Text type="tertiary" className="underline">
            liujovin@gmail.com
          </Text>
        </a>
      </Row>
      <Row className="align-center justify-between">
        <Text>Linkedin</Text>
        <a href="https://www.linkedin.com/in/jovinliu/" target="_blank">
          <Text type="tertiary" className="underline">
            linkedin.com/in/jovinliu
          </Text>
        </a>
      </Row>
      <Row className="align-center justify-between">
        <Text>Github</Text>
        <a href="https://github.com/JovinLiu" target="_blank">
          <Text type="tertiary" className="underline">
            github.com/JovinLiu
          </Text>
        </a>
      </Row>
    </Column>
  );
}

export default Basic;
