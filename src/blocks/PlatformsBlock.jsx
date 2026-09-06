import React from 'react';
import { motion } from 'framer-motion';
import threePersonImg from '../images/threeperson.png';

// BÓC TÁCH DỮ LIỆU: Array of Objects
// Nếu muốn thêm/sửa/xóa dịch vụ, chỉ cần thao tác trên mảng này. Tuyệt đối không chạm vào phần HTML bên dưới.
const platformsData = [
  {
    id: 1,
    title: "Accounting Transformation Platform",
    description: "Unified, audit‑ready platform that centralizes and automates accounting workflows.",
    isHighlight: true, // Điều khiển việc sử dụng text màu Primary hay màu Ivory
  },
  {
    id: 2,
    title: "AI Agents & Automation",
    description: "No-code AI agents that generate checklists, explain variances, match transactions, and automate inbox tasks.",
    isHighlight: false,
  },
  {
    id: 3,
    title: "Optimize the Close",
    description: "Standardize close processes and gain global visibility into tasks and status.",
    isHighlight: true,
  },
  {
    id: 4,
    title: "Automate the Close",
    description: "End-to-end automation for reconciliations, follow-ups, and close tasks.",
    isHighlight: false,
  },
  {
    id: 5,
    title: "Connected Compliance",
    description: "Automated evidence collection and controls to reduce compliance risk.",
    isHighlight: false,
  },
  {
    id: 6,
    title: "Integrated Record‑to‑Report",
    description: "Faster, more accurate reporting by consolidating systems and processes.",
    isHighlight: true,
  }
];

const PlatformsBlock = () => {
  return (
    <section className="px-6 md:px-10 py-32 max-w-[1100px] mx-auto border-t border-white/5 mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 relative text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-datum-ivory)] leading-tight">
          Advanced Financial Operations Solutions
        </h2>
        <img
          src={threePersonImg}
          alt="DatumAI Team"
          className="mx-auto mt-8 max-w-md w-full h-auto rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Render tự động bằng .map() */}
        {platformsData.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // Tính toán delay động dựa vào index: 0.1, 0.2, 0.3...
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }} 
            className="bg-gradient-to-br from-white/[0.02] to-[var(--color-datum-primary)]/10 border border-white/[0.05] rounded-2xl p-8 flex flex-col justify-between hover:border-[var(--color-datum-primary)]/60 transition-colors group cursor-pointer"
          >
            <div>
              {/* Kiểm tra điều kiện isHighlight để render màu chữ tương ứng */}
              <h3 className={`text-2xl font-bold mb-4 transition-colors ${
                item.isHighlight 
                  ? 'text-[var(--color-datum-primary)]' 
                  : 'text-[var(--color-datum-ivory)] group-hover:text-[var(--color-datum-primary)]'
              }`}>
                {item.title}
              </h3>
              <p className={`text-base leading-relaxed ${
                item.isHighlight 
                  ? 'text-[var(--color-datum-ivory)]/80' 
                  : 'text-[var(--color-datum-muted)]'
              }`}>
                {item.description}
              </p>
            </div>
            <div></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PlatformsBlock;