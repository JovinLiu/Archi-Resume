import Column from "../UI/Column";
import Title from "../UI/Title";

function NameAndTitle() {
  return (
    <Column className="bg-gradient-to-b from-indigo-800 to-indigo-400 bg-clip-text">
      <Title type="master1" className="text-transparent">
        {/* <Title type="master1"> */}
        <strong>Jovin Liu</strong>
      </Title>
      <Title type="master2" className="text-transparent">
        {/* <Title type="master2"> */}
        <strong>Full Stack Web Developer</strong>
      </Title>
    </Column>
  );
}

export default NameAndTitle;
