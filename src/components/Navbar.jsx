import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[var(--color-mysten-black)] text-[var(--color-mysten-white)] px-6 py-5 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-3">
        {/* Logo FintechHubGlobal - Đỏ và Trắng */}
        <div className="flex items-center gap-2 text-2xl font-black tracking-tighter">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--color-mysten-red)">
            <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
          </svg>
          <span className="text-[var(--color-mysten-red)]">Fintech</span>
          <span className="text-[var(--color-mysten-white)]">Hub</span>
          <span className="text-[var(--color-mysten-white)]">Global</span>
        </div>
      </div>
      
      {/* Menu chuẩn dịch vụ kế toán B2B */}
      <div className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-wide">
        <a href="#" className="hover:text-[var(--color-mysten-red)] transition-colors">Dịch vụ Kế toán</a>
        <a href="#" className="hover:text-[var(--color-mysten-red)] transition-colors">Kê khai Thuế (US)</a>
        <a href="#" className="hover:text-[var(--color-mysten-red)] transition-colors">Quản lý Lương</a>
        <a href="#" className="text-[var(--color-mysten-red)] hover:text-white transition-colors">Báo giá tự động (Phase 2)</a>
        <a href="#" className="hover:text-[var(--color-mysten-red)] transition-colors">Về chúng tôi ▾</a>
      </div>

      <div className="hidden lg:block">
         <button className="bg-[var(--color-mysten-white)] text-[var(--color-mysten-black)] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors">
            Liên hệ tư vấn
         </button>
      </div>
    </nav>
  );
};

export default Navbar;