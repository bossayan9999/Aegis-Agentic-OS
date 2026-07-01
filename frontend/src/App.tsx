import { useState } from "react";

import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Dashboard from "./pages/Dashboard";

import { startLoop } from "./services/api";

function App() {
  const [result, setResult] = useState<any>(null);

  async function handleStartLoop() {
    try {
      const data = await startLoop("Build an AI Operating System");
      console.log(data);
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Unable to connect to backend.");
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        <Sidebar />

        <main className="flex-1">
          <TopBar onStartLoop={handleStartLoop} />

          <Dashboard result={result} />
        </main>
      </div>
    </div>
  );
}

export default App;