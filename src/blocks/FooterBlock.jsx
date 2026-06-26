import { motion } from 'framer-motion';
import { staggerContainerWithY, fadeInUp } from '../utils/animations';
import Logo from '../components/Logo';

const FooterBlock = () => {
  const containerVariants = staggerContainerWithY(0.1, 0.2);
  const itemVariants = fadeInUp(0.5);

  return (
    <footer className="bg-[var(--color-mysten-white)] pt-12 pb-2">
      {/* Khối nền đỏ bo góc đặc trưng */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="bg-[var(--color-mysten-red)] rounded-t-[4rem] md:rounded-tl-[6rem] rounded-br-none rounded-bl-[2rem] px-6 md:px-16 py-20 relative mx-2"
      >
        {/* Nút cuộn lên đầu trang (Nền đen chữ trắng) */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute top-10 right-8 bg-[var(--color-mysten-black)] text-[var(--color-mysten-white)] w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </motion.button>

        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Cột Trái */}
          <div>
            {/* Logo FintechHubGlobal (Màu Trắng) */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-5xl font-black tracking-tighter mb-10">
              <Logo size={60} color="var(--color-mysten-white)" />
            </motion.div>
            
            <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-mysten-black)] max-w-sm mb-8">
              Theo dõi chúng tôi để cập nhật chính sách thuế & tài chính Mỹ.
            </motion.h3>
            
            {/* Social Icons (Màu Đen) */}
            <motion.div variants={itemVariants} className="flex gap-6 text-[var(--color-mysten-black)]">
              <a href="#" className="hover:opacity-70 transition-opacity">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </motion.div>
          </div>

          {/* Cột Phải */}
          <div className="flex flex-col justify-between">
            {/* Links - Hai cột (Text Đen) */}
            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-8 text-xl font-bold text-[var(--color-mysten-black)]">
              <ul className="space-y-4">
                <motion.li variants={itemVariants}><a href="#" className="hover:underline">Về chúng tôi</a></motion.li>
                <motion.li variants={itemVariants}><a href="#" className="hover:underline">Đội ngũ CPA</a></motion.li>
                <motion.li variants={itemVariants}><a href="#" className="hover:underline">Tin tức</a></motion.li>
                <motion.li variants={itemVariants}><a href="#" className="hover:underline">Blog Dịch vụ</a></motion.li>
                <motion.li variants={itemVariants}><a href="#" className="hover:underline">Tuyển dụng</a></motion.li>
              </ul>
              <ul className="space-y-4">
                <motion.li variants={itemVariants}><a href="#" className="hover:underline">Dịch vụ Kế toán</a></motion.li>
                <motion.li variants={itemVariants}><a href="#" className="hover:underline">Kê khai Thuế (Tax)</a></motion.li>
                <motion.li variants={itemVariants}><a href="#" className="hover:underline">Quản lý Lương (Payroll)</a></motion.li>
                <motion.li variants={itemVariants}><a href="#" className="hover:underline">Báo giá tự động (Mới)</a></motion.li>
                <motion.li variants={itemVariants}><a href="#" className="hover:underline">Tài nguyên & Biểu mẫu</a></motion.li>
              </ul>
            </motion.div>

            {/* Form Đăng ký (Viền đen, chữ đen) */}
            <motion.div variants={itemVariants} className="mt-16 flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Nhập email để nhận tin..." 
                className="bg-transparent border border-[var(--color-mysten-black)] text-[var(--color-mysten-black)] placeholder-[var(--color-mysten-black)]/60 font-medium rounded-xl px-6 py-4 w-full focus:outline-none focus:bg-white/10 transition-colors"
              />
              <button className="bg-transparent border border-[var(--color-mysten-black)] text-[var(--color-mysten-black)] px-10 py-4 rounded-xl font-black uppercase tracking-wide hover:bg-[var(--color-mysten-black)] hover:text-[var(--color-mysten-white)] transition-colors shrink-0">
                Đăng ký
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar (Chữ Đen) */}
        <motion.div variants={itemVariants} className="max-w-[1500px] mx-auto mt-24 flex flex-col md:flex-row justify-between text-sm font-semibold text-[var(--color-mysten-black)]/80 pt-6">
          <div className="flex gap-8 mb-4 md:mb-0 uppercase tracking-widest text-xs">
            <a href="#" className="hover:text-[var(--color-mysten-black)] transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-[var(--color-mysten-black)] transition-colors">Điều khoản dịch vụ</a>
          </div>
          <p className="text-xs uppercase tracking-widest">© 2026 FintechHubGlobal. All Rights Reserved.</p>
        </motion.div>

      </motion.div>
    </footer>
  );
};

export default FooterBlock;
