import Column from "../UI/Column";
import Basic from "../Components/Basic";
import NameAndTitle from "../Components/NameAndTitle";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Portfolio from "../Components/Portfolio";
// import Certificate from "../Components/Certificate";

function Sidebar() {
  return (
    <aside className="flex h-full w-[58mm] flex-col bg-sky-100 pl-4 pr-2 pt-4 text-sm">
      <Column className="gap-8">
        <NameAndTitle />
        <Basic />
        <Portfolio />
        <Education />
        <Skills />
        {/* <Certificate /> */}
      </Column>
    </aside>
  );
}

export default Sidebar;
