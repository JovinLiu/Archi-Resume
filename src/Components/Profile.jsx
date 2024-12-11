import Column from "../UI/Column";
import Li from "../UI/Li";
import Title from "../UI/Title";
import Ul from "../UI/Ul";

function Profile() {
  return (
    <Column className="mt-0">
      <Title type="primary">Profile</Title>
      <Ul className="leading-1 border-y-2 border-sky-200 pl-4 text-gray-600">
        <Li>
          Over 5 years of experience as a Graduate Architect and Draftsperson
        </Li>
        <Li>
          Extensive involvement in a wide range of local residential projects,
          including design development, client visual presentations, Town
          Planning Application, and documentation building permit applications
        </Li>
        <Li>
          Hands-on experience in local hospitality projects and interior design
        </Li>
        <Li>
          Participated in large-scale educational and cultural public projects
          based in China
        </Li>
        <Li>
          Liaising with council planners for town planning permits and with
          building surveyors for building permits
        </Li>
        <Li>Familiar with Council Planning Schemes and ResCode</Li>
        <Li>
          Experienced in applying Australian Standards, NCC, and BCA in projects
        </Li>
        <Li>Proficient in ArchiCAD and AutoCAD</Li>
        <Li>Strong understanding of construction principles</Li>
        <Li>Australia Permanent Resident</Li>
      </Ul>
    </Column>
  );
}

export default Profile;
