import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import togetherImg from '../images/togetherbussin.png';
import threePersonImg from '../images/threeperson.png';

const servicesData = [
  {
    id: 1,
    title: 'Business Formation',
    description: 'Form the right entity—LLC, corporation, partnership, or non-profit—and keep you compliant every step of the way.',
  },
  {
    id: 2,
    title: 'Bookkeeping & Payroll',
    description: 'Organized Bookkeeping and seamless Payroll Management.',
  },
  {
    id: 3,
    title: 'Corporate Taxation & Advanced Planning',
    description: 'CPAs and Big 4 alumni deliver institutional-grade tax planning and precision filing.',
  },
  {
    id: 4,
    title: 'IT Services',
    description: 'Enterprise Web Development & Full-Suite IT Support.',
  },
];

const financialOpsData = [
  {
    id: 1,
    title: 'Accounting Transformation Platform',
    description: 'Unified, audit‑ready platform that centralizes and automates accounting workflows.',
  },
  {
    id: 2,
    title: 'AI Agents & Automation',
    description: 'No-code AI agents that generate checklists, explain variances, match transactions, and automate inbox tasks.',
  },
  {
    id: 3,
    title: 'Optimize the Close',
    description: 'Standardize close processes and gain global visibility into tasks and status.',
  },
  {
    id: 4,
    title: 'Automate the Close',
    description: 'End-to-end automation for reconciliations, follow-ups, and close tasks.',
  },
  {
    id: 5,
    title: 'Connected Compliance',
    description: 'Automated evidence collection and controls to reduce compliance risk.',
  },
  {
    id: 6,
    title: 'Integrated Record‑to‑Report',
    description: 'Faster, more accurate reporting by consolidating systems and processes.',
  },
];

const cardClass =
  'rounded-2xl p-8 border border-transparent hover:border-gray-900 transition-colors duration-300';

const BusinessServices = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10"
      >
        Comprehensive Business Solutions
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-md mx-auto mb-14 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
      >
        <img
          src={togetherImg}
          alt="Business Team Collaboration"
          className="w-full h-auto object-cover block"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className={cardClass}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
            <p className="text-base text-gray-600 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10"
      >
        Advanced Financial Operations Solutions
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-md mx-auto mb-14 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
      >
        <img
          src={threePersonImg}
          alt="DatumAI Team"
          className="w-full h-auto object-cover block"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        {financialOpsData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className={cardClass}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
            <p className="text-base text-gray-600 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 items-center justify-center"
      >
        <button
          onClick={handleContact}
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-0 cursor-pointer font-bold bg-[#008899] text-white shadow-[0_8px_20px_rgba(0,136,153,0.3)] hover:bg-[#007080] hover:-translate-y-1 transition-all duration-300"
        >
          Contact us now for consultancy
        </button>
        <div className="flex items-center gap-2 text-gray-700 font-semibold text-lg px-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#008899]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.439-4.099-7.031-7.031l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          +(404) 462 1315
        </div>
      </motion.div>
    </div>
  );
};

export default BusinessServices;
