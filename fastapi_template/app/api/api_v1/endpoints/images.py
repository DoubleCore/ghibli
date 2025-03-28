import os
import uuid
from typing import List
from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile, status
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.image import Image
from app.schemas.image import ImageResponse, ImageCreate, ImageUpdate
from app.services.image_processing import process_image

router = APIRouter()


@router.post("/upload/", response_model=ImageResponse)
async def upload_image(
    file: UploadFile = File(...),
    user_id: str = Form(None),
    db: Session = Depends(get_db),
):
    # Validate file is an image
    if not file.content_type.startswith("image/"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="File must be an image",
        )
    
    # Create directory if it doesn't exist
    original_dir = os.path.join("app", "static", "images")
    processed_dir = os.path.join("app", "static", "processed_images")
    os.makedirs(original_dir, exist_ok=True)
    os.makedirs(processed_dir, exist_ok=True)
    
    # Generate unique filenames
    file_ext = os.path.splitext(file.filename)[1]
    unique_id = str(uuid.uuid4())
    original_filename = f"{unique_id}{file_ext}"
    original_path = os.path.join(original_dir, original_filename)
    
    # Save original image
    with open(original_path, "wb") as f:
        file_content = await file.read()
        f.write(file_content)
    
    # Create db record
    db_image = Image(
        user_id=user_id,
        original_path=f"/static/images/{original_filename}",
        status="processing"
    )
    db.add(db_image)
    db.commit()
    db.refresh(db_image)
    
    # Process image asynchronously (in a real app, this would be a background task)
    processed_filename = f"{unique_id}_processed{file_ext}"
    processed_path = os.path.join(processed_dir, processed_filename)
    
    success, result = await process_image(file_content, processed_path)
    
    # Update database with processed image path
    if success:
        db_image.processed_path = f"/static/processed_images/{processed_filename}"
        db_image.status = "completed"
    else:
        db_image.status = "failed"
    
    db.commit()
    db.refresh(db_image)
    
    return db_image


@router.get("/", response_model=List[ImageResponse])
def get_images(
    user_id: str = None,
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
):
    query = db.query(Image)
    if user_id:
        query = query.filter(Image.user_id == user_id)
    
    images = query.order_by(Image.created_at.desc()).offset(skip).limit(limit).all()
    return images


@router.get("/{image_id}", response_model=ImageResponse)
def get_image(
    image_id: int,
    db: Session = Depends(get_db),
):
    image = db.query(Image).filter(Image.id == image_id).first()
    if not image:
        raise HTTPException(status_code=404, detail="Image not found")
    return image