import { motion } from 'framer-motion';
import { staggerContainer, slideUp } from '../utils/animations';

const HeroBlock = () => {
  const containerVariants = staggerContainer(0.15, 0.2);
  const itemVariants = slideUp;

  return (
    <section className="bg-[var(--color-mysten-black)] px-2 pb-2">
      <div className="bg-[var(--color-mysten-white)] rounded-t-[3rem] md:rounded-t-[4rem] min-h-[90vh] relative overflow-hidden">
        
        {/* =========================================
            BỘ ĐƯỜNG LINE ĐỎ (RED GEOMETRIC LINES)
           ========================================= */}
        <motion.div 
          initial={{ scaleX: 0 }} 
          animate={{ scaleX: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 left-0 w-full h-[100px] border-b border-[var(--color-mysten-red)] pointer-events-none origin-left"
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}
          className="absolute top-[100px] left-0 w-[25%] h-[120px] border-t border-r border-[var(--color-mysten-red)] rounded-tr-[3rem] pointer-events-none"
        ></motion.div>
        
        <div className="absolute top-0 right-0 w-[40%] h-[55%] pointer-events-none">
           <motion.div 
             initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.8 }}
             className="absolute bottom-0 right-[15%] w-full h-full border-b border-l border-[var(--color-mysten-red)] rounded-bl-[6rem]"
           ></motion.div>
           <motion.div 
             initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }}
             className="absolute bottom-[-150px] right-0 w-[15%] h-[150px] border-b border-l border-[var(--color-mysten-red)] rounded-bl-[2rem]"
           ></motion.div>
        </div>

        <div className="pt-32 pb-20 px-6 md:px-16 max-w-[1500px] mx-auto relative z-10">
          
          {/* Typography Khối Đen Có Animation */}
          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-[4rem] md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-tighter flex flex-col items-start uppercase overflow-hidden py-4"
          >
            <motion.span variants={itemVariants} className="bg-[var(--color-mysten-black)] text-[var(--color-mysten-white)] px-4 pt-4 pb-1 mb-[-4px] md:mb-[-8px] w-max inline-block">
              Giải pháp
            </motion.span>
            <motion.span variants={itemVariants} className="bg-[var(--color-mysten-black)] text-[var(--color-mysten-white)] px-4 pt-4 pb-1 mb-[-4px] md:mb-[-8px] w-max inline-block">
              kế toán chuẩn
            </motion.span>
            <motion.span variants={itemVariants} className="bg-[var(--color-mysten-black)] text-[var(--color-mysten-white)] px-4 pt-4 pb-1 mb-[-4px] md:mb-[-8px] w-max inline-block">
              quốc tế cho
            </motion.span>
            <motion.span variants={itemVariants} className="bg-[var(--color-mysten-black)] text-[var(--color-mysten-white)] px-4 pt-4 pb-1 w-max inline-block">
              doanh nghiệp
            </motion.span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 md:mt-24 max-w-3xl flex items-start gap-4"
          >
             <div className="w-12 h-1 bg-[var(--color-mysten-red)] mt-3 hidden md:block shrink-0"></div>
             <p className="text-2xl md:text-4xl font-bold tracking-tight text-[var(--color-mysten-black)] leading-snug">
               Tại FintechHubGlobal, chúng tôi xây dựng hệ thống báo cáo tài chính và kê khai thuế chuẩn mực, giúp doanh nghiệp tự tin vươn ra thị trường Mỹ.
             </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;
