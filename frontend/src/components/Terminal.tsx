const Terminal = () => {
  const logs = [
    "[System] Aegis dashboard initialized",
    "[Planner] Waiting for task input",
    "[Memory] Local memory module ready",
    "[Agent Engine] Standing by",
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-5 font-mono text-sm">
      <h3 className="mb-4 font-sans text-lg font-bold">Terminal</h3>
      <div className="space-y-2 text-emerald-300">
        {logs.map((log) => (
          <p key={log}>{log}</p>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
