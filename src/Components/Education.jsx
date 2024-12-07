import Column from "../UI/Column";
import Row from "../UI/Row";
import Text from "../UI/Text";
import Title from "../UI/Title";

function Education() {
  return (
    <Column className="gap-4">
      <Title type="primary">Education</Title>
      <Column className="justify-between">
        <Text type="secondary">2014-2016</Text>
        <Column>
          <Text type="tertiary" className="w-[40mm] text-left">
            Master of Architecture
          </Text>
          <Text type="tertiary" className="w-[40mm] text-left">
            Melbourne University
          </Text>
        </Column>
      </Column>
      <Column className="justify-between">
        <Text type="secondary">2009-2014</Text>
        <Column>
          <Text type="tertiary" className="w-[40mm] text-left">
            Bachelor of Architecture
          </Text>
          <Text type="tertiary" className="w-[40mm] text-left">
            Xiamen University
          </Text>
        </Column>
      </Column>
    </Column>
  );
}

export default Education;
