import { useEffect, useRef, useState } from 'react';

const StepCard = ({ number, title, description, icon, delay }: { number: string, title: string, description: string, icon: string, delay: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative z-10 flex flex-col h-full transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative mb-6 self-start">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent border-2 border-accent flex items-center justify-center text-white font-display text-2xl md:text-3xl font-bold shadow-lg z-10 relative animate-pulse-slow">
          {number}
        </div>
      </div>
      
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-accent/20 shadow-sm flex-grow hover:shadow-md transition-shadow duration-300">
        <div className="text-3xl md:text-4xl mb-4">{icon}</div>
        <h3 className="font-display text-xl md:text-2xl font-bold text-dark mb-3 leading-tight">
          {title}
        </h3>
        <p className="font-body text-base text-gray leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Chat about your property",
      description: "10 minutes. Tell me about your property, timeline, and what you want to highlight. Text me on WhatsApp—no call needed.",
      icon: "💬"
    },
    {
      number: "2",
      title: "I shoot (you go about your day)",
      description: "2-3 hours. I handle everything. Professional lighting, composition, multiple angles. You don't need to be there after the initial walkthrough.",
      icon: "📸"
    },
    {
      number: "3",
      title: "You get photos + 360 tour",
      description: "Within 24 hours. Fully edited, optimized for Rightmove and social. Ready to use immediately.",
      icon: "✨"
    },
    {
      number: "4",
      title: "You use them immediately",
      description: "Post to Rightmove, Instagram, Facebook. Drive viewings. Sell the property. Get bigger commission. We celebrate.",
      icon: "🎯"
    }
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mb-16 md:mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4 leading-tight">
            How It Works
          </h2>
          <p className="font-body text-lg text-gray">
            Get professional photos in 4 simple steps
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 process-grid">
          {steps.map((step, index) => (
            <StepCard 
              key={index} 
              {...step} 
              delay={index * 100}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Process;
