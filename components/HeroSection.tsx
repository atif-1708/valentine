import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface HeroSectionProps {
  onOpenLetter: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenLetter }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
        <span className="inline-block py-1 px-3 rounded-full bg-rose-200 text-rose-700 text-sm font-bold tracking-wider mb-4">
          HAPPY VALENTINE'S DAY
        </span>
        <h1 className="text-5xl md:text-7xl handwriting text-rose-600 mb-4 drop-shadow-sm">
          To My Beautiful Ayesha ❤️
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light italic">
          "This little corner of the internet belongs to you"
        </p>
      </motion.div>

      <motion.button
        onClick={onOpenLetter}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: ["0px 0px 0px rgba(244, 63, 94, 0.4)", "0px 0px 20px rgba(244, 63, 94, 0.4)", "0px 0px 0px rgba(244, 63, 94, 0.4)"]
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity }
        }}
        className="group relative bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xl md:text-2xl py-4 px-10 rounded-full shadow-xl overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-3 font-bold">
          <Heart className="fill-current" /> Open My Heart
        </span>
        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </motion.button>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 animate-bounce text-rose-400"
      >
        <p className="text-sm">Scroll for more surprises ↓</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;