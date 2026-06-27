import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[var(--color-datum-bg)] text-[var(--color-datum-ivory)] px-6 py-5 flex items-center justify-between sticky top-0 z-50 border-b border-white/5">
      <div className="flex items-center gap-3">
        
        {/* Logo DatumAI (Chữ D cách điệu với mũi tên) */}
        <div className="flex items-center gap-2 text-2xl font-bold tracking-wide cursor-pointer">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 5H22C30.284 5 37 11.716 37 20C37 28.284 30.284 35 22 35H10V5Z" stroke="var(--color-datum-primary)" strokeWidth="3"/>
            <path d="M15 20H28M28 20L23 15M28 20L23 25" stroke="var(--color-datum-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div>
            <span className="text-[var(--color-datum-primary)]">Datum</span>
            <span className="text-[var(--color-datum-ivory)] font-light">AI</span>
          </div>
        </div>
      </div>
      
      {/* Menu chuẩn SaaS */}
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
        <a href="#" className="text-[var(--color-datum-muted)] hover:text-[var(--color-datum-primary)] transition-colors">Platform</a>
        <a href="#" className="text-[var(--color-datum-muted)] hover:text-[var(--color-datum-primary)] transition-colors">Solutions</a>
        <a href="#" className="text-[var(--color-datum-muted)] hover:text-[var(--color-datum-primary)] transition-colors">Pricing</a>
        <a href="#" className="text-[var(--color-datum-muted)] hover:text-[var(--color-datum-primary)] transition-colors">Resources ▾</a>
      </div>

      {/* Cụm nút CTA */}
      <div className="hidden lg:flex items-center gap-3">
         <button className="bg-transparent border border-white/10 text-[var(--color-datum-ivory)] px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-white/5 transition-colors">
            Sign In
         </button>
         <button className="bg-gradient-to-r from-[var(--color-datum-primary)] to-[#00c0e6] text-[#071018] px-5 py-2.5 rounded-xl font-bold text-sm shadow-[0_4px_14px_rgba(0,229,255,0.15)] hover:scale-105 transition-transform">
            Start Free Trial
         </button>
      </div>
    </nav>
  );
};

export default Navbar;