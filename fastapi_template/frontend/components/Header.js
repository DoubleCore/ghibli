import React from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-ghibli-blue cursor-pointer">
                Ghiblipic Transfer
              </span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-4">
            {session ? (
              <div className="flex items-center space-x-4">
                <div className="text-sm font-medium text-gray-700">
                  {session.user.name}
                </div>
                <button
                  onClick={() => signOut()}
                  className="text-gray-800 hover:text-gray-600"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn('google')}
                className="bg-ghibli-blue hover:bg-blue-600 text-white font-medium py-1.5 px-3 rounded-md"
              >
                Sign in
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;