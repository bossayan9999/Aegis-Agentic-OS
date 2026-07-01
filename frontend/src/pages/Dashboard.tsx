import AgentCard from "../components/AgentCard";
import Workflow from "../components/Workflow";
import Terminal from "../components/Terminal";
import MemoryPanel from "../components/MemoryPanel";

type DashboardProps = {
  result: any;
};

const Dashboard = ({ result }: DashboardProps) => {
  return (
    <section className="p-8">
      <div className="mb-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-cyan-300">
          Self-Learning Multi-Agent OS
        </p>

        <h1 className="max-w-4xl text-5xl font-black leading-tight">
          Launch AI agents, watch the loop, store the lesson.
        </h1>

        <p className="mt-4 max-w-2xl text-slate-400">
          Aegis coordinates planner, memory, research, reasoning, critique,
          improvement, verification, and learning agents.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-4 gap-5">
        <AgentCard name="Planner" status="Ready" score="98%" />
        <AgentCard name="Memory" status="Ready" score="92%" />
        <AgentCard name="Reasoning" status="Ready" score="95%" />
        <AgentCard name="Critic" status="Idle" score="89%" />
      </div>

      <div className="mb-8">
        <Workflow />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <Terminal />
        <MemoryPanel />
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border border-cyan-500/30 bg-slate-900 p-6">
          <h2 className="mb-4 text-xl font-bold text-cyan-300">
            Backend Response
          </h2>

          <pre className="max-h-96 overflow-auto text-sm text-green-300">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </section>
  );
};

export default Dashboard;