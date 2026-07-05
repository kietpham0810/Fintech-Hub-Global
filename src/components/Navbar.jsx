import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-4 lg:px-8 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        
        <div className="flex items-center gap-12">
          <Link to="/">
            <img src={logo} alt="DatumAI Logo" className="w-[150px] h-auto object-contain" />
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="hover:text-[#008899] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-600 hover:text-[#008899] focus:outline-none p-2 rounded-md hover:bg-gray-50 transition-colors"
          >
            {!isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t border-gray-100 flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={() => setIsOpen(false)} 
              className="block text-base font-medium text-gray-700 hover:text-[#008899] hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;