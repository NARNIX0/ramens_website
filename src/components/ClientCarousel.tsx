const ClientCarousel = () => {
  const clients = [
    'Savills',
    'Knight Frank',
    'Foxtons',
    'Hamptons',
    'KFH',
    'Winkworth',
    'Marsh & Parsons',
    'John D Wood',
    'Chancellors',
    'Barnard Marcus',
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-24 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider">
              Clients
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-dark leading-tight">
            Trusted by Leading Agents
          </h2>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative py-8">
        <div className="flex space-x-12 animate-marquee">
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center min-w-[220px] px-8 py-6 bg-white rounded-2xl border border-gray/10"
            >
              <span className="font-display text-2xl font-bold text-dark/40 md:hover:text-accent transition-colors whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Social Proof */}
      <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
        <p className="font-body text-gray">
          <span className="font-bold text-dark">50+ estate agents</span> trust us with their property photography
        </p>
      </div>
    </section>
  );
};

export default ClientCarousel;
