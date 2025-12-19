const ClientLogos = () => {
  const clients = [
    'Century 21',
    'Martin & Co',
    'Belvoir',
    'Northwood',
    'Hunters',
    'EweMove',
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section id="clients" className="py-20 md:py-32 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 md:mb-16">
        {/* Optional Divider */}
        <div className="w-full h-px bg-accent/30 mb-12 md:mb-16"></div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
            <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider border border-accent/30">
              Trusted Since 2020
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Trusted by Leading Agents
          </h2>
          <p className="font-body text-lg text-white/70 italic">
            And counting—new agents booking every week
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative py-4 md:py-8 w-full mask-linear-fade">
        <div className="flex space-x-8 md:space-x-16 animate-marquee w-max hover:pause">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-[60px] md:h-[80px] min-w-[120px] md:min-w-[160px] opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
            >
              <span className="font-display text-xl md:text-3xl font-bold text-white/80 hover:text-white transition-colors whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
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

export default ClientLogos;
