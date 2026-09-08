import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import manImg from '../images/man1.png';

const IndividualsBlock = () => {
  const navigate = useNavigate();

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
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide"
          >
            FOR INDIVIDUALS & INVESTORS
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-[54px] font-extrabold m-0 mb-6 leading-tight text-gray-900 tracking-tight"
          >
            Stress-free tax filing.
            <br />
            Done right the first time.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="m-0 mb-8 text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            Life comes with a lot to manage—careers, families, investments, ambitions. Your tax strategy shouldn't be another burden.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="m-0 mb-8 text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            At Datum AI, we simplify the complexity and turn it into strategic plans, ensuring every return and every plan helps your money work harder for you
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <button
              onClick={() => navigate('/pricing-estimate')}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-0 cursor-pointer font-bold bg-[#008899] text-white shadow-[0_8px_20px_rgba(0,136,153,0.3)] hover:bg-[#007080] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Pricing Estimate
            </button>
            <button
              onClick={() => navigate('/individual-services')}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-[#008899] text-[#008899] font-bold cursor-pointer bg-transparent hover:bg-[#008899]/5 transition-all duration-300 w-full sm:w-auto"
            >
              View All Individual Services
            </button>
          </motion.div>
        </motion.div>

        {/* CỘT PHẢI: Ảnh Man */}
        <motion.div
          variants={rightImageVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[50%] flex justify-center shrink-0"
        >
          <div className="relative w-full max-w-lg flex justify-center">
            {/* Khối màu mềm phía sau để ảnh cutout không bị "lơ lửng" trên nền trắng */}
            <div className="absolute top-6 right-0 w-[80%] h-[85%] bg-[#008899]/[0.06] rounded-[40%] blur-2xl"></div>

            <img
              src={manImg}
              alt="Datum AI Individual Services"
              className="relative w-full h-auto object-contain block drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)]"
            />
          </div>
        </motion.div>

      </section>
    </div>
  );
};

export default IndividualsBlock;
