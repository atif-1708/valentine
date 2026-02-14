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
      audioRef.current.volume = 0.5;
    }

    const attemptPlay = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            // Remove listeners once playing starts
            document.removeEventListener('click', attemptPlay);
            document.removeEventListener('touchstart', attemptPlay);
            document.removeEventListener('keydown', attemptPlay);
          })
          .catch(err => {
            console.log("Autoplay blocked by browser, waiting for interaction");
          });
      }
    };

    // Try immediately (might be blocked by browser)
    attemptPlay();

    // Try on any user interaction (click, touch, key press)
    document.addEventListener('click', attemptPlay);
    document.addEventListener('touchstart', attemptPlay);
    document.addEventListener('keydown', attemptPlay);

    return () => {
      document.removeEventListener('click', attemptPlay);
      document.removeEventListener('touchstart', attemptPlay);
      document.removeEventListener('keydown', attemptPlay);
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
    // Ensure music plays if it hasn't already
    if (audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.error("Auto-play blocked:", err));
    }
  };