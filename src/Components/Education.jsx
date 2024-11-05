import Column from "../UI/Column";
import Row from "../UI/Row";
import Text from "../UI/Text";
import Title from "../UI/Title";

function Education() {
  return (
    <Column className="gap-4">
      <Title type="primary">Education</Title>
      <Row className="justify-between">
        <Text type="secondary">2014-2016</Text>
        <Column>
          <Text type="tertiary" className="w-[40mm] text-right">
            Master of Architecture
          </Text>
          <Text type="tertiary" className="w-[40mm] text-right">
            Melbourne University
          </Text>
        </Column>
      </Row>
      <Row className="justify-between">
        <Text type="secondary">2009-2014</Text>
        <Column>
          <Text type="tertiary" className="w-[40mm] text-right">
            Bachelor of Architecture
          </Text>
          <Text type="tertiary" className="w-[40mm] text-right">
            Xiamen University
          </Text>
        </Column>
      </Row>
    </Column>
  );
}

export default Education;
