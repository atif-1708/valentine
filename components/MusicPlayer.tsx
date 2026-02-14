import React from 'react';
import { VolumeX, Volume2 } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onToggle }) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
       {!isPlaying && (
        <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-rose-500 shadow-md animate-bounce hidden md:block">
          Play Music 🎵
        </span>
      )}

      {/* Play/Pause Button */}
      <button
        onClick={onToggle}
        className={`
          p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border-2
          ${isPlaying 
            ? 'bg-rose-500 text-white border-rose-600' 
            : 'bg-white/80 backdrop-blur-sm text-rose-500 border-white'
          }
        `}
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? (
          <Volume2 size={24} className="animate-pulse" />
        ) : (
          <VolumeX size={24} />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;