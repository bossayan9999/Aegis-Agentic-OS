type AgentCardProps = {
  name: string;
  status: string;
  score: string;
};

const AgentCard = ({ name, status, score }: AgentCardProps) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-bold">{name}</h3>
        <span className="text-xs text-emerald-300">? {status}</span>
      </div>
      <p className="text-3xl font-black text-cyan-300">{score}</p>
      <p className="text-sm text-slate-400">Agent readiness score</p>
    </div>
  );
};

export default AgentCard;
