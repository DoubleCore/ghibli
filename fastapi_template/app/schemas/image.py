from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class ImageBase(BaseModel):
    user_id: Optional[str] = None


class ImageCreate(ImageBase):
    original_path: str
    processed_path: Optional[str] = None


class ImageResponse(ImageBase):
    id: int
    original_path: str
    processed_path: Optional[str] = None
    created_at: datetime
    status: str

    class Config:
        orm_mode = True


class ImageUpdate(BaseModel):
    processed_path: Optional[str] = None
    status: Optional[str] = None