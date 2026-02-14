import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-[-50px] text-pink-200 opacity-30 text-4xl"
          style={{ left: `${heart.left}%` }}
          animate={{
            y: [0, -1000],
            opacity: [0.3, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;