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
          Participated in the design and construction documentation of
          medium-scale hospitality and residential projects, including the
          Studley Park Boathouse, Yarra Botanica Floating Bar, Tanner Grove
          Townhouse, and Public House in Richmond.
        </Li>
        <Li>
          Prepared exterior and interoir visual presentations using ArchiCAD's
          built-in rendering software and the Adobe Creative Suite.
        </Li>
      </Ul>
    </Column>
  );
}

export default Exp3;
