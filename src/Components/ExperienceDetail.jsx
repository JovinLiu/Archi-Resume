import Column from "../UI/Column";
import Li from "../UI/Li";
import Row from "../UI/Row";
import Title from "../UI/Title";
import Ul from "../UI/Ul";
import Exp1 from "./ExperienceItems/Exp1";
import Exp2 from "./ExperienceItems/Exp2";
import Exp3 from "./ExperienceItems/Exp3";
import Exp4 from "./ExperienceItems/Exp4";
import Exp5 from "./ExperienceItems/Exp5";

function ExperienceDetail() {
  return (
    <div>
      <Title type="primary">Experience</Title>
      <Column
        className="gap-4
      "
      >
        <Exp5 />
        <Exp4 />
        <Exp3 />
        <Exp2 />
        <Exp1 />
      </Column>
    </div>
  );
}

export default ExperienceDetail;
