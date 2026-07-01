const TopBar = () => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 bg-slate-950/70 px-8 backdrop-blur-xl">
      <div>
        <h2 className="text-xl font-bold">Dashboard</h2>
        <p className="text-sm text-slate-400">Live multi-agent command center</p>
      </div>

      <div className="flex items-center gap-3">
        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          Model: Local Simulation
        </span>
        <button className="rounded-xl bg-cyan-500 px-5 py-2 font-bold text-slate-950 hover:bg-cyan-400">
          Start Loop
        </button>
      </div>
    </header>
  );
};

export default TopBar;
