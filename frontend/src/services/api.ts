const API_URL = "http://127.0.0.1:8000";

export async function getStatus() {
  const response = await fetch(`${API_URL}/api/status`);
  return response.json();
}

export async function startLoop(task: string) {
  const response = await fetch(`${API_URL}/api/loop/start`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      task,
      loops: 1,
      mode: "balanced",
    }),
  });

  if (!response.ok) {
    throw new Error(`Backend error: ${response.status}`);
  }

  return response.json();
}