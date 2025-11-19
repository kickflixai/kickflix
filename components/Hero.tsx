
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Laurel } from './ui/Laurel';

const awards = [
  { id: 1, alt: "OMNI Gold Winner", src: "https://res.cloudinary.com/dyqus7sfo/image/upload/v1763560982/GOLDEN_WINNER_-_OMNI_International_AI_Film_Festival_Sydney_Australia_-_2025_uzgywz.png" },
  { id: 2, alt: "Liberty Films Best AI Film", src: "https://res.cloudinary.com/dyqus7sfo/image/upload/v1763560982/BEST_AI_FILM_-_Liberty_Films_Festival_-_2025_1_mqsgn5.png" },
  { id: 3, alt: "Meta Morph Nominee", src: "https://res.cloudinary.com/dyqus7sfo/image/upload/v1763560982/NOMINEE_-_Meta_Morph_AI_Film_Award_-_2025_1_ybk9s9.png" },
  { id: 4, alt: "Dialog Film Festival Best AI Film", src: "https://res.cloudinary.com/dyqus7sfo/image/upload/v1763561180/BEST_AI_FILM_-_Dialog_Film_Festival_-_2025_doelrh.png" },
  { id: 5, alt: "Neu Wave Finalist", src: "https://res.cloudinary.com/dyqus7sfo/image/upload/v1763560981/new_laurel_tlmhu6.png" },
  { id: 6, alt: "Best AI Experimental Film", src: "https://res.cloudinary.com/dyqus7sfo/image/upload/v1763560981/BEST_AI_EXPERIMENTAL_FILM_w_vbb3wz.png" },
  { id: 7, alt: "Winner Experimental", src: "https://res.cloudinary.com/dyqus7sfo/image/upload/v1763560981/WINNER_w_dpRrIy_z54yak.png" },
];

export const Hero: React.FC = () => {
  const [showReel, setShowReel] = useState(false);

  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-brand-black select-none">
      
      {/* Background - Clean Void with Subtle Grain */}
      <div className="absolute inset-0 z-0">
        {/* Video Background - Natural Colors, 50% Opacity */}
        <video 
          src="https://www.pexels.com/download/video/4431789/" 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        
        {/* Yellow Cinematic Filter */}
        <div className="absolute inset-0 bg-brand-yellow/20 mix-blend-overlay z-10 pointer-events-none"></div>
        
        {/* Heavy Vignette for Cinema feel */}
        <div className="absolute inset-0 bg-vignette z-20 pointer-events-none" />

        {/* Bottom Fade Gradient - Increased to 50vh for seamless blend */}
        <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-brand-black via-brand-black/90 to-transparent z-20 pointer-events-none"></div>
        
        {/* Subtle Stardust Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay z-10 animate-pulse"></div>
      </div>

      {/* Content - Immediate CSS Animation */}
      <div className="relative z-30 w-full max-w-[100rem] mx-auto px-4 flex flex-col justify-center h-full items-center text-center mt-8">
        
        {/* Badge */}
        <div className="animate-[fadeIn_1s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="border border-white/10 bg-black/40 backdrop-blur-md px-4 py-1 rounded-full mb-8 inline-block cursor-default shadow-[0_0_15px_rgba(255,192,0,0.1)]">
            <div className="flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse shadow-[0_0_10px_#FFC000]"></span>
               <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-white/90">
                 AI FILMMAKING STUDIO
               </span>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <div className="animate-[slideUp_1s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.3s' }}>
           <h1 className="font-display font-black text-[12vw] md:text-[8vw] leading-[0.9] md:leading-[0.85] tracking-tighter text-white uppercase mix-blend-difference opacity-90 drop-shadow-2xl">
            CINEMATIC MARKETING <br />
            FOR <span className="text-brand-yellow text-stroke-hover cursor-none">BOLD BRANDS</span>
           </h1>
        </div>

        {/* Subtext */}
        <div className="animate-[slideUp_1s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.5s' }}>
          <p className="mt-8 text-sm md:text-lg font-sans font-light text-white/80 max-w-3xl mx-auto leading-relaxed mix-blend-plus-lighter px-4">
            We combine elite creative strategy with generative cinema to produce broadcast-quality campaigns without physical limits. We turn ambitious concepts into viral reality—faster than traditional production allows.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-6 mt-12 items-center animate-[slideUp_1s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.7s' }}>
          <a 
            href="#portfolio"
            onClick={scrollToPortfolio}
            className="group relative px-8 py-4 bg-brand-yellow text-black text-xs font-bold font-mono uppercase tracking-widest overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Our Work</span>
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out"></div>
          </a>
          <button 
            onClick={() => setShowReel(true)}
            className="group flex items-center gap-4 px-4 py-2 text-xs font-bold font-mono uppercase tracking-widest text-white hover:text-brand-yellow transition-colors"
          >
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-brand-yellow group-hover:scale-110 transition-all duration-300">
              <Play fill="currentColor" size={10} />
            </div>
            <span>Watch Showreel</span>
          </button>
        </div>

      </div>

      {/* Infinite Laurel Marquee - Sticky Bottom */}
      <div className="absolute bottom-0 left-0 w-full py-6 z-40 border-t border-white/5 bg-brand-black/80 backdrop-blur-md animate-[fadeIn_1.5s_ease-out_forwards]">
        <div className="overflow-hidden relative w-full">
          <div className="flex animate-marquee whitespace-nowrap items-center hover:[animation-play-state:paused]">
            {[...awards, ...awards, ...awards].map((award, i) => (
              <Laurel 
                key={i} 
                src={award.src}
                alt={award.alt} 
                className="mx-8 md:mx-16 opacity-50 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0 scale-75 md:scale-90 hover:scale-100 cursor-pointer" 
              />
            ))}
          </div>
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-black to-transparent z-50"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-black to-transparent z-50"></div>
        </div>
      </div>

      {/* Showreel Modal */}
      {showReel && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300 p-4 md:p-12">
          <button 
            onClick={() => setShowReel(false)}
            className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-brand-yellow text-white hover:text-black rounded-full transition-all duration-300 z-50"
          >
            <X size={24} strokeWidth={2} />
          </button>
          
          <div className="w-full max-w-7xl aspect-video relative border border-white/10 shadow-2xl shadow-brand-yellow/10 rounded-sm overflow-hidden bg-black">
            <iframe 
              src="https://player.vimeo.com/video/1138524245?autoplay=1&title=0&byline=0&portrait=0" 
              className="w-full h-full" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
              title="KICKFLIX Showreel"
            ></iframe>
          </div>
        </div>
      )}

    </section>
  );
};
