import Column from "../UI/Column";
import Li from "../UI/Li";
import Title from "../UI/Title";
import Ul from "../UI/Ul";

function Profile() {
  return (
    <Column className="mt-0">
      <Title type="primary">Profile</Title>
      <Ul className="leading-1 border-y-2 border-sky-200 pl-4 text-gray-600">
        <Li>5 year plus of graduate architect and draftsperson experience</Li>
        <Li>
          Experienced a wide range of local residential projects, design
          development, client visual presentation, documentation. including and
          building permit application
        </Li>
        <Li>
          Experienced various local hospitality project and interior design.
        </Li>
        <Li>Experienced large scale projects located in China.</Li>
        <Li>
          Communication with council planner for town planning permit and
          building surveyor for building permit
        </Li>
        <Li>Familiarity with Council Planning Scheme and Rescode</Li>
        <Li>Experienced various Australian Standards, NCC and BCA </Li>
        <Li>Proficient in ArchiCAD and AutoCad</Li>
        <Li>Have a good understanding of construction</Li>
        <Li>Australia Permanent Resident</Li>
      </Ul>
    </Column>
  );
}

export default Profile;
