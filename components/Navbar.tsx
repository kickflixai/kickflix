
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      // If we are on the Resume page, go home first then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If we are on Home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const goToResume = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate('/resume');
  };

  return (
    <>
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${isScrolled || location.pathname === '/resume' ? 'bg-brand-black/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-[95%] mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="relative z-50 group">
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
              onClick={(e) => handleNavigation(e, item.id)}
              className="text-xs font-mono font-medium text-white/60 hover:text-brand-yellow uppercase tracking-widest transition-colors duration-300 relative group"
            >
              <span className="mr-1 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300">//</span>
              {item.name}
            </a>
          ))}
          
          {/* Resume Link */}
          <a 
              href="/resume"
              onClick={goToResume}
              className={`text-xs font-mono font-medium uppercase tracking-widest transition-colors duration-300 relative group px-4 py-2 border border-white/20 hover:border-brand-yellow hover:text-brand-yellow rounded-sm ${location.pathname === '/resume' ? 'text-brand-yellow border-brand-yellow' : 'text-white'}`}
          >
              Resume / CV
          </a>
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
            onClick={(e) => handleNavigation(e, item.id)}
            className="text-4xl md:text-6xl font-display font-bold text-transparent text-stroke hover:text-brand-yellow hover:border-none transition-all duration-300 uppercase"
          >
            {item.name}
          </a>
        ))}
        <a 
            href="/resume" 
            onClick={goToResume}
            className="text-2xl font-mono text-brand-yellow uppercase tracking-widest mt-8 border-b border-brand-yellow pb-2"
        >
            View Resume
        </a>
      </div>
    </div>
    </>
  );
};
