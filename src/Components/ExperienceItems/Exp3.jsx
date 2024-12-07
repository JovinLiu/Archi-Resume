import Column from "../../UI/Column";
import Li from "../../UI/Li";
import Row from "../../UI/Row";
import Ul from "../../UI/Ul";

function Exp3() {
  return (
    <Column className="border-y-2 border-sky-200">
      <Column>
        <Row className="justify-between">
          <span>
            <strong>Graduate Architect</strong>
          </span>
          <span>Sep 2019 - Sep 2021 (2 years)</span>
        </Row>
        <Row className="justify-between text-xs text-gray-400">
          <span>Burton and Carter Architects</span>
          <span>Melbourne, Australia</span>
        </Row>
      </Column>

      <Ul className="pl-4 text-gray-600">
        <Li>
          Participated in the design and development of large-scale educational
          and residential projects.
        </Li>
        <Li>
          Incorporated Stable Diffusion for generating 3D architectural
          rendering images and utilized ChatGPT to produce design documents
          within the architectural design workflow.
        </Li>
      </Ul>
    </Column>
  );
}

export default Exp3;
