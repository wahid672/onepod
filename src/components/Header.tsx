import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Package, LogIn } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">
              Easy<span className="text-indigo-600">Deploy</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`transition-colors duration-200 ${
                location.pathname === '/' 
                  ? 'text-indigo-600 font-medium' 
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/templates" 
              className={`transition-colors duration-200 ${
                location.pathname === '/templates' 
                  ? 'text-indigo-600 font-medium' 
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Templates
            </Link>
            <a href="/#pricing" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
              Pricing
            </a>
            <a href="/#features" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
              Features
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/login"
              className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200"
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
            <Link 
              to="/register"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;