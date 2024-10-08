import Column from "../UI/Column";
import Li from "../UI/Li";
import Title from "../UI/Title";
import Ul from "../UI/Ul";

function Profile() {
  return (
    <Column className="mt-4">
      <Title type="primary">Profile</Title>
      <Ul className="leading-1 border-y-2 border-indigo-200 pl-4 text-gray-600">
        <Li>1 year plus of full stack web development experience</Li>
        <Li>Developed more than 10 web applications</Li>
        <Li>Certified JavaScript, HTML, CSS, React, and NodeJS developer</Li>
        <Li>
          Possess in-depth knowledge and expertise in architecture,
          construction, and planning operations.
        </Li>
        <Li>
          The architectural background offers the perspective to explore and the
          skill to create beauty while enhancing project management
          capabilities, attention to detail, and problem-solving abilities.
        </Li>
        <Li>
          Committed to continuous learning and expanding knowledge in Computer
          Science and Information Technology
        </Li>
        <Li>Australia Permanent Resident</Li>
      </Ul>
    </Column>
  );
}

export default Profile;
