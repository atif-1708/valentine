import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { LETTER_CONTENT } from '../constants';
import { X } from 'lucide-react';

interface LoveLetterProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoveLetter: React.FC<LoveLetterProps> = ({ isOpen, onClose }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const letterRef = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    if (isOpen && index < LETTER_CONTENT.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + LETTER_CONTENT.charAt(index));
        setIndex((prev) => prev + 1);
      }, 30); // Speed of typing
      return () => clearTimeout(timeout);
    }
  }, [index, isOpen]);

  // Reset when closed
  useEffect(() => {
    if (!isOpen) {
      setDisplayedText('');
      setIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        className="bg-white max-w-2xl w-full p-8 rounded-2xl shadow-2xl relative overflow-y-auto max-h-[90vh] border-2 border-rose-100"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 50 }}
        animate={{ y: 0 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-rose-500 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="prose prose-rose max-w-none">
          <h2 className="handwriting text-4xl text-rose-600 mb-6 text-center">To Ayesha...</h2>
          <div className="text-lg leading-relaxed text-gray-700 whitespace-pre-wrap font-medium">
            {displayedText}
            {index < LETTER_CONTENT.length && (
              <span className="animate-pulse inline-block w-1 h-5 bg-rose-400 ml-1 align-middle"></span>
            )}
          </div>
        </div>
        
        {index >= LETTER_CONTENT.length && (
          <div className="mt-8 text-center">
            <p className="text-rose-400 text-sm">
              ( You can close this anytime, but never close your heart to me 😉 )
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default LoveLetter;