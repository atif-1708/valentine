import React, { useState, useRef, useEffect } from 'react';
import { Music, VolumeX } from 'lucide-react';
import { BACKGROUND_MUSIC_URL } from '../constants';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Set initial volume low
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      <audio ref={audioRef} src={BACKGROUND_MUSIC_URL} loop />
      <button
        onClick={togglePlay}
        className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 text-rose-500 hover:scale-110"
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? <Music size={24} className="animate-pulse" /> : <VolumeX size={24} />}
      </button>
    </div>
  );
};

export default MusicPlayer;