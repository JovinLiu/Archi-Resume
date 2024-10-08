import Experience from "./Layout/Experience";
import Sidebar from "./Layout/Sidebar";
import Column from "./UI/Column";

function App() {
  function handleClick() {
    const link = document.createElement("a");
    link.href = "/Resume-Jovin-Liu-Full-Stack.pdf";
    link.download = "Resume-Jovin-Liu-Full-Stack.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <Column>
      <button
        className="h-10 bg-sky-200 transition-all hover:bg-sky-500 hover:text-white"
        onClick={handleClick}
      >
        DOWNLOAD RESUME
      </button>
      <main className="flex flex-row justify-center">
        <div className="bg-black-400 flex h-[297mm] w-[210mm] flex-row">
          <Sidebar />
          <Experience />
        </div>
      </main>
    </Column>
  );
}

export default App;
