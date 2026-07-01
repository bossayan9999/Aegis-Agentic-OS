import type { LoopEvent } from "../hooks/useAgentLoop";

type TerminalProps = {
  events?: LoopEvent[];
};

function formatEvent(event: LoopEvent) {
  if (event.type === "agent_step") {
    return `[${event.agent_name}] ${event.action} — ${event.output}`;
  }

  if (event.type === "final") {
    return `[Final] ${event.result}`;
  }

  if (event.type === "loop_end") {
    return `[Loop Complete] Quality: ${event.quality}`;
  }

  return `[${event.type}] ${event.message || event.output || JSON.stringify(event)}`;
}

const Terminal = ({ events = [] }: TerminalProps) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-5 font-mono text-sm">
      <h3 className="mb-4 font-sans text-lg font-bold">Live Terminal</h3>

      <div className="max-h-96 space-y-2 overflow-auto text-emerald-300">
        {events.length === 0 && <p>[System] Waiting for Start Loop...</p>}

        {events.map((event, index) => (
          <p key={index} className="whitespace-pre-wrap">
            {formatEvent(event)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Terminal;