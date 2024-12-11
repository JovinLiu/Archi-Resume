import Column from "../../UI/Column";
import Li from "../../UI/Li";
import Row from "../../UI/Row";
import Ul from "../../UI/Ul";

function Exp1() {
  return (
    <Column className="border-y-2 border-sky-200">
      <Row className="justify-between">
        <span>
          <strong>Graduate Architect</strong>
        </span>
        <span>Feb 2017 - May 2018 (1 Year 4 months)</span>
      </Row>
      <Row className="justify-between text-xs text-gray-400">
        <span>Rationale Design</span>
        <span>Melbourne, Australia</span>
      </Row>
      <Ul className="pl-4 text-gray-600">
        <Li>
          Assisted the Principal Architect in converting drafts into CAD
          drawings and 3D models.
        </Li>
        <Li>
          Prepared Town Planning Applications and Construction Documentation for
          home extensions.
        </Li>
      </Ul>
    </Column>
  );
}

export default Exp1;
