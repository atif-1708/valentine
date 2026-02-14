import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Music } from 'lucide-react';

interface ValentinePopupProps {
  onStartMusic: () => void;
}

const ValentinePopup: React.FC<ValentinePopupProps> = ({ onStartMusic }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [noCount, setNoCount] = useState(0);

  useEffect(() => {
    // Show popup almost immediately after load
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleYes = () => {
    onStartMusic(); // Trigger music playback
    setAnswered(true);
    // Big heart explosion
    const scalar = 2;
    const heart = confetti.shapeFromText({ text: '❤️', scalar });

    confetti({
      shapes: [heart],
      scalar,
      particleCount: 30,
      spread: 100,
      origin: { y: 0.6 } // Center screen vertically
    });
    
    // Close popup faster so they can see the site
    setTimeout(() => setShowPopup(false), 2500);
  };

  const handleNo = () => {
    setNoCount(noCount + 1);
  };

  const getNoText = () => {
    const phrases = [
      "No 💔",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Don't do this 🥺",
      "I'll be so sad...",
      "I'm gonna cry...",
      "I'll make biryani! 🍛",
      "You're breaking my heart ;(",
      "Plain cruel...",
      "Ok fine, I'll stop asking...",
      "Just kidding, please say yes! ❤️"
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border-4 border-rose-200 overflow-hidden relative"
          >
            {!answered ? (
              <>
                <div className="text-6xl mb-4 animate-bounce">💌</div>
                <h3 className="text-3xl handwriting text-rose-600 mb-2">
                   {noCount === 0 ? "Will you be my Valentine forever, Ayesha?" : "Pretty please? 🥺"}
                </h3>
                <p className="text-gray-500 mb-6 flex items-center justify-center gap-2 text-sm">
                  <Music size={16} /> Turn on sound for the magic?
                </p>
                
                <div className="flex flex-col gap-3 items-center w-full">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleYes}
                    animate={{ scale: 1 + noCount * 0.1 }}
                    className="bg-rose-500 text-white py-3 px-6 rounded-xl font-bold text-lg shadow-lg hover:bg-rose-600 transition-all duration-300 w-full z-10"
                  >
                    {noCount === 0 ? "Yes ❤️" : "YES (Click me!) ❤️"}
                  </motion.button>
                  
                  {noCount === 0 && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleYes}
                      className="bg-pink-100 text-rose-600 py-3 px-6 rounded-xl font-bold text-lg hover:bg-pink-200 transition-colors w-full"
                    >
                      Obviously Yes 😌
                    </motion.button>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNo}
                    className="bg-gray-100 text-gray-500 py-3 px-6 rounded-xl font-medium text-lg hover:bg-gray-200 transition-colors w-full"
                  >
                    {getNoText()}
                  </motion.button>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                 <div className="text-6xl mb-4">😎</div>
                 <h3 className="text-3xl font-bold text-rose-600 mb-2">I knew it!</h3>
                 <p className="text-gray-600">Best decision you ever made.</p>
                 <p className="text-sm text-rose-400 mt-2 animate-pulse">Playing our song... 🎵</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ValentinePopup;