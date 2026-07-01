import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Dashboard from "./pages/Dashboard";
import { useAgentLoop } from "./hooks/useAgentLoop";

function App() {
  const { events, running, startLoop } = useAgentLoop();

  const handleStartLoop = () => {
    console.log("Start Loop clicked");
    startLoop("Build an AI Operating System");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        <Sidebar />

        <main className="flex-1">
          <TopBar
            onStartLoop={handleStartLoop}
            running={running}
          />

          <Dashboard
            events={events}
            running={running}
          />
        </main>
      </div>
    </div>
  );
}

export default App;