
import React from 'react';
import { Reveal } from './ui/Reveal';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 md:py-48 bg-brand-black border-t border-white/10 relative overflow-hidden">
       {/* Decorative Yellow Glow */}
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Increased gap from 20 to 32 for better spacing */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          <div>
            <Reveal>
              <span className="font-mono text-xs text-brand-yellow uppercase tracking-widest mb-6 block">
                ( 04 ) &nbsp;&mdash;&nbsp; Partnership
              </span>
              <h2 className="text-6xl md:text-8xl font-display font-bold text-white leading-[0.9] mb-12 tracking-tighter">
                LET'S BUILD<br />
                THE <span className="text-brand-yellow">UNIMAGINABLE.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg text-gray-400 font-sans font-light mb-12 max-w-md leading-relaxed">
                KICKFLIX is currently accepting partnerships for Q4 2025 and Q1 2026. High-end brands buy vision, strategy, and prestige. We provide all three.
              </p>
              <div className="space-y-4 text-white font-mono text-sm uppercase tracking-widest">
                <a href="mailto:solo@kickflix.ai" className="flex items-center gap-4 group cursor-pointer w-fit">
                    <div className="w-2 h-2 bg-brand-yellow rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="hover:text-brand-yellow transition-colors border-b border-transparent hover:border-brand-yellow/50">solo@kickflix.ai</span>
                </a>
                <div className="flex items-center gap-4 group cursor-pointer w-fit">
                    <div className="w-2 h-2 bg-gray-800 rounded-full group-hover:bg-brand-yellow transition-colors"></div>
                    <span className="hover:text-brand-yellow transition-colors">Los Angeles, CA</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="pt-8">
            <Reveal width="100%" delay={400}>
              <form 
                action="https://formsubmit.co/solo@kickflix.ai" 
                method="POST"
                className="space-y-12"
              >
                {/* Honeypot for spammers */}
                <input type="text" name="_honey" style={{display: 'none'}} />
                
                {/* Disable Captcha */}
                <input type="hidden" name="_captcha" value="false" />
                
                {/* Redirect/Success Config - Formsubmit handles default success page */}
                <input type="hidden" name="_subject" value="New Partnership Inquiry - KICKFLIX" />

                <div className="relative group">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-2 block">Identify Yourself</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Your Name / Company"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white focus:outline-none focus:border-brand-yellow transition-colors font-display placeholder-white/10 uppercase"
                  />
                </div>
                <div className="relative group">
                   <label className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-2 block">Communication Line</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white focus:outline-none focus:border-brand-yellow transition-colors font-display placeholder-white/10 uppercase"
                  />
                </div>
                <div className="relative group">
                   <label className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-2 block">The Vision</label>
                  <textarea 
                    name="message"
                    required
                    placeholder="Tell us what you need..."
                    rows={3}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white focus:outline-none focus:border-brand-yellow transition-colors font-display placeholder-white/10 uppercase resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="group w-full md:w-auto px-12 py-6 bg-brand-white text-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-yellow transition-all duration-300 flex items-center justify-center gap-4">
                  <span>Inquire for Representation</span>
                  <div className="w-2 h-2 bg-black rounded-full group-hover:animate-ping"></div>
                </button>
              </form>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
