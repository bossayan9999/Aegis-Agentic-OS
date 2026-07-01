import { useState } from "react";

export type LoopEvent = {
  type: string;
  message?: string;
  agent?: string;
  status?: string;
  [key: string]: any;
};

export function useAgentLoop() {
  const [events, setEvents] = useState<LoopEvent[]>([]);
  const [running, setRunning] = useState(false);

  function startLoop(task: string) {
    console.log("Opening WebSocket...");
    setEvents([{ type: "system", message: "Connecting to WebSocket..." }]);
    setRunning(true);

    const ws = new WebSocket("ws://127.0.0.1:8000/ws/run");

    ws.onopen = () => {
      console.log("WebSocket connected");

      setEvents((prev) => [
        ...prev,
        { type: "system", message: "WebSocket connected." },
      ]);

      ws.send(
        JSON.stringify({
          task,
          loops: 1,
          mode: "balanced",
        })
      );
    };

    ws.onmessage = (message) => {
      console.log("WebSocket message:", message.data);

      const event = JSON.parse(message.data);

      setEvents((prev) => [...prev, event]);

      if (event.type === "done" || event.type === "error") {
        setRunning(false);
        ws.close();
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);

      setEvents((prev) => [
        ...prev,
        { type: "error", message: "WebSocket connection failed." },
      ]);

      setRunning(false);
    };

    ws.onclose = () => {
      console.log("WebSocket closed");

      setEvents((prev) => [
        ...prev,
        { type: "system", message: "WebSocket closed." },
      ]);

      setRunning(false);
    };
  }

  return { events, running, startLoop };
}