import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import AnimatedCard from '../components/AnimatedCard';

const PlatformsBlock = () => {
  return (
    <section className="bg-[var(--color-mysten-white)] px-6 md:px-16 py-32 max-w-[1500px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader
          subtitle="Hệ sinh thái Dịch vụ"
          title="Khám phá các giải pháp của chúng tôi"
          buttonText="Xem tất cả dịch vụ"
          subtitleClassName="text-[var(--color-mysten-red)] font-black text-lg"
          titleClassName="max-w-3xl text-[var(--color-mysten-black)] font-black uppercase"
          buttonClassName="border-2 border-[var(--color-mysten-red)] text-[var(--color-mysten-black)] px-8 py-4 rounded-2xl hover:bg-[var(--color-mysten-red)] hover:text-[var(--color-mysten-white)] text-lg uppercase tracking-wide"
          className="relative"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <AnimatedCard direction="up" distance={80} delay={0.1} className="bg-[#EAEAEA] rounded-[3rem] p-12 min-h-[500px] flex flex-col justify-between">
          <div>
            <h3 className="text-6xl font-black text-[var(--color-mysten-black)] mb-6 uppercase tracking-tighter">Kế Toán<br/>Tổng Hợp</h3>
            <p className="text-2xl font-bold text-[var(--color-mysten-black)]/70 max-w-sm">Quản lý sổ sách, đối chiếu giao dịch và lập báo cáo tài chính định kỳ theo chuẩn US GAAP.</p>
          </div>
          <div className="w-full h-56 bg-black/5 rounded-2xl mt-8"></div>
        </AnimatedCard>

        <div className="grid grid-rows-2 gap-6">
           {/* Card 2 */}
           <AnimatedCard direction="right" distance={50} delay={0.2} className="bg-[#F5F5F5] rounded-[3rem] p-10 flex flex-col justify-between border border-gray-200">
             <h3 className="text-4xl font-black text-[var(--color-mysten-black)] mb-2 uppercase tracking-tight">Kê khai thuế (Tax)</h3>
             <p className="text-lg font-bold text-[var(--color-mysten-black)]/70 mb-4">Giải pháp thuế TNDN, TNCN tối ưu hợp pháp tại 50 bang của Mỹ.</p>
           </AnimatedCard>
           
           {/* Card 3 */}
           <AnimatedCard direction="right" distance={50} delay={0.3} className="bg-[var(--color-mysten-red)] rounded-[3rem] p-10 flex flex-col justify-between text-white">
             <h3 className="text-4xl font-black mb-2 uppercase tracking-tight">Quản lý lương (Payroll)</h3>
             <p className="text-lg font-bold text-white/90">Tính toán lương, bảo hiểm và xử lý tuân thủ nhân sự quốc tế tự động.</p>
           </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default PlatformsBlock;
