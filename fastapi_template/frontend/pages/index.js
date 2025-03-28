import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import ImageUploader from '../components/ImageUploader';
import { useSession, signIn } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  const [originalImage, setOriginalImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleImageUpload = async (file) => {
    if (!file) return;

    setLoading(true);
    setError('');
    setProcessedImage(null);
    
    // Show preview of original image
    setOriginalImage(URL.createObjectURL(file));
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      // Add user ID if user is logged in
      if (session?.user?.id) {
        formData.append('user_id', session.user.id);
      }
      
      const response = await fetch('/api/process-image', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      
      const result = await response.json();
      setProcessedImage(`http://localhost:8000${result.processed_path}`);
    } catch (err) {
      console.error('Error processing image:', err);
      setError('Failed to process the image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Ghiblipic Transfer</title>
        <meta name="description" content="Transform your photos into Ghibli-style artwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-ghibli-blue">
          Ghiblipic Transfer
        </h1>
        
        <p className="text-xl text-center mb-10 max-w-2xl">
          Transform your photos into beautiful Ghibli-style artwork with our AI-powered tool.
        </p>
        
        {!session ? (
          <div className="mb-8 text-center">
            <p className="mb-4">Sign in to save your transformations</p>
            <button
              onClick={() => signIn('google')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Sign in with Google
            </button>
          </div>
        ) : (
          <p className="mb-8 text-center">
            Welcome, {session.user.name}! Your transformations will be saved to your account.
          </p>
        )}
        
        <ImageUploader onImageUpload={handleImageUpload} />
        
        {error && (
          <div className="mt-6 text-red-500 text-center">{error}</div>
        )}
        
        {loading && (
          <div className="mt-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ghibli-blue mx-auto"></div>
            <p className="mt-4 text-lg">Transforming your image...</p>
          </div>
        )}
        
        {(originalImage || processedImage) && (
          <div className="mt-10 w-full max-w-4xl">
            <h2 className="text-2xl font-semibold mb-6 text-center">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {originalImage && (
                <div className="flex flex-col items-center">
                  <h3 className="text-lg font-medium mb-3">Original</h3>
                  <div className="border border-gray-300 rounded-lg overflow-hidden">
                    <img 
                      src={originalImage} 
                      alt="Original" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              )}
              
              {processedImage && (
                <div className="flex flex-col items-center">
                  <h3 className="text-lg font-medium mb-3">Ghibli Style</h3>
                  <div className="border border-gray-300 rounded-lg overflow-hidden">
                    <img 
                      src={processedImage} 
                      alt="Processed" 
                      className="w-full h-auto"
                    />
                  </div>
                  <a 
                    href={processedImage}
                    download="ghibli-style.jpg"
                    className="mt-4 bg-ghibli-green hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg"
                  >
                    Download
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}