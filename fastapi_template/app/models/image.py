from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from app.db.base_class import Base


class Image(Base):
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, index=True)
    original_path = Column(String, nullable=False)
    processed_path = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    status = Column(String, default="pending")  # pending, processing, completed, failed