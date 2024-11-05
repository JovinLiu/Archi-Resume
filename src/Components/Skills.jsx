import Column from "../UI/Column";
import Text from "../UI/Text";
import Title from "../UI/Title";

function Skills() {
  return (
    <Column className="gap-4">
      <Title type="primary">Skills</Title>
      <Column>
        <Text type="secondary" className="uppercase">
          Front-end
        </Text>
        <Text type="tertiary" className="leading-5">
          HTML5, JavaScript, TypeScript, React, Redux Toolkit, Next.js, React
          Router, React Query
        </Text>
      </Column>
      <Column>
        <Text type="secondary" className="uppercase">
          Styling
        </Text>
        <Text type="tertiary" className="leading-5">
          CSS3, Sass, Styled Components, Tailwind CSS,
        </Text>
      </Column>
      <Column>
        <Text type="secondary" className="uppercase">
          Back-end
        </Text>
        <Text type="tertiary" className="leading-5">
          NodeJS, Express
        </Text>
      </Column>
      <Column>
        <Text type="secondary" className="uppercase">
          Database
        </Text>
        <Text type="tertiary" className="leading-5">
          MongoDB, Mongoose, Supabase
        </Text>
      </Column>
      <Column>
        <Text type="secondary" className="uppercase">
          Version Control
        </Text>
        <Text type="tertiary" className="leading-5">
          Agile Methodology, Git
        </Text>
      </Column>
      <Column>
        <Text type="secondary" className="uppercase">
          UI/UX
        </Text>
        <Text type="tertiary" className="leading-5">
          Adobe Creative Suite
        </Text>
      </Column>
      <Column>
        <Text type="secondary" className="uppercase">
          CI/CD
        </Text>
        <Text type="tertiary" className="leading-5">
          Netlify, Vercel, Heroku, Render
        </Text>
      </Column>
      <Column>
        <Text type="secondary" className="uppercase">
          API
        </Text>
        <Text type="tertiary" className="leading-5">
          RESTful APIs, Postman
        </Text>
      </Column>
      <Column>
        <Text type="secondary" className="uppercase">
          AI Assistance
        </Text>
        <Text type="tertiary" className="leading-5">
          ChatGPT, Github Copilot
        </Text>
      </Column>
      <Column>
        <Text type="secondary" className="uppercase">
          Other Tools
        </Text>
        <Text type="tertiary" className="leading-5">
          Webpack, Vite
        </Text>
      </Column>
    </Column>
  );
}

export default Skills;
