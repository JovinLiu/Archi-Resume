import Column from "../UI/Column";
import Text from "../UI/Text";
import Title from "../UI/Title";

function Skills() {
  return (
    <Column className="gap-2">
      <Title type="primary" className="text-sky-500">
        Skills
      </Title>
      <Column>
        <Text type="secondary">Front-end</Text>
        <Text type="primary">
          HTML5, CSS3, JavaScript, React, Redux Toolkit, Sass, Tailwind CSS,
          Styled Components, React Router, React Query
        </Text>
      </Column>
      <Column>
        <Text type="secondary">Back-end</Text>
        <Text type="primary">NodeJS, Express</Text>
      </Column>
      <Column>
        <Text type="secondary">Database</Text>
        <Text type="primary">MongoDB, Mongoose, Supabase</Text>
      </Column>
      <Column>
        <Text type="secondary">Version Control</Text>
        <Text type="primary">Git</Text>
      </Column>
      <Column>
        <Text type="secondary">UI/UX</Text>
        <Text type="primary">Adobe Creative Suite</Text>
      </Column>
      <Column>
        <Text type="secondary">CI/CD</Text>
        <Text type="primary">Netlify, Vercel, Heroku, Render</Text>
      </Column>
      <Column>
        <Text type="secondary">API</Text>
        <Text type="primary">RESTful APIs, Postman</Text>
      </Column>
      <Column>
        <Text type="secondary">AI Assistance</Text>
        <Text type="primary">ChatGPT, Github Copilot</Text>
      </Column>
    </Column>
  );
}

export default Skills;
