import Experience from "./Layout/Experience";
import Sidebar from "./Layout/Sidebar";

function App() {
  return (
    <main className="flex flex-row justify-center">
      <div className="bg-black-400 flex h-[297mm] w-[210mm] flex-row">
        <Sidebar />
        <Experience />
      </div>
    </main>
  );
}

export default App;
