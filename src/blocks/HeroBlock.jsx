import React from 'react';
import { motion } from 'framer-motion';

const HeroBlock = () => {
  // Cấu hình kịch bản Animation (Giữ lại logic cũ của cậu, tinh chỉnh thông số)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Tốc độ xuất hiện nối tiếp
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

  const rightCardVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: 'spring', damping: 25, stiffness: 100, delay: 0.5 } 
    }
  };

  // Hàm xử lý nút bấm (Tạm thời giữ nguyên alert, sẽ nâng cấp Modal sau)
  const handleStartTrial = () => {
    alert('Claim your 1-month free trial. We will configure DatumAI and schedule training.');
  };

  return (
    <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-12">
      <section className="flex flex-col md:flex-row gap-10 items-center justify-between bg-white/[0.02] p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
        
        {/* CỘT TRÁI: Nội dung có Animation tuần tự */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 min-w-[320px]"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-[40px] font-bold m-0 mb-3 leading-[1.05] text-[var(--color-datum-ivory)]">
            Automate clarity for your accounting team
          </motion.h1>
          
          <motion.p variants={itemVariants} className="m-0 mb-5 text-[var(--color-datum-muted)] text-base max-w-[720px]">
            Custom AI solutions that automate workflows, elevate preparers into reviewers, and train your team to use AI for tax research.
          </motion.p>
      
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 my-5">
            <span className="bg-white/[0.02] px-3.5 py-2.5 rounded-xl text-[var(--color-datum-ivory)] text-sm font-medium">Faster closes</span>
            <span className="bg-white/[0.02] px-3.5 py-2.5 rounded-xl text-[var(--color-datum-ivory)] text-sm font-medium">Smarter reviews</span>
            <span className="bg-white/[0.02] px-3.5 py-2.5 rounded-xl text-[var(--color-datum-ivory)] text-sm font-medium">Practical AI training</span>
          </motion.div>
      
          <motion.div variants={itemVariants} className="flex gap-3 flex-wrap mt-7">
            <button 
              onClick={handleStartTrial}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-0 cursor-pointer font-semibold bg-gradient-to-r from-[var(--color-datum-primary)] to-[#00c0e6] text-[#071018] shadow-[0_6px_18px_rgba(0,229,255,0.12)] hover:scale-105 transition-transform"
            >
              Start 1-Month Free
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl cursor-pointer font-semibold bg-transparent border border-white/10 text-[var(--color-datum-ivory)] hover:bg-white/5 transition-colors">
              See a Live Demo
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl cursor-pointer font-semibold bg-transparent border border-white/10 text-[var(--color-datum-ivory)] hover:bg-white/5 transition-colors">
              Download Feature Brief
            </button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-[13px] text-[var(--color-datum-muted)] mt-4">
            No credit card required; one social review in exchange for the trial.
          </motion.div>
        </motion.div>
      
        {/* CỘT PHẢI: Các thẻ thông số trượt từ phải sang */}
        <motion.aside 
          variants={rightCardVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-[320px] flex flex-col items-center gap-3 shrink-0"
        >
          <div className="w-full bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-5 rounded-xl border border-white/[0.05] hover:border-[var(--color-datum-primary)]/30 transition-colors">
            <div className="text-[12px] text-[var(--color-datum-muted)] mb-1">Estimate your monthly savings</div>
            <div className="text-base text-[var(--color-datum-primary)] font-bold mb-2">~ 120 hours saved / month</div>
            <div className="text-[13px] text-[var(--color-datum-muted)]">Based on average close automation for mid-sized firms.</div>
          </div>
      
          <div className="w-full bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-5 rounded-xl border border-white/[0.05] hover:border-[var(--color-datum-primary)]/30 transition-colors">
            <div className="text-[12px] text-[var(--color-datum-muted)] mb-1">Onboarding</div>
            <div className="text-base text-[var(--color-datum-primary)] font-bold mb-2">2 weeks to configure & train</div>
            <div className="text-[13px] text-[var(--color-datum-muted)]">Includes AI tax research workshop for your team.</div>
          </div>
        </motion.aside>

      </section>
    </div>
  );
};

export default HeroBlock;