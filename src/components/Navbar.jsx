import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  // Tập trung vào 3 menu chính theo yêu cầu
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-3 flex items-center justify-between sticky top-0 z-50">
      
      <div className="flex items-center gap-12">
        {/* Logo Section - Kích thước đã được tăng 1.5 lần (100px -> 150px) */}
        <a href="/">
          <img src={logo} alt="DatumAI Logo" className="w-[150px] h-auto object-contain" />
        </a>
        
        {/* Main Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.path} 
              className="hover:text-[#008899] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;