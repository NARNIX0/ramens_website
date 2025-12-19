import { useEffect, useRef, useState } from 'react';

const ResultCard = ({ icon, title, description, delay }: { icon: string, title: string, description: string, delay: number }) => {
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
      className={`bg-white rounded-3xl border-2 border-accent p-6 md:p-8 shadow-sm hover:shadow-lg hover:border-secondary hover:scale-[1.03] transition-all duration-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl md:text-5xl mb-4">{icon}</div>
      <h3 className="font-display text-xl md:text-2xl font-bold text-dark mb-3">
        {title}
      </h3>
      <p className="font-body text-base text-gray leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const ThreeKeyResults = () => {
  const results = [
    {
      icon: "🚀",
      title: "Sell Faster & For More",
      description: "Properties with professional photos, virtual tours and virtual staging sell 42% Faster",
      delay: 0
    },
    {
      icon: "📸",
      title: "Proven to Work Across 200+ Properties",
      description: "Professional photography increases viewings by 3x. Means more offers. Means higher prices. Means bigger commissions for you.",
      delay: 100
    },
    {
      icon: "⏰",
      title: "I work around YOUR schedule, not the other way around",
      description: "Shoots available 7 days a week. Evening shoots for occupied properties. I'm flexible because your business doesn't wait for me.",
      delay: 200
    }
  ];

  return (
    <section id="results" className="py-20 md:py-32 bg-light relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4 leading-tight">
            Why Agents Choose Ramen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <ResultCard key={index} {...result} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeKeyResults;
