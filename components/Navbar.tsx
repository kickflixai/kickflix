
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-[95%] mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="relative z-50 group">
          <div className="flex items-center gap-3">
             {/* Logo Icon */}
             <img 
                src="https://res.cloudinary.com/dyqus7sfo/image/upload/v1763565296/kickflix_logo_-_no_background_wpw9yz.png" 
                alt="Kickflix Icon" 
                className="h-8 md:h-10 w-auto object-contain"
             />
             {/* Logo Text */}
             <img 
                src="https://res.cloudinary.com/dyqus7sfo/image/upload/v1763565296/kickflix_TEXT_NO_BACKGROUND_yqbsqk.png" 
                alt="KICKFLIX" 
                className="h-6 md:h-8 w-auto object-contain"
             />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {[
            { name: 'Vision', id: 'vision' },
            { name: 'Process', id: 'process' },
            { name: 'Portfolio', id: 'portfolio' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <a 
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-xs font-mono font-medium text-white/60 hover:text-brand-yellow uppercase tracking-widest transition-colors duration-300 relative group"
            >
              <span className="mr-1 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300">//</span>
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="text-brand-yellow" /> : <Menu />}
        </button>
      </div>
    </nav>

    {/* Full Screen Mobile Menu */}
    <div className={`fixed inset-0 bg-brand-black z-[90] flex flex-col justify-center items-center transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      <div className="flex flex-col gap-8 text-center relative z-10">
        {[
          { name: 'Vision', id: 'vision' },
          { name: 'Process', id: 'process' },
          { name: 'Portfolio', id: 'portfolio' },
          { name: 'Contact', id: 'contact' }
        ].map((item) => (
          <a 
            key={item.name} 
            href={`#${item.id}`} 
            onClick={(e) => scrollToSection(e, item.id)}
            className="text-4xl md:text-6xl font-display font-bold text-transparent text-stroke hover:text-brand-yellow hover:border-none transition-all duration-300 uppercase"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
    </>
  );
};
