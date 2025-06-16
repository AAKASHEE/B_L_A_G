import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white border-b-2 border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="group flex items-center space-x-3">
          <div className="relative w-12 h-12 bg-black rounded-xl shadow-lg border border-purple-600 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-[4deg] duration-300">
            <span className="text-purple-400 font-mono text-lg font-bold tracking-tight animate-pulse">
              {'</>'}
            </span>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-full animate-bounce" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-extrabold text-gray-900 tracking-widest group-hover:text-purple-600 transition-colors">
              CODEX
            </span>
            <span className="text-sm text-gray-500 font-mono tracking-tight group-hover:text-purple-400 transition-colors">
              dev toolkit
            </span>
          </div>
        </Link>



          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-indigo-600 ${
                  isActive(link.path)
                    ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-indigo-600 px-2 py-1 ${
                    isActive(link.path) ? 'text-indigo-600' : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-indigo-600 px-2 py-1 transition-colors duration-200">
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;