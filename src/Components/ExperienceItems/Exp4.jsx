import Column from "../../UI/Column";
import Li from "../../UI/Li";
import Row from "../../UI/Row";
import Ul from "../../UI/Ul";

function Exp4() {
  return (
    <Column className="border-y-2 border-sky-200">
      <Column>
        <Row className="justify-between">
          <span>
            <strong>Experienced Graduate Architect</strong>
          </span>
          <span>May 2023 - Nov 2023 (7 Months)</span>
        </Row>
        <Row className="justify-between text-xs text-gray-400">
          <span>Hainan Design and Research Institute Co Ltd</span>
          <span>Hainan, China</span>
        </Row>
      </Column>
      <Ul className="list-inside pl-4 text-gray-600">
        <Li>
          Participated in the design and development of large-scale educational,
          residential, and public projects.
        </Li>
        <Li>
          Integrated Stable Diffusion to generate 3D architectural renderings
          and utilized ChatGPT to create design documents as part of the
          architectural design workflow.
        </Li>
      </Ul>
    </Column>
  );
}

export default Exp4;
