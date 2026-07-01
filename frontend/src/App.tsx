import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        <Sidebar />
        <main className="min-h-screen flex-1">
          <TopBar />
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
