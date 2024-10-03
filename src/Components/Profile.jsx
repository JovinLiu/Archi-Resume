import Column from "../UI/Column";
import Li from "../UI/Li";
import Title from "../UI/Title";
import Ul from "../UI/Ul";

function Profile() {
  return (
    <Column className="mt-4">
      <Title type="primary" className="text-sky-500">
        Profile
      </Title>
      <Ul className="border-y-2 border-sky-200 pl-4 text-gray-600">
        <Li>1 year of full stack web development experience</Li>
        <Li>AustraLia Permanent Resident</Li>
        <Li>Developed over 15 web appLications</Li>
        <Li>Certified JavaScript, HTML and CSS developer</Li>
        <Li>Certified React and NodeJS Developer</Li>
        <Li>
          Committed to continuous learning and expanding knowledge in Computer
          Science and Information Technology
        </Li>
      </Ul>
    </Column>
  );
}

export default Profile;
