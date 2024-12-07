import Column from "../../UI/Column";
import Li from "../../UI/Li";
import Row from "../../UI/Row";
import Ul from "../../UI/Ul";

function Exp2() {
  return (
    <Column className="border-y-2 border-sky-200">
      <Row className="justify-between">
        <span>
          <strong>Project Coordinator</strong>
        </span>
        <span>May 2018 - Sep 2019 (1 Year 5 months)</span>
      </Row>
      <Row className="justify-between text-xs text-gray-400">
        <span>CS Town Planning Pty Ltd</span>
        <span>Melbourne, Australia</span>
      </Row>
      <Ul className="pl-4 text-gray-600">
        <Li>Schematic Design and Design Development</Li>
        <Li>Town Planning Application</Li>
        <Li>Construction Documentation in ArchiCAD for Building Permit</Li>
        <Li>Liaising Clients, Authorities and Consultants</Li>
      </Ul>
    </Column>
  );
}

export default Exp2;
