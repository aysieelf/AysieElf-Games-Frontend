from datetime import datetime

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

# Cross-Origin Resource Sharing
# Example: http://localhost:3000 <=> http://localhost:8000
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health", status_code=200)
async def health_check():
    return {"status": "ok", "time_stamp": datetime.now().isoformat()}
