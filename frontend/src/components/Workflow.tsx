const Workflow = () => {
  const steps = ["User", "Planner", "Memory", "Research", "Reasoning", "Critic", "Improve", "Verify", "Learn", "Output"];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-5 text-lg font-bold">AI Loop Workflow</h3>
      <div className="grid grid-cols-5 gap-3">
        {steps.map((step, index) => (
          <div
            key={step}
            className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-3 text-center text-sm font-semibold text-cyan-200"
          >
            {index + 1}. {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;
