import React, { useState, useRef, useEffect } from 'react';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';
import HeroSection from './components/HeroSection';
import LoveLetter from './components/LoveLetter';
import MemoriesGallery from './components/MemoriesGallery';
import RelationshipContract from './components/RelationshipContract';
import ValentinePopup from './components/ValentinePopup';
import Footer from './components/Footer';
import { BACKGROUND_MUSIC_URL } from './constants';

const App: React.FC = () => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Initialize volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.error("Audio playback failed:", err));
      }
    }
  };

  const handleOpenLetter = () => {
    setIsLetterOpen(true);
    // Auto-play music when user interacts with the main button
    if (audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.error("Auto-play blocked:", err));
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden selection:bg-rose-200 selection:text-rose-900">
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={BACKGROUND_MUSIC_URL} loop />

      {/* Background Elements */}
      <FloatingHearts />
      <MusicPlayer 
        isPlaying={isPlaying} 
        onToggle={toggleMusic} 
      />
      
      {/* Scroll-triggered popup */}
      <ValentinePopup />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection onOpenLetter={handleOpenLetter} />
        
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