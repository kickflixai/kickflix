import React from 'react';

interface LaurelProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

export const Laurel: React.FC<LaurelProps> = ({ src, alt, className = "", fallbackText }) => {
  // If you have the actual PNGs, you would pass the path to src. 
  // Since we are in a code environment, we will use a high-quality placeholder or the src if provided.
  
  return (
    <div className={`flex flex-col items-center justify-center mx-8 group ${className}`}>
      <div className="relative h-24 w-24 md:h-32 md:w-32 opacity-60 group-hover:opacity-100 transition-opacity duration-500 filter grayscale group-hover:grayscale-0">
        {src ? (
            <img src={src} alt={alt} className="w-full h-full object-contain" />
        ) : (
            // Fallback visual if image is missing (Golden Wreath Shape)
            <div className="w-full h-full border-2 border-white/10 rounded-full flex items-center justify-center p-2">
                 <span className="text-[8px] text-center uppercase tracking-widest text-brand-gold">{fallbackText || alt}</span>
            </div>
        )}
      </div>
    </div>
  );
};