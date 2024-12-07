import Column from "../UI/Column";
import Text from "../UI/Text";
import Title from "../UI/Title";

function Skills() {
  return (
    <Column className="gap-4">
      <Title type="primary">Software Skills</Title>
      <Column>
        <Text type="secondary" className="uppercase">
          BIM and CAD
        </Text>
        <Text type="tertiary" className="leading-5">
          ArchiCAD, AutoCAD, Revit
        </Text>
      </Column>
      <Column>
        <Text type="secondary" className="uppercase">
          Modeling
        </Text>
        <Text type="tertiary" className="leading-5">
          SketchUp, Rhinoceros, Grasshopper
        </Text>
      </Column>
      <Column>
        <Text type="secondary" className="uppercase">
          Adobe Creative Suite
        </Text>
        <Text type="tertiary" className="leading-5">
          Photoshop, Illustrator, Indesign
        </Text>
      </Column>
      <Column>
        <Text type="secondary" className="uppercase">
          Rendering Software
        </Text>
        <Text type="tertiary" className="leading-5">
          Enscape, D5 Render, Lumion, Artlantis Studio, Vray
        </Text>
      </Column>
      <Column>
        <Text type="secondary" className="uppercase">
          AI Assistance
        </Text>
        <Text type="tertiary" className="leading-5">
          Stable Diffusion, ChatGPT
        </Text>
      </Column>
    </Column>
  );
}

export default Skills;
