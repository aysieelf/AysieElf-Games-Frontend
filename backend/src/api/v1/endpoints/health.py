from datetime import datetime, UTC
from fastapi import APIRouter

from src.core.config import settings

router = APIRouter()

@router.get("/health", status_code=200)
async def health_check():
    return {
        "status": "healthy",
        "service": settings.PROJECT_NAME,
        "environment": "development" if settings.DEBUG else "production",
        "timestamp": datetime.now(UTC).isoformat()
    }