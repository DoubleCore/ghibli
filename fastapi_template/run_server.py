import uvicorn
import os
from app.db.base_class import Base
from app.db.session import engine

# Create database tables
Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    # Create necessary directories
    os.makedirs(os.path.join("app", "static", "images"), exist_ok=True)
    os.makedirs(os.path.join("app", "static", "processed_images"), exist_ok=True)
    
    # Run the FastAPI server
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)