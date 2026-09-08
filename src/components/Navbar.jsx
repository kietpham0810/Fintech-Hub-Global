import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const navItems = [
  { name: 'Home', path: '/' },
  {
    name: 'Services',
    children: [
      { name: 'Business Services', path: '/business-services' },
      { name: 'Individual Services', path: '/individual-services' },
    ],
  },
  { name: 'About us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // menu mobile
  const [servicesOpen, setServicesOpen] = useState(false); // dropdown desktop
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const closeAll = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 lg:px-8 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-12">
          <Link to="/" onClick={closeAll}>
            <img src={logo} alt="DatumAI Logo" className="w-[150px] h-auto object-contain" />
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex items-center gap-1 hover:text-[#008899] transition-colors"
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 top-full mt-3 w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          onClick={closeAll}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#008899] hover:bg-gray-50 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="hover:text-[#008899] transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
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
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name}>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full flex items-center justify-between text-base font-medium text-gray-700 hover:text-[#008899] hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
                >
                  {item.name}
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="flex flex-col pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        onClick={closeAll}
                        className="block text-sm font-medium text-gray-600 hover:text-[#008899] hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeAll}
                className="block text-base font-medium text-gray-700 hover:text-[#008899] hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
