
import React, { useEffect } from 'react';
import { Reveal } from './ui/Reveal';
import { Mail, MapPin, Linkedin, Briefcase, GraduationCap, Award, ExternalLink, Download, Trophy, Eye, Film, Phone, Twitter, Youtube } from 'lucide-react';

export const Resume: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experiences = [
    {
      company: "KICKFLIX",
      role: "Founder",
      period: "Jun 2024 - Present",
      location: "Remote",
      logo: "https://res.cloudinary.com/dyqus7sfo/image/upload/v1763565296/kickflix_logo_-_no_background_wpw9yz.png",
      description: "Founded a creative Ad studio bridging narrative art and commercial strategy via Generative AI.",
      highlights: [
        "Wrote & produced ads for multi-million dollar brands.",
        "Produced Viral Social Media content amassing over 100M+ views.",
        "Developed proprietary software for automated prompting.",
        "Accumulated over 22 AI Film Festival awards.",
        "Moving from 'Chaos Generation' to 'Controlled Orchestration' in AI video workflows."
      ],
      type: "primary"
    },
    {
      company: "SPACE ID",
      role: "Head of Growth & Strategic Advisor",
      period: "Jun 2022 - Jun 2024 (2 yrs)",
      location: "Remote",
      logo: null,
      description: "Led the company from pre-investment to a 1.5 billion FDV industry leader, transitioning to strategic advisory post-scale.",
      highlights: [
        "Coordinated VC investments including Binance Labs and led the Binance Launchpad listing.",
        "Executed deals with over 100 web3 companies.",
        "Led Go-to-Market strategy, community engagement, and airdrop distribution.",
        "Achieved over 1M unique users holding a SPACE ID digital identity product."
      ],
      type: "primary"
    },
    {
      company: "Galxe",
      role: "Head of Ecosystem",
      period: "Oct 2022 - Jun 2024 (1 yr 9 mos)",
      location: "Remote",
      logo: null,
      description: "Led business development at the largest web3 community growth platform.",
      highlights: [
        "Grew DAU 10x to 1M daily active users and 18M total unique users.",
        "Surpassed OpenSea / EtherScan / Uniswap in user activity.",
        "Executed GTM strategy coordinating over 5000 web3 brand clients (Arbitrum, Coinbase, Optimism, Solana).",
        "Advised VIP clients on creative growth campaigns and reward-based systems."
      ],
      type: "primary"
    },
    {
      company: "VKS - Visual Knowledge Share",
      role: "Partner Manager & Sales Engineer",
      period: "May 2018 - May 2022 (4 yrs)",
      location: "Montreal, Canada",
      description: "Driving Industry 4.0 adoption through visual work instruction software.",
      highlights: [
        "Identified, recruited, and trained key partners.",
        "Built annual business plans and GTM strategies for partners.",
        "Helped manufacturers achieve higher productivity via digital transformation."
      ],
      type: "secondary"
    },
    {
      company: "Fortive",
      role: "Process Engineer",
      period: "Jan 2016 - May 2018",
      location: "Montreal, Canada / Rochester, NY",
      description: "Industrial technology conglomerate focusing on professional instrumentation.",
      highlights: [
         "R&D & Product Development: Created prototypes and new products, managing lifecycles in Oracle.",
         "Continuous Improvement: Led Kaizen events, optimized production lines, and reduced waste.",
         "Technical: Programmed Access databases/interfaces and drafted standard operating procedures.",
         "Operations: Resolved critical production issues and managed supplier relations.",
         "Managed the international transfer of manufacturing operations to US headquarters."
      ],
      type: "secondary"
    }
  ];

  return (
    <div className="bg-brand-black min-h-screen pt-24 md:pt-32 pb-24 relative overflow-hidden text-white resume-container">
      <style>{`
        @media print {
          @page {
            margin: 0;
            size: auto;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background-color: #050505 !important;
            color: white !important;
          }
          nav, footer, .no-print {
            display: none !important;
          }
          .resume-container {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
            height: auto !important;
            min-height: 0 !important;
          }
          .glass-panel, .glass-panel-active {
             background: rgba(255, 255, 255, 0.05) !important;
             border: 1px solid rgba(255, 255, 255, 0.1) !important;
          }
          /* Fix text colors for print */
          .text-white { color: #ffffff !important; }
          .text-brand-yellow { color: #FFC000 !important; }
          .text-gray-300 { color: #d1d5db !important; }
          .text-gray-400 { color: #9ca3af !important; }
          .text-gray-500 { color: #6b7280 !important; }
        }
      `}</style>

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-brand-yellow/5 blur-[120px] rounded-full pointer-events-none no-print"></div>
      <div className="absolute bottom-0 left-0 w-[50vh] h-[50vh] bg-brand-yellow/5 blur-[120px] rounded-full pointer-events-none no-print"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* LEFT COLUMN: Profile & Info */}
        <div className="lg:col-span-4 space-y-12">
          
          {/* Profile Header */}
          <Reveal>
            <div className="relative mb-8 group">
               <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-brand-yellow/50 transition-colors duration-500">
                  <img 
                    src="https://res.cloudinary.com/dyqus7sfo/image/upload/v1763560943/1705508578530_kygpf1.jpg" 
                    alt="Solo Samson" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
               </div>
               {/* Availability Badge */}
               <div className="absolute bottom-4 right-1/2 translate-x-12 md:translate-x-16 bg-brand-black border border-brand-yellow px-3 py-1 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(255,192,0,0.2)]">
                  <div className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-yellow">Open for Biz</span>
               </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold text-white uppercase leading-none tracking-tighter mb-4">
              Solo <br/>
              <span className="text-brand-yellow">Samson</span>
            </h1>
            <p className="text-lg text-white/60 font-light mb-8">
              Founder @ KICKFLIX | AI Cinema for Bold Brands
            </p>

            {/* Career Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
               <div className="bg-white/5 p-3 rounded-sm border border-white/5">
                  <div className="flex items-center gap-2 text-brand-yellow mb-1">
                     <Eye size={14} />
                     <span className="text-xs font-mono uppercase">Views</span>
                  </div>
                  <div className="text-xl font-bold font-display">100M+</div>
               </div>
               <div className="bg-white/5 p-3 rounded-sm border border-white/5">
                  <div className="flex items-center gap-2 text-brand-yellow mb-1">
                     <Trophy size={14} />
                     <span className="text-xs font-mono uppercase">Awards</span>
                  </div>
                  <div className="text-xl font-bold font-display">22</div>
               </div>
               <div className="bg-white/5 p-3 rounded-sm border border-white/5 col-span-2">
                  <div className="flex items-center gap-2 text-brand-yellow mb-1">
                     <Film size={14} />
                     <span className="text-xs font-mono uppercase">Production</span>
                  </div>
                  <div className="text-xl font-bold font-display">100+ Films Created</div>
               </div>
            </div>
            
            <div className="flex flex-col gap-4 text-sm font-mono text-gray-400">
               <div className="flex items-center gap-3 hover:text-white transition-colors">
                  <MapPin size={16} className="text-brand-yellow shrink-0" />
                  <span>Lisbon, Portugal</span>
               </div>
               <div className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={16} className="text-brand-yellow shrink-0" />
                  <span>Phone upon request</span>
               </div>
               <a href="mailto:solo@kickflix.ai" className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                  <Mail size={16} className="text-brand-yellow shrink-0" />
                  <span>solo@kickflix.ai</span>
               </a>
               <div className="h-[1px] bg-white/10 w-full my-1"></div>
               <a href="https://www.linkedin.com/in/mathieu-samson/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                  <Linkedin size={16} className="text-brand-yellow shrink-0" />
                  <span>/mathieu-samson</span>
               </a>
               <a href="https://x.com/Solopopsss" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                  <Twitter size={16} className="text-brand-yellow shrink-0" />
                  <span>@Solopopsss</span>
               </a>
               <a href="https://www.youtube.com/@solofilmsAI" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                  <Youtube size={16} className="text-brand-yellow shrink-0" />
                  <span>@solofilmsAI</span>
               </a>
            </div>
            
            <button 
                onClick={() => window.print()} 
                className="mt-8 flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-brand-yellow hover:bg-brand-yellow/10 rounded-sm text-xs font-mono uppercase tracking-widest transition-all group w-full justify-center no-print"
            >
                <Download size={14} className="group-hover:translate-y-1 transition-transform" />
                <span>Save Resume</span>
            </button>
          </Reveal>

          {/* About Summary */}
          <Reveal delay={200}>
            <div className="glass-panel p-6 rounded-sm border-l-2 border-brand-yellow">
               <h3 className="font-mono text-xs text-brand-yellow uppercase tracking-widest mb-4">About</h3>
               <p className="text-sm text-gray-300 leading-relaxed font-light">
                 Raised in the creative hub of Montreal, I merge artistic intuition with generative AI capability. With over a decade of expertise in high-stakes sales and marketing, I have advised hundreds of brands, engineering growth strategies that have engaged millions of users worldwide.
               </p>
               <p className="text-sm text-gray-300 leading-relaxed font-light mt-4">
                 I now harness my background to bridge the gap between AI narrative art and commercial strategy. I was one of the first AI filmmakers in the world and remain a top industry leader—building worlds that drive brand messaging.
               </p>
            </div>
          </Reveal>

          {/* Education */}
          <Reveal delay={300}>
            <div className="space-y-6">
               <h3 className="font-mono text-xs text-brand-yellow uppercase tracking-widest border-b border-white/10 pb-2">Education</h3>
               
               <div className="group">
                  <div className="flex justify-between items-start mb-1">
                     <span className="text-white font-display font-bold text-lg">Université Laval</span>
                     <span className="text-xs text-gray-500 font-mono">2012-2015</span>
                  </div>
                  <div className="text-sm text-brand-yellow/80 mb-2">Bachelor's Degree, Process Engineering</div>
                  <p className="text-xs text-gray-500 leading-snug">
                    Concentration in Software Engineering (1 year).<br/>
                    VP of Communications for the Process Engineering Association.
                  </p>
               </div>
            </div>
          </Reveal>

          {/* Skills */}
          <Reveal delay={400}>
            <div className="space-y-6">
               <h3 className="font-mono text-xs text-brand-yellow uppercase tracking-widest border-b border-white/10 pb-2">Expertise</h3>
               <div className="flex flex-wrap gap-2">
                 {["Generative AI", "Creative Direction", "Growth Strategy", "Web3 Ecosystems", "Partnerships", "Brand Narrative", "Video Production", "Sales Engineering"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:border-brand-yellow hover:text-brand-yellow transition-colors cursor-default">
                      {skill}
                    </span>
                 ))}
               </div>
            </div>
          </Reveal>
        
        </div>

        {/* RIGHT COLUMN: Experience */}
        <div className="lg:col-span-8">
           <Reveal delay={100}>
              <h2 className="text-4xl font-display font-bold text-white mb-12 flex items-center gap-4">
                Experience <span className="h-[1px] flex-grow bg-white/10"></span>
              </h2>
           </Reveal>

           <div className="space-y-12 border-l border-white/10 pl-8 ml-4 md:ml-0 relative">
              {experiences.map((job, index) => (
                <div key={index} className="relative group">
                   {/* Timeline Dot */}
                   <div className={`absolute -left-[39px] top-2 w-5 h-5 rounded-full border-2 ${job.type === 'primary' ? 'bg-brand-yellow border-brand-yellow shadow-[0_0_10px_#FFC000]' : 'bg-brand-black border-white/20 group-hover:border-white/50'} transition-colors z-10`}></div>

                   <Reveal delay={index * 100}>
                      <div className={`rounded-sm transition-all duration-300 border ${job.type === 'primary' ? 'glass-panel-active border-brand-yellow/30 p-8' : 'glass-panel border-white/5 hover:border-white/20 p-6 opacity-80 hover:opacity-100'}`}>
                         
                         <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                            <div>
                               <h3 className={`${job.type === 'primary' ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-display font-bold text-white uppercase mb-1`}>
                                  {job.role}
                               </h3>
                               <div className="flex items-center gap-2 text-brand-yellow font-mono text-sm uppercase tracking-wide">
                                  {job.company} 
                                  {job.logo && <ExternalLink size={12} className="opacity-50" />}
                               </div>
                            </div>
                            <div className="text-right">
                               <div className="text-sm font-mono text-gray-400">{job.period}</div>
                               <div className="text-xs text-gray-600 uppercase tracking-widest mt-1">{job.location}</div>
                            </div>
                         </div>

                         <p className={`${job.type === 'primary' ? 'text-base' : 'text-sm'} text-gray-300 font-light mb-6 italic border-l-2 border-white/10 pl-4`}>
                           "{job.description}"
                         </p>

                         {job.highlights.length > 0 && (
                           <ul className="space-y-2">
                              {job.highlights.map((point, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-400 leading-relaxed group/item">
                                   <span className={`mt-2 w-1.5 h-1.5 rounded-full ${job.type === 'primary' ? 'bg-brand-yellow/50 group-hover/item:bg-brand-yellow' : 'bg-white/20 group-hover/item:bg-white/60'} transition-colors shrink-0`}></span>
                                   <span>{point}</span>
                                </li>
                              ))}
                           </ul>
                         )}

                      </div>
                   </Reveal>
                </div>
              ))}
           </div>
           
           <Reveal delay={600}>
             <div className="mt-16 pt-16 border-t border-white/10 text-center no-print">
                <p className="text-gray-500 italic mb-8">
                  "Mathieu is the consummate professional. He knows and understands the products he is involved with and patiently and confidently articulates as he shares his knowledge with others."
                </p>
                <div className="flex items-center justify-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-brand-yellow">J</div>
                   <div className="text-left">
                      <div className="text-white text-sm font-bold">John Abnet</div>
                      <div className="text-xs text-gray-500">Professional Recommendation</div>
                   </div>
                </div>
             </div>
           </Reveal>

        </div>

      </div>
    </div>
  );
};
