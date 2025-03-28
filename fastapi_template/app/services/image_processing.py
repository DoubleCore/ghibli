import os
import torch
import torch.nn as nn
import torchvision.transforms as transforms
from PIL import Image
import numpy as np
from io import BytesIO
import time
import uuid
from pathlib import Path

# Simplified Ghibli-style filter using color palette adjustment
class GhibliStyleTransfer:
    def __init__(self):
        # Define Ghibli color palette (pastel colors commonly found in Ghibli films)
        self.ghibli_palette = [
            (131, 196, 192),  # Soft teal
            (237, 201, 81),   # Pale yellow
            (219, 138, 161),  # Soft pink
            (141, 170, 203),  # Light blue
            (187, 219, 185),  # Mint green
            (233, 185, 110),  # Peach
            (199, 143, 142),  # Dusty rose
            (181, 200, 225)   # Sky blue
        ]
    
    def process_image(self, image):
        # Convert to numpy array and work with RGB
        img_array = np.array(image)
        h, w, c = img_array.shape
        
        # Apply color adjustments to make it more Ghibli-like
        # Increase saturation slightly
        hsv = np.array(Image.fromarray(img_array).convert('HSV'))
        hsv[:,:,1] = hsv[:,:,1] * 1.2  # Increase saturation
        saturated = np.array(Image.fromarray(hsv.astype('uint8'), 'HSV').convert('RGB'))
        
        # Soften the image (slight blur to mimic hand-drawn look)
        blurred = np.array(Image.fromarray(saturated).filter(
            Image.BLUR).filter(Image.SMOOTH))
        
        # Adjust contrast for painterly effect
        enhanced = np.clip((blurred - 128) * 1.1 + 128, 0, 255).astype(np.uint8)
        
        return Image.fromarray(enhanced)


async def process_image(image_data, output_path):
    """Process an image to give it a Ghibli-style appearance"""
    try:
        # Open the image
        image = Image.open(BytesIO(image_data))
        
        # Resize if too large while maintaining aspect ratio
        max_size = 1024
        if max(image.size) > max_size:
            ratio = max_size / max(image.size)
            new_size = (int(image.size[0] * ratio), int(image.size[1] * ratio))
            image = image.resize(new_size, Image.LANCZOS)
        
        # Apply Ghibli style transformation
        processor = GhibliStyleTransfer()
        processed_image = processor.process_image(image)
        
        # Save the processed image
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        processed_image.save(output_path)
        
        return True, output_path
    except Exception as e:
        print(f"Error processing image: {e}")
        return False, str(e)