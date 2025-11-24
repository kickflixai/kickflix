
import React, { useState, useEffect, useRef } from 'react';

const pillars = [
  {
    id: '01',
    title: 'Radical Speed',
    desc: 'Traditional production takes months. We move at the speed of the internet. We turn concepts into campaigns in days, allowing your brand to react to trends while others are still planning.',
    video: 'https://res.cloudinary.com/dyqus7sfo/video/upload/v1759138742/720p_D_ORSEY_-_PERFUME_sample_bf96e3.mov' // Tunnel Speed
  },
  {
    id: '02',
    title: 'Infinite Production',
    desc: 'We’ve killed the budget constraint. Whether you need a cyberpunk city or a macro shot, we create million-dollar visuals without the million-dollar set. If you can imagine it, we can create it.',
    video: 'https://res.cloudinary.com/dyqus7sfo/video/upload/v1759138730/720p_WIZARD_sample_rrmmsj.mov' // Cyberpunk City
  },
  {
    id: '03',
    title: 'Engineered Virality',
    desc: 'Pretty isn\'t enough; it has to perform. We leverage deep social insights to craft visuals that trigger "Wow" moments. We don\'t just make art; we build assets designed to convert.',
    video: 'https://res.cloudinary.com/dyqus7sfo/video/upload/v1759094135/yaozi_-_portfolio_hd_tqcn2g.mov' // Abstract Ink
  }
];

export const Manifesto: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress within the section
      const scrollProgress = Math.max(0, Math.min(1, -top / (height - windowHeight)));
      
      const newIndex = Math.floor(scrollProgress * pillars.length);
      setActiveIndex(Math.min(newIndex, pillars.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="vision" 
      ref={containerRef} 
      // Reduced from 300vh to 200vh for faster scroll transitions
      className="relative h-[200vh] bg-brand-black"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        
        {/* Dynamic Video Background Layer */}
        <div className="absolute inset-0 z-0">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeIndex === index ? 'opacity-60' : 'opacity-0'}`}
            >
               <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black z-10"></div>
               <div className="absolute inset-0 bg-black/50 z-10"></div>
               <video 
                src={pillar.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-105 transform transition-transform duration-[5000ms]" 
                style={{ transform: activeIndex === index ? 'scale(1.1)' : 'scale(1.0)' }}
              />
            </div>
          ))}
        </div>

        {/* Content Layer */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center h-full">
          
          {/* Left: Navigation / Progress (Desktop) */}
          <div className="hidden md:flex flex-col gap-8">
            <div className="mb-12">
                <span className="font-mono text-xs text-brand-yellow uppercase tracking-widest mb-4 block">
                  ( 01 ) &nbsp;&mdash;&nbsp; The Philosophy
                </span>
                <h2 className="text-6xl font-display font-bold text-white uppercase tracking-tight">
                  The Future <br/> of Advertising
                </h2>
            </div>

            <div className="space-y-6">
               {pillars.map((pillar, index) => (
                 <div 
                    key={index} 
                    className={`flex items-center gap-4 transition-all duration-500 ${activeIndex === index ? 'opacity-100 translate-x-4' : 'opacity-30'}`}
                 >
                    <div className={`h-[1px] bg-brand-yellow transition-all duration-500 ${activeIndex === index ? 'w-16' : 'w-4'}`}></div>
                    <span className={`font-mono text-sm uppercase tracking-widest ${activeIndex === index ? 'text-brand-yellow' : 'text-white'}`}>
                       {pillar.title}
                    </span>
                 </div>
               ))}
            </div>
          </div>

          {/* Right: Active Content (Mobile & Desktop) */}
          <div className="mt-0 md:mt-0">
             {pillars.map((pillar, index) => (
               <div 
                 key={pillar.id} 
                 className={`transition-all duration-700 absolute top-1/2 left-0 md:left-auto -translate-y-1/2 w-full md:w-auto px-6 md:px-0 ${activeIndex === index ? 'opacity-100 translate-y-[-50%] blur-0' : 'opacity-0 translate-y-[-40%] blur-sm pointer-events-none'}`}
               >
                  <div className="md:hidden mb-4">
                    <span className="font-mono text-[10px] text-brand-yellow uppercase tracking-widest">
                       The Philosophy {pillar.id}/03
                    </span>
                  </div>
                  
                  <span className="font-display text-8xl md:text-9xl text-white/10 md:text-white/5 absolute -top-12 md:-top-20 left-4 md:-left-20 select-none -z-10">
                    {pillar.id}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-display font-bold text-white uppercase mb-6 md:mb-8 leading-none drop-shadow-lg">
                    {pillar.title}
                  </h3>
                  
                  {/* Decreased pl from 24/8 to 4 to strictly tighten spacing */}
                  <div className="bg-black/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0 md:pl-4 rounded-sm border-l-2 border-brand-yellow">
                    <p className="text-lg md:text-xl text-gray-200 md:text-gray-300 font-light leading-relaxed max-w-xl">
                      {pillar.desc}
                    </p>
                  </div>
               </div>
             ))}
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          <span className="font-mono text-[10px] uppercase text-white/50 tracking-widest">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
            <div className="w-full h-full bg-brand-yellow animate-[scan_2s_ease-in-out_infinite]"></div>
          </div>
        </div>

      </div>
    </section>
  );
};
