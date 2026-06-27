import React from 'react';
import { motion } from 'framer-motion';

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
    <footer className="border-t border-white/5 pt-20 pb-10 mt-10">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-[1100px] mx-auto px-6 md:px-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Left Column */}
          <div>
            {/* Logo DatumAI */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-2xl font-bold tracking-wide cursor-pointer mb-6">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 5H22C30.284 5 37 11.716 37 20C37 28.284 30.284 35 22 35H10V5Z" stroke="var(--color-datum-primary)" strokeWidth="3"/>
                <path d="M15 20H28M28 20L23 15M28 20L23 25" stroke="var(--color-datum-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <span className="text-[var(--color-datum-primary)]">Datum</span>
                <span className="text-[var(--color-datum-ivory)] font-light">AI</span>
              </div>
            </motion.div>
            
            <motion.h3 variants={itemVariants} className="text-xl font-medium text-[var(--color-datum-ivory)] max-w-sm mb-6">
              Automate clarity for your accounting team.
            </motion.h3>
            
            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex gap-5 text-[var(--color-datum-muted)]">
              <a href="#" className="hover:text-[var(--color-datum-primary)] transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="hover:text-[var(--color-datum-primary)] transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between">
            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-8 text-sm font-medium text-[var(--color-datum-muted)]">
              <ul className="space-y-4">
                <motion.li variants={itemVariants}><a href="#" className="hover:text-[var(--color-datum-ivory)] transition-colors">Company</a></motion.li>
                <motion.li variants={itemVariants}><a href="#" className="hover:text-[var(--color-datum-ivory)] transition-colors">Our Team</a></motion.li>
                <motion.li variants={itemVariants}><a href="#" className="hover:text-[var(--color-datum-ivory)] transition-colors">News & Updates</a></motion.li>
                <motion.li variants={itemVariants}><a href="#" className="hover:text-[var(--color-datum-ivory)] transition-colors">Careers</a></motion.li>
              </ul>
              <ul className="space-y-4">
                <motion.li variants={itemVariants}><a href="#" className="hover:text-[var(--color-datum-ivory)] transition-colors">Products</a></motion.li>
                <motion.li variants={itemVariants}><a href="#" className="hover:text-[var(--color-datum-ivory)] transition-colors">Dynamic Pricing</a></motion.li>
                <motion.li variants={itemVariants}><a href="#" className="hover:text-[var(--color-datum-ivory)] transition-colors">Documentation</a></motion.li>
                <motion.li variants={itemVariants}><a href="#" className="hover:text-[var(--color-datum-ivory)] transition-colors">Contact Support</a></motion.li>
              </ul>
            </motion.div>

            {/* Newsletter Form */}
            <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter email for updates..." 
                className="bg-white/[0.02] border border-white/10 text-[var(--color-datum-ivory)] placeholder-[var(--color-datum-muted)] rounded-xl px-4 py-3 w-full focus:outline-none focus:border-[var(--color-datum-primary)] transition-colors"
              />
              <button className="bg-[var(--color-datum-ivory)] text-[#071018] px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors shrink-0">
                Subscribe
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-center text-xs text-[var(--color-datum-muted)] border-t border-white/5 pt-6">
          <p>© 2026 DatumAI. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[var(--color-datum-ivory)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-datum-ivory)] transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default FooterBlock;