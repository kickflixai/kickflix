
import React, { useState, useRef, MouseEvent } from 'react';
import { Reveal } from './ui/Reveal';
import { ArrowUpRight, Play, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    client: "D'ORSEY",
    title: "The Scent of Paris",
    brief: "Evoke the intangible poetry of scent through visual media.",
    creation: "A sensuous, macro-cinematic exploration of ingredients, blending poetic motion with hyper-real textures to visualize the essence of D'ORSEY.",
    image: "https://res.cloudinary.com/dyqus7sfo/image/upload/v1763563344/youtube_banner_i6mdz5.png",
    vimeoId: "1138516387"
  },
  {
    id: 4,
    client: "EFFY",
    title: "The Paris Sausage Walk",
    brief: "Create a creative video playing on the recent event of the Paris Sausage Walk.",
    creation: "Delivered in record time to ensure viral relevance, mixing extremely realistic AI with playfulness and creativity to capture the cultural moment.",
    image: "https://res.cloudinary.com/dyqus7sfo/image/upload/v1763563132/EFFY_BANNER_m7ydor.jpg",
    vimeoId: "1138523306"
  },
  {
    id: 2,
    client: "XMAQUINA",
    title: "The Machine Consensus",
    brief: "Explain complex DAO robotics investment through emotional storytelling.",
    creation: "A brand anthem that rallies a community. We juxtaposed human hope with futuristic robotics to humanize the mechanical and drive the core message: Unity.",
    image: "https://res.cloudinary.com/dyqus7sfo/image/upload/v1763563211/banneryt_amfwsv.png",
    vimeoId: "1138515188"
  },
  {
    id: 3,
    client: "PIGGYBANK",
    title: "Digital Whimsy",
    brief: "Launch a financial app with distinct character.",
    creation: "A stylized, animated universe that breaks the mold of traditional fintech marketing, turning a product launch into a visual delight.",
    image: "https://res.cloudinary.com/dyqus7sfo/image/upload/v1763563195/freepik__a-cinematic-wide-shot-of-a-golden-sunrise-over-sof__36794_qhnu61.png",
    vimeoId: "1138515406"
  }
];

export const Work: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // 3D Tilt Logic
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, id: number) => {
    if (window.innerWidth < 1024) return; // Disable on mobile
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -2; // Max 2deg rotation
    const rotateY = ((x - centerX) / centerX) * 2;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="portfolio" ref={sectionRef} className="bg-brand-black py-24 md:py-32 relative z-20 border-t border-white/5">
      
      <div className="max-w-[95%] mx-auto px-4">
        <div className="mb-16 md:mb-24">
          <Reveal>
            <span className="font-mono text-xs text-brand-yellow uppercase tracking-widest mb-4 block">
              ( 03 ) &nbsp;&mdash;&nbsp; Collection
            </span>
            <h2 className="text-6xl md:text-9xl font-display font-bold text-white uppercase tracking-tighter leading-[0.85]">
              Selected<br />
              <span className="text-brand-yellow">Works</span>
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col gap-0">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`group relative border-t border-white/10 py-12 md:py-16 transition-all duration-700 ${hoveredProject && hoveredProject !== project.id ? 'opacity-30 blur-sm' : 'opacity-100 blur-0'}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={(e) => {
                setHoveredProject(null);
                handleMouseLeave(e);
              }}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onClick={() => setPlayingVideo(project.vimeoId)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Image - Always Visible Inline */}
                <div className="lg:col-span-4 relative overflow-hidden rounded-sm cursor-pointer">
                   <div className="aspect-[2.39/1] overflow-hidden bg-white/5 relative group-hover:shadow-[0_0_30px_rgba(255,192,0,0.1)] transition-all duration-500">
                      <div className="absolute inset-0 bg-brand-yellow/20 mix-blend-color z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-1000"
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                         <div className="w-16 h-16 rounded-full bg-brand-yellow text-black flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                            <Play fill="currentColor" size={24} className="ml-1" />
                         </div>
                      </div>
                   </div>
                </div>

                {/* Client & Title */}
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-4 mb-2">
                    <h3 className="text-2xl md:text-4xl font-display font-bold text-white uppercase group-hover:text-brand-yellow transition-colors duration-300">
                      {project.client}
                    </h3>
                    <span className="text-white/20 text-2xl">/</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-display font-light text-white/80 uppercase tracking-wide">
                    {project.title}
                  </h4>
                </div>

                {/* Details */}
                <div className="lg:col-span-4 flex flex-col gap-6 pl-0 lg:pl-8 border-l-0 lg:border-l border-white/10">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-brand-yellow tracking-widest mb-2 block">The Brief</span>
                    {/* Force opacity-100 on mobile */}
                    <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed opacity-100 lg:opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                      {project.brief}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-brand-yellow tracking-widest mb-2 block">The Creation</span>
                    <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed opacity-100 lg:opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                      {project.creation}
                    </p>
                  </div>
                  
                  <button className="mt-4 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white group-hover:text-brand-yellow transition-colors w-fit">
                     Watch Film <ArrowUpRight size={14} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Video Modal - Dynamic Math Logic */}
      {playingVideo && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center animate-in fade-in duration-300 backdrop-blur-xl">
           
           {/* STRICT DYNAMIC SIZING CONTAINER */}
           {/* This calculates dimensions to ensure a 3rem padding on all sides while keeping 16:9 ratio */}
           <div 
             className="relative shadow-2xl bg-black rounded-3xl"
             style={{
               width: 'min(calc(100vw - 6rem), calc((100vh - 6rem) * 1.7778))',
               height: 'min(calc(100vh - 6rem), calc((100vw - 6rem) / 1.7778))',
             }}
           >
              
              {/* Close Button - Attached to top-right of the strict container */}
              <button 
                onClick={() => setPlayingVideo(null)}
                className="absolute -top-12 right-0 flex items-center gap-2 text-white hover:text-brand-yellow transition-colors z-50 group"
              >
                <span className="text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-black transition-all">
                  <X size={18} />
                </div>
              </button>

              {/* AMBILIGHT GLOW LAYER */}
              <div 
                className="absolute inset-0 z-[-10] pointer-events-none select-none rounded-3xl"
                style={{
                    transform: 'scale(1.5)',
                    filter: 'blur(100px)',
                    opacity: 0.8,
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
                }}
              >
                <iframe
                    src={`https://player.vimeo.com/video/${playingVideo}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
                    className="w-full h-full object-cover rounded-3xl"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                ></iframe>
              </div>

              {/* Main Video Player */}
              <div className="w-full h-full rounded-3xl overflow-hidden bg-black relative z-10">
                {/* Scale 1.01 removes sub-pixel white lines */}
                <div className="w-full h-full transform scale-[1.01]">
                    <iframe 
                        src={`https://player.vimeo.com/video/${playingVideo}?autoplay=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&muted=0&playsinline=1`}
                        className="w-full h-full" 
                        key={playingVideo}
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen
                        title="Project Video"
                    ></iframe>
                </div>
              </div>
           </div>
        </div>
      )}

    </section>
  );
};
