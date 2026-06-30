import React from 'react';
import { motion } from 'framer-motion';

// Import hình ảnh từ thư mục images (Dựa theo đúng cấu trúc cậu đã tạo)
import anh1 from '../images/anh1.jpg'; // Hình Hero
import anh3 from '../images/ảnh3.jpg'; // Hình Mission
import bgTagline1 from '../images/ảnh 2.2.jpg'; // Background: Smarter processes
import bgTogether from '../images/together.jpg'; // Background: Together
import anh5 from '../images/anh5.jpg'; // Background: Less cost
import founderImg from '../assets/leader.png'; // Ảnh Lynn Le (Giữ nguyên path của cậu)

const About = () => {
  // Biến đồng bộ định dạng chữ (Typography) để dễ bảo trì
  const formChu1 = "text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight";
  const formChu2 = "text-xl text-gray-600 leading-relaxed";

  return (
    <div className="w-full bg-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className={`${formChu1} mb-6`}
        >
          About DatumAI
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className={`${formChu2} mb-12 max-w-3xl mx-auto`}
        >
          We help businesses run smarter finance with AI.
        </motion.p>
        
        {/* Hình 1 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full max-w-5xl mx-auto aspect-video bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-100 shadow-2xl"
        >
          <img src={anh1} alt="Datum AI Overview" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </motion.div>
      </section>

      {/* 2. MISSION SECTION */}
      <section className="bg-gray-50 py-24 mt-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#008899] mb-4">Our Mission</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-14 tracking-tight">
            Smarter systems. Better growth.
          </h3>
          
          {/* Hình 2 */}
          <div className="w-full max-w-5xl mx-auto aspect-[21/9] bg-white rounded-2xl overflow-hidden flex items-center justify-center shadow-xl border border-gray-200">
            <img src={anh3} alt="Our Mission" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">What We Do</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Item 1 */}
          <div className="flex items-start gap-6 p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#008899]/10 flex items-center justify-center text-[#008899] shrink-0">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accounting & Tax</h3>
              <p className="text-gray-600 leading-relaxed font-medium">Comprehensive tax and accounting services tailored to optimize your business compliance.</p>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className="flex items-start gap-6 p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#008899]/10 flex items-center justify-center text-[#008899] shrink-0">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bookkeeping</h3>
              <p className="text-gray-600 leading-relaxed font-medium">Accurate and timely financial record-keeping to give you clear visibility into your cash flow.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-6 p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#008899]/10 flex items-center justify-center text-[#008899] shrink-0">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Automation</h3>
              <p className="text-gray-600 leading-relaxed font-medium">Streamline repetitive finance tasks with cutting-edge artificial intelligence systems.</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-6 p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#008899]/10 flex items-center justify-center text-[#008899] shrink-0">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Software Solutions</h3>
              <p className="text-gray-600 leading-relaxed font-medium">Custom software development designed specifically for modern financial workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline 1 (Background Hình 2.2) */}
      <section className="relative py-40 flex items-center justify-center overflow-hidden bg-gray-900">
        <img src={bgTagline1} alt="Smarter processes" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
        <div className="relative z-20 text-center px-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
            Smarter processes. <span className="text-[#008899]">Stronger results.</span>
          </h2>
        </div>
      </section>

      {/* 4. FOUNDER & TEAM SECTION */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-5xl mx-auto">
          {/* Founder Image */}
          <div className="w-full md:w-2/5 flex flex-col items-center">
            <div className="w-72 h-72 rounded-full overflow-hidden border-8 border-gray-50 shadow-2xl mb-8 relative group">
              <div className="absolute inset-0 bg-[#008899]/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              <img src={founderImg} alt="Lynn Le, Founder" className="w-full h-full object-cover relative z-0" />
            </div>
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#008899] font-bold text-lg hover:text-gray-900 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              Connect on LinkedIn
            </a>
          </div>

          {/* Founder Text */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#008899] mb-4">Leadership</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Founder & Team</h3>
            <h4 className="text-2xl text-gray-800 font-semibold mb-8">Lynn Le, <span className="text-gray-500 font-normal">CPA, Founder & CEO</span></h4>
            <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-medium">
              <p>
                Lynn brings Big Four expertise in tax, compliance, and automation for Fortune-level clients.
              </p>
              <p>
                She is backed by a team with extensive experience in finance and technology, delivering modern, practical solutions for global companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline 2 (Background Hình together) */}
      <section className="relative py-40 flex items-center justify-center overflow-hidden bg-gray-900">
        <img src={bgTogether} alt="Together we bridge" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
            Together, we bridge <span className="text-[#008899]">finance and innovation.</span>
          </h2>
        </div>
      </section>

      {/* 5. WHY DATUM AI SECTION */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Why DatumAI</h2>
          <p className="text-xl text-gray-600 font-medium">
            We don’t just manage numbers—we deliver results that drive your success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-sm text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-white shadow-sm text-[#008899] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
            </div>
            <h4 className="font-bold text-gray-900 text-xl">Reduce costs</h4>
          </div>

          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-sm text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-white shadow-sm text-[#008899] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h4 className="font-bold text-gray-900 text-xl">Save time</h4>
          </div>

          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-sm text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-white shadow-sm text-[#008899] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h4 className="font-bold text-gray-900 text-xl">Decide faster</h4>
          </div>

          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-sm text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-white shadow-sm text-[#008899] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h4 className="font-bold text-gray-900 text-xl">Scale securely</h4>
          </div>
        </div>
      </section>

      {/* Tagline 3 (Background Hình anh5) */}
      <section className="relative py-40 flex items-center justify-center overflow-hidden bg-gray-900">
        <img src={anh5} alt="Less cost" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 z-10"></div>
        <div className="relative z-20 text-center px-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
            Less cost. <span className="text-[#008899]">More growth.</span>
          </h2>
        </div>
      </section>

    </div>
  );
};

export default About;