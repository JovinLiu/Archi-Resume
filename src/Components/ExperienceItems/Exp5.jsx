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
          <span>Freelancing, sub-contracted by Rationale Design</span>
          <span>Melbourne, Australia</span>
        </Row>
      </Column>
      <Ul className="list-inside pl-4 text-gray-800">
        <Li>
          Independently developed seven medium to high-density modular
          multi-unit residential projects listed below, ensuring the successful
          council approval of all submitted projects.
          <div className="pl-6 text-gray-400">
            <Li>
              17 Baker St, Lilydale
              <span>-- Maximum the yield of RGZ with 6 modular units</span>
            </Li>
            <Li>
              24 Kidgell St, Lilydale
              <span>-- Maximum the yield of RGZ with 6 modular units</span>
            </Li>
            <Li>
              7 Bowral Ct, Bundoora
              <span>-- Dual dwelling development</span>
            </Li>
            <Li>
              195 Nelson Rd, Lilydale<span>-- Triple dwelling development</span>
            </Li>
            <Li>
              28 Park Blvd, Ferntree Gully
              <span>-- Dual dwelling with detailed documentation</span>
            </Li>
            <Li>
              16 Highland Cres, Mooroolbark
              <span>-- Successful backyard subdivision</span>
            </Li>
            <Li>
              132-134 Southern Rd, Heidelburg
              <span>-- 12 modular townhouses development</span>
            </Li>
          </div>
        </Li>
        <Li>
          Prepared town planning application documents and actively participated
          in regular design meetings with council planners.
        </Li>
        <Li>
          Liaised with development managers, building surveyors, builders, and
          other consultants.
        </Li>
      </Ul>
    </Column>
  );
}

export default Exp5;
