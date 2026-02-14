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

  // Initialize volume and setup auto-play on first interaction
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Slightly lower volume for background
    }

    const playMusic = async () => {
      if (audioRef.current && audioRef.current.paused) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          // Cleanup listeners if successful
          ['click', 'touchstart', 'keydown', 'scroll'].forEach(event => 
            document.removeEventListener(event, playMusic)
          );
        } catch (err) {
          console.log("Autoplay blocked, waiting for user interaction");
        }
      }
    };

    // Attempt immediately
    playMusic();

    // Add listeners for any user interaction to start music
    const events = ['click', 'touchstart', 'keydown', 'scroll'];
    events.forEach(event => document.addEventListener(event, playMusic));

    return () => {
      events.forEach(event => document.removeEventListener(event, playMusic));
    };
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
    // Ensure music plays if it hasn't already (redundant backup)
    if (audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden selection:bg-rose-200 selection:text-rose-900">
      {/* Hidden Audio Element with autoPlay attribute */}
      <audio 
        ref={audioRef} 
        src={BACKGROUND_MUSIC_URL} 
        loop 
        autoPlay
        preload="auto"
        onError={(e) => console.error("Audio error:", e.currentTarget.error)}
      />

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