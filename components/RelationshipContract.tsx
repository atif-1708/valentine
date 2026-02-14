import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Check, Heart } from 'lucide-react';
import { CONTRACT_CLAUSES } from '../constants';

const RelationshipContract: React.FC = () => {
  const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    setAgreed(true);
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#e11d48', '#fb7185', '#ffe4e6']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#e11d48', '#fb7185', '#ffe4e6']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm rounded-3xl mx-4 md:mx-auto max-w-4xl shadow-xl my-20 border border-rose-100">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl handwriting text-rose-600 mb-4">The Relationship Contract</h2>
        <p className="text-gray-600">By continuing, you agree to the following terms & conditions:</p>
      </div>

      <div className="space-y-4 max-w-2xl mx-auto mb-10">
        {CONTRACT_CLAUSES.map((clause, idx) => (
          <motion.div
            key={clause.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-rose-50 hover:border-rose-200 transition-colors"
          >
            <div className={`p-2 rounded-full ${agreed ? 'bg-green-100 text-green-600' : 'bg-rose-100 text-rose-500'}`}>
              <Check size={20} />
            </div>
            <p className="text-lg text-gray-700 font-medium">{clause.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAgree}
          disabled={agreed}
          className={`
            px-12 py-4 rounded-full text-xl font-bold shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto
            ${agreed 
              ? 'bg-green-500 text-white cursor-default' 
              : 'bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:shadow-rose-300/50'
            }
          `}
        >
          {agreed ? (
            <>
              <Check size={24} /> Contract Signed!
            </>
          ) : (
            <>
              <Heart size={24} className="animate-bounce" /> I Agree
            </>
          )}
        </motion.button>
        {agreed && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-rose-500 font-handwriting text-xl"
          >
            No takebacks! 😜
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default RelationshipContract;