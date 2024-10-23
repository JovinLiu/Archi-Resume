import Column from "../UI/Column";
import Li from "../UI/Li";
import Row from "../UI/Row";
import Title from "../UI/Title";
import Ul from "../UI/Ul";

function ExperienceDetail() {
  return (
    <div>
      <Title type="primary">Experience</Title>
      <Column
        className="gap-4
      "
      >
        <Column className="border-y-2 border-indigo-200">
          <Row className="justify-between">
            <span className="w-[65mm] text-left">
              <strong>Independent Full Stack Web Developer</strong>
            </span>
            <span>Nov 2023 - Present (1 year)</span>
          </Row>
          <Ul className="list-inside pl-4 text-gray-600">
            <Li>
              Developed dynamic web applications using both modern JavaScript
              and TypeScript frameworks (React) and vanilla Javascript to create
              responsive and interactive user interfaces.
            </Li>
            <Li>
              Effectively managed state in applications using various state
              management solutions, including Context API and Redux.
            </Li>
            <Li>
              Proficient in building RESTful APIs with Node.js and Express.js,
              ensuring seamless data communication across applications.
            </Li>
            <Li>
              Managed databases with MongoDB and Mongoose, ensuring optimal data
              storage, retrieval, and integrity.
            </Li>
            <Li>
              Integrated AI tools into development workflows, enhancing
              efficiency and improving problem-solving capabilities.
            </Li>
            <Li>
              Designed and implemented user-centered, responsive UI/UX
              interfaces using HTML and CSS, prioritizing aesthetics and
              intuitive user experiences.
            </Li>
            <Li>
              Automated development processes by setting up CI/CD pipelines,
              streamlining workflows, and reducing manual intervention.
            </Li>
            <Li>
              Managed the complete software development lifecycle, from
              requirements gathering and design to development, testing,
              deployment, and maintenance.
            </Li>
            <Li>
              Familiarity with Agile development methodologies and version
              control systems.
            </Li>
            <Li>
              Demonstrated strong project management skills by consistently
              delivering high-quality projects on schedule.
            </Li>
          </Ul>
        </Column>
        <Column className="border-y-2 border-indigo-200">
          <Column>
            <Row className="justify-between">
              <span>
                <strong>Graduate Architect</strong>
              </span>
              <span>May 2023 - Nov 2023 (7 Months)</span>
            </Row>
            <Row className="justify-between text-xs text-gray-400">
              <span>Hainan Design and Research Institute Co Ltd</span>
              <span>Hainan, China</span>
            </Row>
          </Column>

          <Ul className="pl-4 text-gray-600">
            <Li>
              Participated in the design and development of large-scale
              educational and residential projects.
            </Li>
            <Li>
              Incorporated Stable Diffusion for generating 3D architectural
              rendering images and utilized ChatGPT to produce design documents
              within the architectural design workflow.
            </Li>
          </Ul>
        </Column>
        <Column className="border-y-2 border-indigo-200">
          <Column>
            <Row className="justify-between">
              <span>
                <strong>Graduate Architect</strong>
              </span>
              <span>Sep 2019 - Sep 2021 (2 Years)</span>
            </Row>
            <Row className="justify-between text-xs text-gray-400">
              <span>Burton and Carter Architect Pty Ltd</span>
              <span>Melbourne, Australia</span>
            </Row>
          </Column>
          <Ul className="pl-4 text-gray-600">
            <Li>
              Managed different phase of residential and hospitality projects,
              from the initial design through to construction, using Adobe
              Creative Suite to create visualization images.
            </Li>
          </Ul>
        </Column>
        <Column className="border-y-2 border-indigo-200">
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
        </Column>
        <Column className="border-y-2 border-indigo-200">
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
        </Column>
      </Column>
    </div>
  );
}

export default ExperienceDetail;
