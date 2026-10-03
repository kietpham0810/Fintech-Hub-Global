import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
import FooterBlock from './blocks/FooterBlock';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import IndividualServices from './pages/IndividualServices';
import BusinessServices from './pages/BusinessServices';
import PricingEstimate from './pages/PricingEstimate';
import TaxEstimator from './pages/TaxEstimator';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Thanh điều hướng toàn cục */}
      <Navbar />
      <ScrollToTop />

      {/* Khu vực nội dung thay đổi động theo URL */}
      <main className="flex-grow">
        <Routes>
          {/* Mọi request vào đường dẫn gốc "/" sẽ được điều phối tới Home Component */}
          <Route path="/" element={<Home />} />
          
          {/* Định tuyến cho trang About Us (Phong cách Deloitte) */}
          <Route path="/about" element={<About />} />
          
          {/* Định tuyến cho trang Contact (Layout chia đôi) */}
          <Route path="/contact" element={<Contact />} />

          {/* Định tuyến cho trang Individual Services */}
          <Route path="/individual-services" element={<IndividualServices />} />

          {/* Định tuyến cho trang Business Services */}
          <Route path="/business-services" element={<BusinessServices />} />

          {/* Định tuyến cho trang Pricing Estimate (Individual Tax Calculator) */}
          <Route path="/pricing-estimate" element={<PricingEstimate />} />

          {/* Định tuyến cho trang Tax Estimator */}
          <Route path="/tax-estimator" element={<TaxEstimator />} />
        </Routes>
      </main>

      {/* Footer toàn cục */}
      <FooterBlock />
    </div>
  );
}

export default App;