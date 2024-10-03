import Experience from "./Layout/Experience";
import Sidebar from "./Layout/Sidebar";

function App() {
  return (
    <main className="flex h-[297mm] flex-row justify-center bg-neutral-500">
      <div className="bg-black-400 flex h-[297mm] w-[210mm] flex-row">
        <Sidebar />
        <Experience />
      </div>
    </main>
  );
}

export default App;
