import Column from "../UI/Column";
import Li from "../UI/Li";
import Title from "../UI/Title";
import Ul from "../UI/Ul";

function Certificate() {
  return (
    <Column>
      <Title type="primary">Certificates</Title>
      <Ul className="gap-1 border-y-2 border-indigo-200 pl-4">
        <Li>
          <a
            className="text-gray-600 underline"
            href="https://www.udemy.com/certificate/UC-a1c37ebb-4bf5-4e3c-93f9-ef7bea40015b/"
            target="_blank"
          >
            Udemy | JavaScript Course Certificate
          </a>
        </Li>
        <Li>
          <a
            className=" text-gray-600 underline"
            href="https://www.udemy.com/certificate/UC-a1c37ebb-4bf5-4e3c-93f9-ef7bea40015b/"
            target="_blank"
          >
            Udemy | HTML and CSS Course Certificate
          </a>
        </Li>
        <Li>
          <a
            className=" text-gray-600 underline"
            href="https://www.udemy.com/certificate/UC-4f5dcd67-200d-4667-98d3-d92bcf6d9123/"
            target="_blank"
          >
            Udemy | React, Context API, React Query, Redux, Tailwind
            Certificate.
          </a>
        </Li>
        <Li>
          <a
            className=" text-gray-600 underline"
            target="_blank"
            href="https://www.udemy.com/certificate/UC-1eebd3e7-1856-4f7d-8835-c3a9bbf19c2d/"
          >
            Udemy | Node.js Certificate.
          </a>
        </Li>
      </Ul>
    </Column>
  );
}

export default Certificate;
