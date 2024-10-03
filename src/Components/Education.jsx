import Column from "../UI/Column";
import Row from "../UI/Row";
import Text from "../UI/Text";
import Title from "../UI/Title";

function Education() {
  return (
    <Column className="gap-2">
      <Title type="primary" className="text-sky-500">
        Education
      </Title>
      <Row className="justify-between">
        <Text type="secondary">2023-2024</Text>
        <Text type="primary" className="w-[40mm] text-right">
          Udemy Web Developer Courses
        </Text>
      </Row>
      <Row className="justify-between">
        <Text type="secondary">2014-2016</Text>
        <Column>
          <Text type="primary" className="w-[40mm] text-right">
            Master of Architecture
          </Text>
          <Text type="primary" className="w-[40mm] text-right">
            Melbourne University
          </Text>
        </Column>
      </Row>
      <Row className="justify-between">
        <Text type="secondary">2009-2014</Text>
        <Column>
          <Text type="primary" className="w-[40mm] text-right">
            Bachelor of Architecture
          </Text>
          <Text type="primary" className="w-[40mm] text-right">
            Xiamen University
          </Text>
        </Column>
      </Row>
    </Column>
  );
}

export default Education;
