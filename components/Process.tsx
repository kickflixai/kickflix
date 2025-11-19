
import React, { useState, useEffect, useRef } from 'react';
import { Reveal } from './ui/Reveal';

const steps = [
  {
    id: '01',
    title: 'RADICAL SPEED',
    desc: 'Traditional production takes months. We move at the speed of the internet. We turn concepts into campaigns in days, allowing your brand to react to trends while others are still planning.'
  },
  {
    id: '02',
    title: 'INFINITE PRODUCTION',
    desc: 'We’ve killed the budget constraint. Whether you need a cyberpunk city or a macro shot, we create million-dollar visuals without the million-dollar set. If you can imagine it, we can create it.'
  },
  {
    id: '03',
    title: 'ENGINEERED VIRALITY',
    desc: 'Pretty isn\'t enough; it has to perform. We leverage deep social insights to craft visuals that trigger "Wow" moments. We don\'t just make art; we build assets designed to convert.'
  }
];

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      
      let closestIndex = 0;
      let minDistance = Number.MAX_VALUE;

      stepRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - elementCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveStep(closestIndex);

      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const startOffset = window.innerHeight * 0.3;
        const scrollY = -containerRect.top + startOffset;
        const totalHeight = containerRect.height;
        const progress = Math.min(Math.max(scrollY / totalHeight, 0), 1);
        setProgressHeight(progress * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" ref={containerRef} className="bg-brand-black relative z-10 border-t border-white/5 overflow-hidden min-h-screen">
      
      {/* VHS Background Texture - Increased Visibility */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen">
        <video 
          src="https://www.pexels.com/download/video/30829214/" 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover filter contrast-125 grayscale"
        />
        <div className="absolute inset-0 bg-brand-black/70"></div>
      </div>

      {/* Progress Line (Desktop) */}
      <div className="absolute left-6 md:left-24 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block z-20">
         <div 
            className="w-full bg-brand-yellow shadow-[0_0_20px_#FFC000] transition-all duration-100 ease-out"
            style={{ height: `${progressHeight}%` }}
         ></div>
      </div>

      <div className="max-w-[90%] md:max-w-[80%] mx-auto px-6 py-32 md:py-48 relative z-10">
        
        {/* Massive Headline Header */}
        <div className="mb-32 md:mb-48 pl-0 md:pl-24">
           <Reveal width="100%">
              <span className="font-mono text-xs text-brand-yellow uppercase tracking-widest mb-6 block">
                 ( 02 ) &nbsp;&mdash;&nbsp; Protocol
               </span>
               <h2 className="font-display font-bold text-white uppercase tracking-tighter leading-[0.8] text-[12vw] md:text-[10vw] mix-blend-difference">
                The Kickflix <br/> Method
              </h2>
           </Reveal>
        </div>

        {/* Cinematic Focus List */}
        <div className="flex flex-col gap-32 md:gap-64 pl-0 md:pl-24">
          {steps.map((step, index) => (
            <div 
              key={index}
              ref={(el) => { stepRefs.current[index] = el; }}
              className={`group transition-all duration-1000 ease-out transform ${
                activeStep === index 
                  ? 'opacity-100 translate-x-0 blur-0' 
                  : 'opacity-30 translate-x-8 blur-[2px]'
              }`}
            >
               <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Number - Massive */}
                  <div className="md:col-span-3 hidden md:block relative">
                    <span className={`font-display font-bold text-[10rem] md:text-[12rem] leading-none absolute -top-20 -left-12 transition-all duration-700 ${
                      activeStep === index 
                        ? 'text-brand-yellow opacity-100 scale-100' 
                        : 'text-transparent text-stroke opacity-20 scale-75'
                    }`}>
                      {step.id}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-9 relative pt-4 md:pt-0">
                     {/* Mobile Number */}
                     <span className="md:hidden font-display font-bold text-6xl text-brand-yellow mb-4 block">
                        {step.id}
                     </span>

                     <h3 className={`font-display font-bold uppercase leading-[0.85] tracking-tight mb-8 transition-all duration-700 ${
                        activeStep === index 
                          ? 'text-5xl md:text-8xl text-white' 
                          : 'text-4xl md:text-6xl text-transparent text-stroke' 
                     }`}>
                       {step.title}
                     </h3>
                     
                     <div className={`overflow-hidden transition-all duration-1000 ${
                        activeStep === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                     }`}>
                        {/* Artsy/Technical Description Font */}
                        <p className="font-mono text-sm md:text-base text-gray-400 tracking-wide leading-loose max-w-2xl border-l border-brand-yellow pl-6 ml-2">
                          {step.desc}
                        </p>
                     </div>
                  </div>

               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
