const Sidebar = () => {
  const items = ["Dashboard", "Agents", "Memory", "Knowledge", "Projects", "Analytics", "Settings"];

  return (
    <aside className="h-screen w-72 border-r border-white/10 bg-slate-900/80 p-5 backdrop-blur-xl">
      <div className="mb-8">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-xl font-bold">
          A
        </div>
        <h1 className="text-2xl font-bold">Aegis OS</h1>
        <p className="text-sm text-slate-400">Agentic AI Operating System</p>
      </div>

      <nav className="space-y-2">
        {items.map((item, index) => (
          <button
            key={item}
            className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
              index === 0
                ? "bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400/30"
                : "text-slate-300 hover:bg-white/10"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="mt-10 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4">
        <p className="text-sm font-bold text-emerald-300">? System Online</p>
        <p className="text-xs text-slate-400">FastAPI backend ready</p>
      </div>
    </aside>
  );
};

export default Sidebar;
