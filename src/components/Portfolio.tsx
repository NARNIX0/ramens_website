import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const navigate = useNavigate();
  
  const portfolioItems = [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      label: 'Modern 4-bed Detached',
      location: 'Kingston',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      label: 'Luxury Apartment',
      location: 'Thames Riverside',
    },
    {
      id: '3',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      label: 'Contemporary 2-bed Flat',
      location: 'Town Centre',
    },
    {
      id: '4',
      image:
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      label: 'Victorian Terrace',
      location: 'Surbiton',
    },
  ];

  return (
    <section id="portfolio" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-accent"></div>
              <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider">
                Portfolio
              </span>
            </div>
            <h2 className="font-display text-6xl md:text-7xl font-bold text-dark leading-tight">
              Recent Work
            </h2>
          </div>
          <button className="font-body font-semibold bg-dark text-white px-8 py-4 rounded-full hover:bg-dark/90 transition-all hover:scale-105 self-start md:self-end">
            View All Projects →
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/property/${item.id}`)}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <p className="font-body text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                    {item.location}
                  </p>
                  <h3 className="font-display text-3xl font-bold text-white mb-2">
                    {item.label}
                  </h3>
                  <p className="font-body text-sm text-white/80">
                    Click to view more →
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
