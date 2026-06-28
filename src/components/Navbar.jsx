import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-3 flex items-center sticky top-0 z-50">
      
      {/* Logo Section */}
      <div className="mr-10">
        <a href="/">
          <img src={logo} alt="DatumAI Logo" className="w-[100px] h-auto" />
        </a>
      </div>
      
      {/* Menu Navigation - Giống Upwork với các dấu mũi tên */}
      <div className="flex items-center gap-8 text-sm font-medium text-gray-700">
        <a href="#" className="flex items-center gap-1 hover:text-black">Platform ▾</a>
        <a href="#" className="flex items-center gap-1 hover:text-black">Solutions ▾</a>
        <a href="#" className="flex items-center gap-1 hover:text-black">Pricing ▾</a>
        <a href="#" className="hover:text-black">Resources</a>
      </div>

      {/* Spacer để đẩy các phần tử về phía bên phải giống Upwork */}
      <div className="flex-grow"></div>

      {/* Action Section */}
      <div className="flex items-center gap-4">
        <a href="#" className="text-sm font-semibold hover:text-gray-600">Sign In</a>
        <button className="border border-gray-300 px-5 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors">
          Start Free Trial
        </button>
      </div>
    </nav>
  );
};

export default Navbar;