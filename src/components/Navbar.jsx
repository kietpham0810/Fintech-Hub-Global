import React from 'react';
import logo from '../assets/logo.png'; // Đảm bảo cậu đã đưa logo vào thư mục assets

const Navbar = () => {
  return (
    // Sử dụng nền trắng (var(--color-datum-dark)) và chữ tối (var(--color-datum-white))
    <nav className="bg-[var(--color-datum-dark)] text-[var(--color-datum-white)] px-6 py-5 flex items-center justify-between sticky top-0 z-50 border-b border-gray-200">
      
      {/* Logo Section */}
      <div className="flex items-center">
        <a href="/" className="flex items-center cursor-pointer">
          <img 
            src={logo} 
            alt="DatumAI Logo" 
            className="w-[120px] h-auto object-contain" 
          />
        </a>
      </div>
      
      {/* Menu chuẩn SaaS - Đã cập nhật màu chữ theo Light Theme */}
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
        <a href="#" className="text-[var(--color-datum-text-gray)] hover:text-[var(--color-datum-cyan)] transition-colors">Platform</a>
        <a href="#" className="text-[var(--color-datum-text-gray)] hover:text-[var(--color-datum-cyan)] transition-colors">Solutions</a>
        <a href="#" className="text-[var(--color-datum-text-gray)] hover:text-[var(--color-datum-cyan)] transition-colors">Pricing</a>
        <a href="#" className="text-[var(--color-datum-text-gray)] hover:text-[var(--color-datum-cyan)] transition-colors">Resources ▾</a>
      </div>

      {/* Cụm nút CTA */}
      <div className="hidden lg:flex items-center gap-3">
         <button className="bg-transparent border border-gray-300 text-[var(--color-datum-white)] px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors">
           Sign In
         </button>
         <button className="bg-[var(--color-datum-cyan)] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:opacity-90 transition-opacity">
           Start Free Trial
         </button>
      </div>
    </nav>
  );
};

export default Navbar;