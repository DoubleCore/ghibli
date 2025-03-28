// This is a proxy API to forward requests to the FastAPI backend
import axios from 'axios';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const session = await getSession({ req });
    
    // Create FormData from the incoming request
    const formData = new FormData();
    const { file } = req.body;
    formData.append('file', file);
    
    // Add user ID if available
    if (session?.user?.id) {
      formData.append('user_id', session.user.id);
    }

    // Send request to FastAPI backend
    const response = await axios.post(
      'http://localhost:8000/api/v1/images/upload/',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return res.status(200).json(response.data);
  } catch (error) {
    console.error('Error processing image:', error);
    return res.status(500).json({ 
      message: 'Error processing image', 
      error: error.message 
    });
  }
}