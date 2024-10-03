import Column from "../UI/Column";
import Basic from "../Components/Basic";
import NameAndTitle from "../Components/NameAndTitle";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Portfolio from "../Components/Portfolio";

function Sidebar() {
  return (
    <aside className="flex h-full w-[70mm] flex-col bg-neutral-300 p-4 text-sm">
      <Column className="mt-4 gap-6">
        <NameAndTitle />
        <Basic />
        <Portfolio />
        <Education />
        <Skills />
      </Column>
    </aside>
  );
}

export default Sidebar;
