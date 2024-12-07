import Column from "../UI/Column";
import Title from "../UI/Title";

function NameAndTitle() {
  return (
    <Column className="bg-gradient-to-b from-sky-800 to-sky-700 bg-clip-text">
      <Title type="master1" className="text-transparent">
        <strong>Jovin Liu</strong>
      </Title>
      <Title type="master2" className="text-transparent">
        <strong>Experienced Graduate Architect</strong>
      </Title>
    </Column>
  );
}

export default NameAndTitle;
