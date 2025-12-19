const Turnaround = () => {
  const benefits = [
    {
      icon: '⚡',
      title: '24-48 Hour Delivery',
      description:
        'Fast turnaround times to get your listings live quickly without compromising on quality.',
    },
    {
      icon: '✨',
      title: 'Professional Editing',
      description:
        'Every image is expertly edited to showcase properties in their best light with HDR and color correction.',
    },
    {
      icon: '✓',
      title: 'Reliable & Consistent',
      description:
        'Dependable service with consistent quality you can trust for every property listing.',
    },
    {
      icon: '📅',
      title: 'Booking Flexibility',
      description:
        'Flexible scheduling to accommodate urgent shoots and last-minute property viewings.',
    },
  ];

  return (
    <section id="turnaround" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
            <div className="w-8 md:w-12 h-0.5 bg-accent"></div>
            <span className="font-body text-xs md:text-sm font-semibold text-accent uppercase tracking-wider">
              Process
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-dark mb-4 md:mb-6 leading-tight">
            Fast, Reliable & Professional
          </h2>
          <p className="font-body text-base md:text-xl text-gray">
            Perfect for busy estate agents needing fast, high-quality listings
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-light md:hover:bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl transition-all duration-300 md:hover:shadow-xl border border-gray/10 md:hover:border-accent/20 md:hover:-translate-y-1"
            >
              <div className="text-4xl md:text-5xl mb-4 md:mb-6">{benefit.icon}</div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-dark mb-2 md:mb-4">
                {benefit.title}
              </h3>
              <p className="font-body text-sm md:text-base text-gray leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Turnaround;
