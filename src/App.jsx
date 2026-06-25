import React from 'react';
// Import từ thư mục components
import Navbar from './components/Navbar';

// Import từ thư mục blocks
import HeroBlock from './blocks/HeroBlock';
import PlatformsBlock from './blocks/PlatformsBlock';
import ProductsBlock from './blocks/ProductsBlock';
import FooterBlock from './blocks/FooterBlock';

function App() {
  return (
    <div className="bg-mysten-white font-sans selection:bg-mysten-red selection:text-white">
      <Navbar />
      <main>
        <HeroBlock />
        <PlatformsBlock />
        <ProductsBlock />
      </main>
      <FooterBlock />
    </div>
  );
}

export default App;