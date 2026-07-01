const MemoryPanel = () => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="mb-4 text-lg font-bold">Memory</h3>
      <div className="space-y-3 text-sm text-slate-300">
        <p>Working Memory: Ready</p>
        <p>Session Memory: Empty</p>
        <p>Long-Term Memory: Pending</p>
      </div>
    </div>
  );
};

export default MemoryPanel;
