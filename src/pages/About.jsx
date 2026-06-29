import React from 'react';
import { motion } from 'framer-motion';
// TODO: Import ảnh thật của cậu vào đây
// import heroImage from '../assets/team-circle.png'; 
import leader from '../assets/leader.png';

const About = () => {
  return (
    <div className="w-full bg-white pb-24">
      {/* Lịch sử thành lập & Impact Section */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-20 text-center">
        
        {/* Hero Image - Placeholder thay cho Ảnh 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          {/* Thay thế div này bằng thẻ img khi có ảnh cắt nền (PNG) */}
          <div className="w-full max-w-[600px] aspect-video bg-[#8CC63F]/20 rounded-full flex items-center justify-center overflow-hidden relative">
            <span className="text-gray-500 font-medium z-10">Khu vực chèn Ảnh 1 (Green Circle Team)</span>
            {/* <img src={heroImage} alt="DatumAI Team" className="absolute inset-0 w-full h-full object-cover" /> */}
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-light text-gray-800 mb-8"
        >
          At DatumAI, we make an impact that matters
        </motion.h1>
        
        <div className="space-y-6 text-gray-600 leading-relaxed max-w-3xl mx-auto">
          <p>
            For more than X years, we have worked with leaders around the world—from the 
            Global 500® to private businesses—to help them build better futures. To support 
            their people. To succeed. All while caring for our communities.
          </p>
          <p>
            With a workforce made up of the industry's greatest minds, we continue to shape 
            the future by delivering real, measurable results. We go beyond talk—we act.
          </p>
        </div>
      </section>

      {/* Phân cách */}
      <hr className="max-w-xl mx-auto border-gray-200 mb-20" />

      {/* Leaders Section */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <span className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4 block">
          Our people
        </span>
        <h2 className="text-3xl font-light text-gray-800 mb-16">
          Meet our US leaders
        </h2>
        
        {/* Container căn giữa cho 1 Leader duy nhất */}
        <div className="flex justify-center">
          
          {/* Leader Profile */}
          <div className="flex flex-col items-center group">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden mb-6 border border-gray-200 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img src={leader} alt="DatumAI Leader" className="w-full h-full object-cover" />
            </div>
            
            {/* LinkedIn Icon Button */}
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 w-14 h-14 rounded-full border-2 border-[#008899] text-[#008899] flex items-center justify-center hover:bg-[#008899] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="View LinkedIn Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;