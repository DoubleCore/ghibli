from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

class User(BaseModel):
    id: str
    email: str
    name: str = None
    
@router.get("/me")
async def get_current_user(token: str = Depends(oauth2_scheme)):
    # This is a simplified version - in a real application, you would validate 
    # the token and retrieve the actual user data
    # For now, we'll just return a mock user based on the token
    try:
        # Mock user data - in production this would validate the token
        user = User(id=token, email=f"{token}@example.com")
        return user
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )