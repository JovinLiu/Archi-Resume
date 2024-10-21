import Column from "../UI/Column";
import Title from "../UI/Title";

function Certificate() {
  return (
    <Column className="gap-2">
      <Title type="primary">Certificates</Title>
      {/* <Ul className="list-none gap-1 border-indigo-200 pl-4"> */}
      <Column className="leading-1 gap-1 text-xs">
        <a
          className="text-gray-900 underline"
          href="https://www.udemy.com/certificate/UC-a1c37ebb-4bf5-4e3c-93f9-ef7bea40015b/"
          target="_blank"
        >
          Udemy | JavaScript Course Certificate
        </a>
        <a
          className=" text-gray-900 underline"
          href="https://www.udemy.com/certificate/UC-a1c37ebb-4bf5-4e3c-93f9-ef7bea40015b/"
          target="_blank"
        >
          Udemy | HTML/CSS Course Certificate
        </a>
        <a
          className=" text-gray-900 underline"
          href="https://www.udemy.com/certificate/UC-4f5dcd67-200d-4667-98d3-d92bcf6d9123/"
          target="_blank"
        >
          Udemy | React Course Certificate.
        </a>
        <a
          className=" text-gray-900 underline"
          target="_blank"
          href="https://www.udemy.com/certificate/UC-1eebd3e7-1856-4f7d-8835-c3a9bbf19c2d/"
        >
          Udemy | Node.js Certificate.
        </a>
      </Column>
      {/* </Ul> */}
    </Column>
  );
}

export default Certificate;
