import React from 'react';
import Navbar from './components/Navbar';
import HeroBlock from './blocks/HeroBlock';
import PlatformsBlock from './blocks/PlatformsBlock';
import FooterBlock from './blocks/FooterBlock';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Loại bỏ hoàn toàn các class màu sắc cũ, để body trong index.css tự lo việc render Dark Theme */}
      <Navbar />
      <main className="flex-grow">
        <HeroBlock />
        <PlatformsBlock />
      </main>
      <FooterBlock />
    </div>
  );
}

export default App;