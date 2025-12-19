import { useState } from 'react';
import OptimizedImage from './OptimizedImage';

const SocialProof = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Logos for the marquee (using text placeholders styled as logos since we don't have SVGs yet)
  // In a real app, these would be <img> tags
  const agents = [
    { name: 'Century 21', color: '#1B75BB' },
    { name: 'Martin & Co', color: '#E31E24' },
    { name: 'Belvoir', color: '#00A651' },
    { name: 'Northwood', color: '#003366' },
    { name: 'Hunters', color: '#FF6600' },
    { name: 'EweMove', color: '#6B2C91' },
  ];

  // Duplicate for infinite scroll
  const marqueeAgents = [...agents, ...agents, ...agents];

  return (
    <section className="bg-light py-12 px-4 border-b border-gray/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        {/* Top Row: Headline */}
        <h2 className="font-display text-lg md:text-xl font-semibold text-dark text-center">
          Trusted by 20+ British Estate Agents
        </h2>

        {/* Middle Row: Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 text-center w-full max-w-4xl">
          <div className="flex flex-col items-center gap-1">
            <span className="font-display text-3xl md:text-4xl font-bold text-accent">2000+</span>
            <span className="font-body text-xs md:text-sm text-gray uppercase tracking-wider font-medium">
              Photograhs Taken
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-display text-3xl md:text-4xl font-bold text-accent">24-hour</span>
            <span className="font-body text-xs md:text-sm text-gray uppercase tracking-wider font-medium">
              Turnaround Guaranteed
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center justify-center gap-2">
              <OptimizedImage 
                src="/eye-icon.png" 
                alt="Views icon" 
                className="object-contain"
                priority={true}
                sizes="1.15em"
                style={{ height: '1.15em', width: 'auto', display: 'inline-block', verticalAlign: 'baseline' }}
              />
              <span className="font-display text-3xl md:text-4xl font-bold text-accent">70,000,000</span>
            </div>
            <span className="font-body text-xs md:text-sm text-gray uppercase tracking-wider font-medium">
              Views Generated For Clients
            </span>
          </div>
        </div>

        {/* Bottom Row: Logos Carousel */}
        <div 
          className="w-full relative mask-linear-fade"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`flex items-center gap-12 md:gap-16 w-max animate-marquee ${isHovered ? 'md:pause' : ''}`}>
            {marqueeAgents.map((agent, index) => (
              <div 
                key={`${agent.name}-${index}`}
                className="flex items-center justify-center min-w-[100px] md:min-w-[120px] grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default"
              >
                {/* Placeholder for logo - using stylized text */}
                <span 
                  className="font-display font-bold text-xl md:text-2xl"
                  style={{ color: isHovered ? agent.color : 'currentColor' }}
                >
                  {agent.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <p className="font-body text-sm text-gray bold text-center mt-2">
          Creating content other agents actually want to share
        </p>
      </div>

      <style>{`
        .mask-linear-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SocialProof;
