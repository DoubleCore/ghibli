import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-8 sm:px-6">
        {children}
      </div>
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Ghiblipic Transfer. Transform your photos into Ghibli-style artwork.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;