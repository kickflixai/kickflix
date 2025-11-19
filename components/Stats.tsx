
import React, { useEffect, useState, useRef } from 'react';
import { Reveal } from './ui/Reveal';

const stats = [
  { label: "Production Volume", value: 100, suffix: "+", sub: "Films & Ads Released", type: "number" },
  { label: "Reach", value: 82, suffix: "M+", sub: "Organic Impressions", type: "number" },
  { label: "Excellence", value: 21, sub: "International Awards", type: "number" },
];

const Counter = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;
      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-brand-black border-b border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center py-8 md:py-0 group px-4 text-center">
              <Reveal delay={index * 100}>
                 <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-4 group-hover:text-brand-yellow transition-colors duration-300">
                  {stat.label}
                </div>
                <div className="font-display font-bold text-4xl md:text-5xl text-white mb-2 tracking-tighter">
                  {stat.type === 'number' ? (
                    <>
                      <Counter end={stat.value as number} />
                      {stat.suffix}
                    </>
                  ) : (
                    stat.value
                  )}
                </div>
              </Reveal>
              <Reveal delay={index * 100 + 50}>
                <div className="text-xs font-sans text-white/40 group-hover:text-white/60 transition-colors">
                  {stat.sub}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
