import AgentCard from "../components/AgentCard";
import Workflow from "../components/Workflow";
import Terminal from "../components/Terminal";
import MemoryPanel from "../components/MemoryPanel";
import type { LoopEvent } from "../hooks/useAgentLoop";

type DashboardProps = {
  events: LoopEvent[];
  running: boolean;
};

const Dashboard = ({ events, running }: DashboardProps) => {
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
          Live WebSocket agent workflow is now connected.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-4 gap-5">
        <AgentCard name="Planner" status={running ? "Running" : "Ready"} score="98%" />
        <AgentCard name="Memory" status={running ? "Running" : "Ready"} score="92%" />
        <AgentCard name="Reasoning" status={running ? "Running" : "Ready"} score="95%" />
        <AgentCard name="Critic" status={running ? "Running" : "Idle"} score="89%" />
      </div>

      <div className="mb-8">
        <Workflow events={events} />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <Terminal events={events} />
        <MemoryPanel />
      </div>
    </section>
  );
};

export default Dashboard;