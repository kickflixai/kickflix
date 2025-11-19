
import React from 'react';
import { Youtube, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="font-display text-2xl font-bold text-white tracking-widest mb-2">KICKFLIX</div>
          <p className="text-gray-600 text-xs uppercase tracking-widest">© 2025 All Rights Reserved</p>
        </div>

        <div className="flex gap-6">
          <a href="mailto:solo@kickflix.ai" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
            <Mail size={20} />
          </a>
          <a href="https://x.com/kickflixAI" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
            <Twitter size={20} />
          </a>
          <a href="https://www.youtube.com/@solofilmsAI" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
