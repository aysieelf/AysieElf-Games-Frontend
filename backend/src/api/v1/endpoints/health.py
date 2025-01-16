from datetime import datetime
from fastapi import APIRouter

router = APIRouter()

@router.get("/health", status_code=200)
async def health_check():
    return {"status": "ok", "time_stamp": datetime.now().isoformat()}

