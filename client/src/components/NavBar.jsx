// components/Navbar.jsx
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const {openSignIn} = useClerk();
  const { user, isSignedIn } = useUser();
  const navigate = useNavigate()
    const location = useLocation();

  const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M304 70.1C313.1 61.9 326.9 61.9 336 70.1L568 278.1C577.9 286.9 578.7 302.1 569.8 312C560.9 321.9 545.8 322.7 535.9 313.8L527.9 306.6L527.9 511.9C527.9 547.2 499.2 575.9 463.9 575.9L175.9 575.9C140.6 575.9 111.9 547.2 111.9 511.9L111.9 306.6L103.9 313.8C94 322.6 78.9 321.8 70 312C61.1 302.2 62 287 71.8 278.1L304 70.1zM320 120.2L160 263.7L160 512C160 520.8 167.2 528 176 528L224 528L224 424C224 384.2 256.2 352 296 352L344 352C383.8 352 416 384.2 416 424L416 528L464 528C472.8 528 480 520.8 480 512L480 263.7L320 120.3zM272 528L368 528L368 424C368 410.7 357.3 400 344 400L296 400C282.7 400 272 410.7 272 424L272 528z"/></svg>
  )


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
            {user ? 
            (<UserButton>
              <UserButton.MenuItems>
                <UserButton.Action label='My Orders' labelIcon={<BookIcon/>} onClick={ () => navigate('/orders') } />
              </UserButton.MenuItems>
            </UserButton>)
            :
            (<Link 
              // to="/login"
              onClick={openSignIn} 
              className="px-4 py-2 border border-gray-800 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
            >
              Login
            </Link>)  
          }
          </div>

          {/* Mobile Menu Button */}
         <div className="lg:hidden">
            {user && (
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action 
                    label="My Orders" 
                    labelIcon={<BookIcon/>} 
                    onClick={() => navigate('/orders')} 
                  />
                </UserButton.MenuItems>
              </UserButton>
            )}
        </div>
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
              {!user && <Link 
                to="/login" 
                className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium text-center hover:bg-gray-50 transition-all duration-200"
                onClick={openSignIn} 
              >
                Login
              </Link>}
              {/* <Link 
                to="/register" 
                className="flex-1 px-3 py-2 bg-red-600 text-white rounded-md text-sm font-medium text-center hover:bg-red-700 transition-all duration-200"
                onClick={closeMobileMenu}
              >
                Register
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;