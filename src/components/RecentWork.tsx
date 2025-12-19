import { useNavigate } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

const RecentWork = () => {
  const navigate = useNavigate();
  
  const recentProjects = [
    {
      id: '1',
      image: '/properties/ash-house/preston property 4 hero photo.jpeg',
      label: '4 Bedroom Family Home',
      location: 'Preston',
      description: 'Spacious detached property with modern finishes'
    },
    {
      id: '2',
      image: '/properties/hoyles-lane/Preston property 3 hero photo .jpeg',
      label: '5 Bedroom Luxury Property',
      location: 'Preston',
      description: 'Premium family residence with exceptional space'
    },
    {
      id: '3',
      image: '/properties/lightfoot-lane/Preston property 1 photo hero photo.jpeg',
      label: '3 Bedroom Modern Home',
      location: 'Preston',
      description: 'Contemporary living in a prime location'
    },
    {
      id: '4',
      image: '/properties/pendle-view-barn/Preston property 2 hero photo.jpeg',
      label: '5 Bedroom Converted Barn',
      location: 'Preston',
      description: 'Character property with unique charm'
    },
  ];

  return (
    <section id="recent-work" className="py-20 md:py-32 bg-light relative overflow-hidden" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4 leading-tight">
            Recent Work
          </h2>
          <p className="font-body text-lg text-gray">
            Properties photographed in Preston
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {recentProjects.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/property/${item.id}`)}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <OptimizedImage
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Dark Blue Gradient Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 3%, rgba(15, 23, 42, 0.1) 53%)'
                }}
              />

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-body text-sm font-bold text-accent uppercase tracking-wider mb-2">
                    {item.location}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                    {item.label}
                  </h3>
                  <p className="font-body text-sm font-bold text-white mb-4">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-white pb-1">
                    Click to view more 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
