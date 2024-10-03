import Column from "../UI/Column";
import Row from "../UI/Row";
import Text from "../UI/Text";
import Title from "../UI/Title";

function Basic() {
  return (
    <Column className="gap-2">
      <Title type="primary" className="text-sky-500">
        Basic Information
      </Title>
      <Row className="align-center justify-between">
        <Text>Address</Text>
        <Text type="primary">Melbourne, Australia</Text>
      </Row>
      <Row className="align-center justify-between">
        <Text>Mobile Number</Text>
        <Text type="primary">0413 685 018</Text>
      </Row>
      <Row className="align-center justify-between">
        <Text>Email</Text>
        <a
          href="mailto:liujovin@gmail.com"
          className="rounded-lg bg-sky-300 px-1"
        >
          <Text type="primary" className="text-white">
            liujovin@gmail.com
          </Text>
        </a>
      </Row>
      <Row className="align-center justify-between">
        <Text>Linkedin</Text>
        <a
          href="https://www.linkedin.com/in/jovinliu/"
          target="_blank"
          className="rounded-lg bg-sky-300 px-1"
        >
          <Text type="primary" className="text-white">
            linkedin.com/in/jovinliu
          </Text>
        </a>
      </Row>
      <Row className="align-center justify-between">
        <Text>Github</Text>
        <a
          href="https://github.com/JovinLiu"
          target="_blank"
          className="rounded-lg bg-sky-300 px-1"
        >
          <Text type="primary" className="text-white">
            github.com/JovinLiu
          </Text>
        </a>
      </Row>
    </Column>
  );
}

export default Basic;
