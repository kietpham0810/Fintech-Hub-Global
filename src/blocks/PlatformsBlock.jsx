import React from 'react';
import { motion } from 'framer-motion';

const PlatformsBlock = () => {
  return (
    <section className="bg-[var(--color-mysten-white)] px-6 md:px-16 py-32 max-w-[1500px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-start mb-16 relative"
      >
        <div>
          <span className="text-[var(--color-mysten-red)] font-black tracking-widest uppercase mb-4 block text-lg">Hệ sinh thái Dịch vụ</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter max-w-3xl text-[var(--color-mysten-black)] leading-tight uppercase">
            Khám phá các giải pháp của chúng tôi
          </h2>
        </div>
        <button className="mt-8 md:mt-0 border-2 border-[var(--color-mysten-red)] text-[var(--color-mysten-black)] font-bold px-8 py-4 rounded-2xl hover:bg-[var(--color-mysten-red)] hover:text-[var(--color-mysten-white)] transition-colors text-lg uppercase tracking-wide">
          Xem tất cả dịch vụ
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#EAEAEA] rounded-[3rem] p-12 min-h-[500px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
        >
          <div>
            <h3 className="text-6xl font-black text-[var(--color-mysten-black)] mb-6 uppercase tracking-tighter">Kế Toán<br/>Tổng Hợp</h3>
            <p className="text-2xl font-bold text-[var(--color-mysten-black)]/70 max-w-sm">Quản lý sổ sách, đối chiếu giao dịch và lập báo cáo tài chính định kỳ theo chuẩn US GAAP.</p>
          </div>
          <div className="w-full h-56 bg-black/5 rounded-2xl mt-8"></div>
        </motion.div>

        <div className="grid grid-rows-2 gap-6">
           {/* Card 2 */}
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-[#F5F5F5] rounded-[3rem] p-10 flex flex-col justify-between border border-gray-200 hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
           >
             <h3 className="text-4xl font-black text-[var(--color-mysten-black)] mb-2 uppercase tracking-tight">Kê khai thuế (Tax)</h3>
             <p className="text-lg font-bold text-[var(--color-mysten-black)]/70 mb-4">Giải pháp thuế TNDN, TNCN tối ưu hợp pháp tại 50 bang của Mỹ.</p>
           </motion.div>
           
           {/* Card 3 */}
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="bg-[var(--color-mysten-red)] rounded-[3rem] p-10 flex flex-col justify-between text-white hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
           >
             <h3 className="text-4xl font-black mb-2 uppercase tracking-tight">Quản lý lương (Payroll)</h3>
             <p className="text-lg font-bold text-white/90">Tính toán lương, bảo hiểm và xử lý tuân thủ nhân sự quốc tế tự động.</p>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsBlock;