// components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menus', label: 'Menus' },
    { path: '/restaurants', label: 'Restaurants' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-bold text-red-800 hover:text-red-700 transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            RestaurantFinder
          </Link>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 relative ${
                    isActiveLink(link.path)
                      ? 'text-red-800 font-semibold'
                      : 'text-gray-700 hover:text-red-800 hover:bg-gray-50 rounded-md'
                  }`}
                >
                  {link.label}
                  {isActiveLink(link.path) && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link 
              to="/login" 
              className="px-4 py-2 border border-gray-800 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="px-4 py-2 bg-red-800 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-all duration-200"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden flex flex-col space-y-1 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`w-5 h-0.5 bg-gray-800 transition-all duration-200 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`w-5 h-0.5 bg-gray-800 transition-all duration-200 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-5 h-0.5 bg-gray-800 transition-all duration-200 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-200 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 opacity-100 py-2' : 'max-h-0 opacity-0'
        } border-t border-gray-200`}>
          <div className="flex flex-col space-y-1">
            {/* Mobile Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActiveLink(link.path)
                    ? 'text-red-600 bg-red-50 font-semibold border-l-2 border-red-600'
                    : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                }`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Auth Buttons */}
            <div className="flex space-x-2 pt-3 border-t border-gray-200 mt-2">
              <Link 
                to="/login" 
                className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium text-center hover:bg-gray-50 transition-all duration-200"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="flex-1 px-3 py-2 bg-red-600 text-white rounded-md text-sm font-medium text-center hover:bg-red-700 transition-all duration-200"
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;