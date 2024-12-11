import Experience from "./Layout/Experience";
import Sidebar from "./Layout/Sidebar";
import Column from "./UI/Column";

function App() {

  return (
    <>
    <Column>
      <main className="flex flex-row justify-center">
        <div className="bg-black-400 flex h-[297mm] w-[210mm] flex-row">
          <Sidebar />
          <Experience />
        </div>
      </main>
    </Column>
    <Column>
      <main className="flex flex-row justify-center">
        <div className="bg-black-400 flex h-[297mm] w-[210mm] flex-row">
        {/* <Experience />
        <Sidebar /> */}
        </div>
      </main>
    </Column>
    </>
  );
}

export default App;
