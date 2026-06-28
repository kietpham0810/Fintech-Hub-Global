import React from 'react';
import { motion } from 'framer-motion';

const PlatformsBlock = () => {
  return (
    <section className="px-6 md:px-10 py-32 max-w-[1100px] mx-auto border-t border-white/5 mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-start mb-16 relative"
      >
        <div className="max-w-2xl">
        
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-datum-ivory)] leading-tight">
            Advanced Financial Operations Solutions
          </h2>
          <p className="text-base text-[var(--color-datum-muted)] leading-relaxed">Powered by DatumAI</p>

        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 flex flex-col justify-between hover:border-[var(--color-datum-primary)]/40 transition-colors group cursor-pointer"
        >
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-datum-ivory)] mb-4 group-hover:text-[var(--color-datum-primary)] transition-colors">Accounting Transformation Platform</h3>
            <p className="text-base text-[var(--color-datum-muted)] leading-relaxed">Unified, audit‑ready platform that centralizes and automates accounting workflows..</p>
          </div>
          <div className="w-full h-40 bg-gradient-to-t from-white/[0.05] to-transparent rounded-xl mt-8 border border-white/[0.02]"></div>
        </motion.div>
        {/* Card 1: Optimize the Close */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 flex flex-col justify-between hover:border-[var(--color-datum-primary)]/40 transition-colors group cursor-pointer"
        >
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-datum-ivory)] mb-4 group-hover:text-[var(--color-datum-primary)] transition-colors">Optimize the Close</h3>
            <p className="text-base text-[var(--color-datum-muted)] leading-relaxed">Standardize close processes and gain global visibility into tasks and status.</p>
          </div>
          <div className="w-full h-40 bg-gradient-to-t from-white/[0.05] to-transparent rounded-xl mt-8 border border-white/[0.02]"></div>
        </motion.div>

         <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-white/[0.02] to-[var(--color-datum-primary)]/10 border border-white/[0.05] rounded-2xl p-8 flex flex-col justify-between hover:border-[var(--color-datum-primary)]/60 transition-colors group cursor-pointer"
        >
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-datum-primary)] mb-4">AI Agents & Automation</h3>
            <p className="text-base text-[var(--color-datum-ivory)]/80 leading-relaxed">No-code AI agents that generate checklists, explain variances, match transactions, and automate inbox tasks.</p>
          </div>
        </motion.div>

        {/* Card 2: Automate the Close */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 flex flex-col justify-between hover:border-[var(--color-datum-primary)]/40 transition-colors group cursor-pointer"
        >
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-datum-ivory)] mb-4 group-hover:text-[var(--color-datum-primary)] transition-colors">Automate the Close</h3>
            <p className="text-base text-[var(--color-datum-muted)] leading-relaxed">End-to-end automation for reconciliations, follow-ups, and close tasks.</p>
          </div>
          <div className="w-full h-40 bg-gradient-to-t from-white/[0.05] to-transparent rounded-xl mt-8 border border-white/[0.02]"></div>
        </motion.div>

        {/* Card 3: Connected Compliance */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 flex flex-col justify-between hover:border-[var(--color-datum-primary)]/40 transition-colors group cursor-pointer"
        >
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-datum-ivory)] mb-4 group-hover:text-[var(--color-datum-primary)] transition-colors">Connected Compliance</h3>
            <p className="text-base text-[var(--color-datum-muted)] leading-relaxed">Automated evidence collection and controls to reduce compliance risk.</p>
          </div>
        </motion.div>

        {/* Card 4: AI Agents */}
       

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-br from-white/[0.02] to-[var(--color-datum-primary)]/10 border border-white/[0.05] rounded-2xl p-8 flex flex-col justify-between hover:border-[var(--color-datum-primary)]/60 transition-colors group cursor-pointer"
        >
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-datum-primary)] mb-4">Integrated Record‑to‑Report</h3>
            <p className="text-base text-[var(--color-datum-ivory)]/80 leading-relaxed">Faster, more accurate reporting by consolidating systems and processes.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformsBlock;