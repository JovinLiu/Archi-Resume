import Column from "../../UI/Column";
import Li from "../../UI/Li";
import Row from "../../UI/Row";
import Ul from "../../UI/Ul";

function Exp5() {
  return (
    <Column className="border-y-2 border-sky-200">
      <Column>
        <Row className="justify-between">
          <span>
            <strong>Experienced Graduate Architect</strong>
          </span>
          <span>Nov 2023 - Present (1 year 1 months)</span>
        </Row>
        <Row className="justify-between text-xs text-gray-400">
          <span>Freelancing</span>
          <span>Melbourne, Australia</span>
        </Row>
      </Column>
      <Ul className="list-inside pl-4 text-gray-600">
        <Li>
          Developed three high density modular multi-unit residential projects
          located in Lilydale and Haidelburg.
        </Li>
        <Li>
          Preparing town planning application documents and particcipating in
          the regular design meeting with council planners.
        </Li>
      </Ul>
    </Column>
  );
}

export default Exp5;
