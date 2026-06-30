import React from 'react';
import { motion } from 'framer-motion';
// Cập nhật lại đuôi file (.png, .svg, .jpg) cho đúng với tên file logo thực tế của cậu
import logoImg from '../assets/logo.png'; 

const FooterBlock = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="border-t border-gray-200 pt-20 pb-10 mt-10 bg-white">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-[1100px] mx-auto px-6 md:px-10"
      >
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">
          
          {/* CỘT TRÁI: Logo, Tagline và Social Icons */}
          <div className="lg:w-1/2">
            
            {/* Logo DatumAI được phóng to 1.5 lần (40px -> 60px) */}
            <motion.div variants={itemVariants} className="mb-6">
              <img 
                src={logoImg} 
                alt="DatumAI Logo" 
                className="h-[60px] w-auto object-contain" 
              />
            </motion.div>
            
            <motion.h3 variants={itemVariants} className="text-xl font-bold text-gray-800 max-w-sm mb-8">
              Automate clarity for your accounting team.
            </motion.h3>
            
            {/* Social Icons */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-500 mb-3 text-sm">Connect with us</p>
              <div className="flex gap-5 text-gray-800">
                {/* X (Twitter) Icon */}
                <a href="#" className="hover:text-[#008899] transition-colors">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                {/* LinkedIn Icon */}
                <a href="#" className="hover:text-[#008899] transition-colors">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* CỘT PHẢI: Thông tin liên hệ */}
          <div className="lg:w-1/2 flex flex-col justify-start lg:pt-16">
            <motion.div variants={containerVariants} className="flex flex-col gap-6 text-gray-700 text-base">
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                <span className="font-bold w-20 shrink-0 text-gray-900">Address:</span>
                <span className="leading-relaxed">1351 Oxford Rd NE, Atlanta, GA 30307</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                <span className="font-bold w-20 shrink-0 text-gray-900">Phone:</span>
                <span>+8 179 889 092</span>
              </motion.div>

            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-gray-100 pt-6">
          <p>© 2026 DatumAI. All Rights Reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default FooterBlock;