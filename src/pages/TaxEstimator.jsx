import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TaxEstimator = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (event) => {
      if (!event.data || typeof event.data.datumEstimatorHeight !== 'number') return;
      if (iframeRef.current) {
        iframeRef.current.style.height = `${event.data.datumEstimatorHeight + 40}px`;
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="w-full bg-white py-6 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-[1240px] mx-auto px-2 sm:px-4"
      >
        <iframe
          ref={iframeRef}
          id="datum-estimator"
          src="/tools/estimator.html"
          title="Datum AI 2026 Tax Estimator"
          className="w-full border-0 block min-h-[1400px]"
          scrolling="no"
        />
      </motion.div>
    </div>
  );
};

export default TaxEstimator;
