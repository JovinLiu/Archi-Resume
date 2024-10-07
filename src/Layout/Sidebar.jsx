import Column from "../UI/Column";
import Basic from "../Components/Basic";
import NameAndTitle from "../Components/NameAndTitle";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Portfolio from "../Components/Portfolio";

function Sidebar() {
  return (
    <aside className="flex h-full w-[65mm] flex-col bg-indigo-100 p-4 text-xs">
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
