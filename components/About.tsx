
import React from 'react';
import { Reveal } from './ui/Reveal';

export const About: React.FC = () => {
  return (
    <section className="py-32 bg-brand-black border-t border-white/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Image */}
          <div className="lg:col-span-5 relative">
            <Reveal>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10 group">
                {/* Yellow overlay effect */}
                <div className="absolute inset-0 bg-brand-yellow/20 mix-blend-multiply z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-20"></div>
                
                {/* Founder Image */}
                <img 
                  src="https://res.cloudinary.com/dyqus7sfo/image/upload/v1763560943/1705508578530_kygpf1.jpg" 
                  alt="Solo - The Architect" 
                  className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-1000"
                />
              </div>
              
              {/* Caption */}
              <div className="mt-4 flex justify-between items-end">
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">SOLO</h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-brand-yellow">Founder & Creative Director</p>
                </div>
                {/* Fake Digital Signature */}
                <div className="font-signature text-4xl text-white/50 -rotate-6">
                  Solo
                </div>
              </div>
            </Reveal>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7">
             <Reveal delay={200}>
              <span className="font-mono text-xs text-brand-yellow uppercase tracking-widest mb-8 block">
                ( The Architect )
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                Speaks the language of cinema. <br />
                Understands the logic of <br />
                <span className="text-transparent text-stroke">the algorithm.</span>
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
                <p>
                  Raised in the creative hub of Montreal, Solo represents a new class of Creative Director: one who merges artistic intuition with generative capability.
                </p>
                <p>
                  With over a decade of expertise in high-stakes sales and marketing, Solo has advised hundreds of brands, engineering growth strategies that have engaged millions of users worldwide. He doesn't just understand how to create content; he understands the psychology of why people watch it.
                </p>
                <p>
                  At <strong className="text-white">KICKFLIX</strong>, Solo harnesses this background to bridge the gap between narrative art and commercial strategy. He was <span className="text-brand-yellow italic">one of the first AI Filmmakers</span> in the world and remains a top industry leader—using generative cinema not just to tell stories, but to build worlds that drive measurable brand evolution.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
