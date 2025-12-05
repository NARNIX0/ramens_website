const Services = () => {
  const services = [
    {
      title: 'Interior & Exterior',
      description:
        'Professional shots of every room and outdoor space, capturing the full essence of the property.',
    },
    {
      title: 'Twilight Photography',
      description:
        'Stunning dusk shots that showcase properties with warm interior lighting against beautiful evening skies.',
    },
    {
      title: 'Aerial Drone',
      description:
        'Breathtaking aerial perspectives that highlight property features and surrounding areas.',
    },
    {
      title: 'Floor Plans',
      description:
        'Accurate, professionally drawn floor plans that help buyers understand the layout.',
    },
    {
      title: 'Virtual Tours',
      description:
        '360° interactive virtual tours that allow buyers to explore properties remotely.',
    },
    {
      title: 'Video Walkthroughs',
      description:
        'Cinematic property videos with smooth transitions and professional editing.',
    },
  ];

  return (
    <section id="services" className="py-32 bg-light relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider">
              Services
            </span>
          </div>
          <h2 className="font-display text-6xl md:text-7xl font-bold text-dark leading-tight">
            What I Offer
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl md:hover:shadow-xl transition-all duration-300 border border-gray/10 md:hover:border-secondary/30 md:hover:-translate-y-1"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
              
              <h3 className="font-display text-2xl font-bold text-dark mb-4 md:group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-gray leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
