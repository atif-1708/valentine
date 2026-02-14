import React, { useState } from 'react';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';
import HeroSection from './components/HeroSection';
import LoveLetter from './components/LoveLetter';
import MemoriesGallery from './components/MemoriesGallery';
import RelationshipContract from './components/RelationshipContract';
import ValentinePopup from './components/ValentinePopup';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden selection:bg-rose-200 selection:text-rose-900">
      {/* Background Elements */}
      <FloatingHearts />
      <MusicPlayer />
      
      {/* Scroll-triggered popup */}
      <ValentinePopup />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection onOpenLetter={() => setIsLetterOpen(true)} />
        
        <div className="container mx-auto">
          <MemoriesGallery />
          <RelationshipContract />
        </div>
      </main>

      <Footer />

      {/* Modals */}
      <LoveLetter 
        isOpen={isLetterOpen} 
        onClose={() => setIsLetterOpen(false)} 
      />
    </div>
  );
};

export default App;