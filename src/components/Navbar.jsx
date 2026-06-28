import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    // Dùng py-4 để có chiều cao vừa phải, cân đối như Deloitte
    <nav className="bg-[#111315] text-white px-8 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-white/10">
      
      {/* Logo Section - Giữ tỷ lệ chuẩn */}
      <div className="flex items-center">
        <a href="/" className="flex items-center cursor-pointer">
          <img 
            src={logo} 
            alt="DatumAI Logo" 
            className="w-[110px] h-auto object-contain brightness-0 invert" 
          />
        </a>
      </div>
      
      {/* Menu - Tăng khoảng cách (gap-10) để tạo sự sang trọng */}
      <div className="hidden lg:flex items-center gap-10 text-[13px] font-medium tracking-wide">
        {['Platform', 'Solutions', 'Pricing', 'Resources'].map((item) => (
          <a key={item} href="#" className="text-gray-300 hover:text-[#00E5FF] transition-colors uppercase">
            {item}
          </a>
        ))}
      </div>

      {/* CTA Section - Đơn giản hóa */}
      <div className="hidden lg:flex items-center gap-6 text-[13px]">
         <a href="#" className="text-white hover:text-[#00E5FF] transition-colors">Sign In</a>
         <button className="bg-[#00E5FF] text-black px-6 py-2 rounded font-bold hover:bg-white transition-colors">
           Start Free Trial
         </button>
      </div>
    </nav>
  );
};

export default Navbar;