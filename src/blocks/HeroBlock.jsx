import React from 'react';
import { motion } from 'framer-motion';
// Cậu nhớ import ảnh dashboard từ thư mục images vào đây
import dashboardImg from '../images/dashboard.jpg';

const HeroBlock = () => {
  // Cấu hình kịch bản Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', damping: 25, stiffness: 120 },
    },
  };

  const rightImageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: 'spring', damping: 25, stiffness: 100, delay: 0.5 } 
    }
  };

  // Hàm xử lý nút liên hệ (Cậu có thể đổi thành chuyển hướng sang trang Contact)
  const handleContact = () => {
    // window.location.href = '/contact';
    alert('Chuyển hướng đến trang Liên hệ...');
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12">
      <section className="flex flex-col lg:flex-row gap-12 items-center justify-between">
        
        {/* CỘT TRÁI: Nội dung có Animation tuần tự */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 min-w-[320px] max-w-2xl"
        >
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-5xl lg:text-[54px] font-extrabold m-0 mb-6 leading-tight text-gray-900 tracking-tight"
          >
            Automate clarity for your accounting team
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className="m-0 mb-8 text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            Custom AI solutions that automate workflows, elevate preparers into reviewers, and train your team to use AI for tax research.
          </motion.p>
      
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
            <span className="bg-[#008899]/10 px-4 py-2 rounded-full text-[#008899] font-semibold text-sm">Faster closes</span>
            <span className="bg-[#008899]/10 px-4 py-2 rounded-full text-[#008899] font-semibold text-sm">Smarter reviews</span>
            <span className="bg-[#008899]/10 px-4 py-2 rounded-full text-[#008899] font-semibold text-sm">Practical AI training</span>
          </motion.div>
      
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <button 
              onClick={handleContact}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-0 cursor-pointer font-bold bg-[#008899] text-white shadow-[0_8px_20px_rgba(0,136,153,0.3)] hover:bg-[#007080] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Contact us now for consultancy
            </button>
            <div className="flex items-center gap-2 text-gray-700 font-semibold text-lg px-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#008899]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.439-4.099-7.031-7.031l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +8 179 889 092
            </div>
          </motion.div>
        </motion.div>
      
        {/* CỘT PHẢI: Ảnh Dashboard */}
        <motion.div 
          variants={rightImageVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[50%] flex justify-center shrink-0 perspective-1000"
        >
          {/* Vùng chứa ảnh với hiệu ứng nổi 3D nhẹ */}
          <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-gray-100 transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
            {/* Lớp gradient bóng đổ giả lập */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent z-10 pointer-events-none"></div>
            <img 
              src={dashboardImg} 
              alt="Datum AI Dashboard Interface" 
              className="w-full h-auto object-cover block relative z-0"
            />
          </div>
        </motion.div>

      </section>
    </div>
  );
};

export default HeroBlock;