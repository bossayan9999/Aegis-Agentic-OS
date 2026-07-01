from fastapi import FastAPI, WebSocket, WebSocketDisconnect, UploadFile, File, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pathlib import Path
import uuid
import datetime

from core.loop_engine import run_agentic_loop, AGENTS

BASE = Path(__file__).resolve().parent
UPLOAD_DIR = BASE / "data" / "uploads"
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

app = FastAPI(title="Aegis Agentic OS", version="2.0")

app.mount("/static", StaticFiles(directory=str(BASE / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE / "templates"))


@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "agents": AGENTS,
        },
    )


@app.get("/api/status")
async def api_status():
    return {
        "ok": True,
        "status": "online",
        "name": "Aegis Agentic OS",
        "version": "2.0",
        "agents": len(AGENTS),
        "time": datetime.datetime.now().isoformat(),
    }


@app.get("/api/agents")
async def api_agents():
    return {
        "ok": True,
        "agents": AGENTS,
    }


@app.post("/api/loop/start")
async def api_loop_start(payload: dict):
    task = payload.get("task", "").strip()
    loops = int(payload.get("loops", 1))
    mode = payload.get("mode", "balanced")

    if not task:
        return JSONResponse(
            status_code=400,
            content={
                "ok": False,
                "message": "Task is required",
            },
        )

    events = []

    async for event in run_agentic_loop(
        task=task,
        loops=loops,
        mode=mode,
    ):
        events.append(event)

    return {
        "ok": True,
        "task": task,
        "loops": loops,
        "mode": mode,
        "events": events,
        "time": datetime.datetime.now().isoformat(),
    }


@app.post("/api/upload")
async def upload(file: UploadFile = File(...)):
    safe_name = file.filename.replace("/", "_").replace("\\", "_")
    target = UPLOAD_DIR / f"{uuid.uuid4().hex[:8]}_{safe_name}"

    target.write_bytes(await file.read())

    return {
        "ok": True,
        "filename": safe_name,
        "stored_as": target.name,
        "size": target.stat().st_size,
    }


@app.websocket("/ws/run")
async def ws_run(websocket: WebSocket):
    await websocket.accept()

    try:
        payload = await websocket.receive_json()
        task = payload.get("task", "").strip()
        loops = int(payload.get("loops", 3))
        mode = payload.get("mode", "balanced")

        if not task:
            await websocket.send_json(
                {
                    "type": "error",
                    "message": "Please enter a task first.",
                }
            )
            return

        async for event in run_agentic_loop(
            task=task,
            loops=loops,
            mode=mode,
        ):
            await websocket.send_json(event)

        await websocket.send_json(
            {
                "type": "done",
                "time": datetime.datetime.now().isoformat(),
            }
        )

    except WebSocketDisconnect:
        return

    except Exception as e:
        await websocket.send_json(
            {
                "type": "error",
                "message": str(e),
            }
        )