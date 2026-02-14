import React from 'react';
import { motion } from 'framer-motion';
import { MEMORIES } from '../constants';

const MemoriesGallery: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl handwriting text-rose-600 mb-4">Our Sweetest Moments</h2>
        <p className="text-gray-600 text-lg">Just a few reasons why I smile</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {MEMORIES.map((memory, idx) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 0,
              zIndex: 10,
              transition: { duration: 0.2 }
            }}
            className="bg-white p-4 pb-16 shadow-xl w-64 transform transition-all duration-300 relative group cursor-pointer"
            style={{ rotate: `${memory.rotation}deg` }}
          >
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-4 relative">
              <img 
                src={memory.url} 
                alt={memory.caption} 
                className="w-full h-full object-cover filter sepia-[0.2] group-hover:sepia-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p className="handwriting text-2xl text-gray-800">{memory.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MemoriesGallery;