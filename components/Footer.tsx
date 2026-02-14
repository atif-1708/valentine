import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white/40 backdrop-blur-md border-t border-rose-100 text-center relative z-10">
      <p className="text-rose-800 font-medium">
        Made with infinite love by Atif ❤️
      </p>
      <p className="text-rose-400 text-xs mt-2 opacity-70">
        &copy; {new Date().getFullYear()} Forever & Always
      </p>
    </footer>
  );
};

export default Footer;