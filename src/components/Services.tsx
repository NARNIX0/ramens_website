import { useEffect, useRef, useState } from 'react';
import SimpleBeforeAfter from './ui/SimpleBeforeAfter';
import ServiceModal from './ui/ServiceModal';
import OptimizedImage from './OptimizedImage';

interface PricingTier {
  name: string;
  price: string;
  description?: string;
}

interface ServiceCardProps {
  title: string;
  category: string;
  description: string;
  price: string;
  pricing: {
    tiers: PricingTier[];
    note?: string;
  };
  mediaType: 'image' | 'slider' | 'video';
  mediaSrc?: string;
  beforeImage?: string;
  afterImage?: string;
  videoSrc?: string;
  index: number;
  // Crop control options
  objectPosition?: string; // e.g., "center", "top", "bottom", "left", "right", "20% 30%"
  aspectRatio?: string; // e.g., "4/3", "16/9", "square", "video"
  onOpenModal: (service: ServiceCardProps) => void;
}

const ServiceCard = ({ 
  title, 
  category, 
  description, 
  price, 
  pricing,
  mediaType, 
  mediaSrc, 
  beforeImage, 
  afterImage, 
  videoSrc,
  index,
  objectPosition = 'center', // Default crop position
  aspectRatio = '4/3', // Default aspect ratio
  onOpenModal
}: ServiceCardProps) => {
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

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't open modal if clicking directly on slider elements
    const target = e.target as HTMLElement;
    if (target.closest('input[type="range"]') || target.closest('[style*="clip-path"]')) {
      return;
    }
    onOpenModal({
      title,
      category,
      description,
      price,
      pricing,
      mediaType,
      mediaSrc,
      beforeImage,
      afterImage,
      videoSrc,
      index,
      objectPosition,
      aspectRatio,
      onOpenModal
    });
  };

  return (
    <div
      ref={cardRef}
      className={`group relative block bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-accent/20 transition-all duration-300 ease-out overflow-hidden flex flex-col h-full transform hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Media Section */}
      <div 
        className={`relative w-full overflow-hidden bg-gray-100 ${
          aspectRatio === 'square' ? 'aspect-square' : 
          aspectRatio === 'video' ? 'aspect-video' : 
          aspectRatio === '16/9' ? 'aspect-video' :
          aspectRatio === '4/3' ? 'aspect-[4/3]' :
          aspectRatio === '3/2' ? 'aspect-[3/2]' :
          aspectRatio === '5/4' ? 'aspect-[5/4]' :
          'aspect-[4/3]' // default fallback
        }`}
        onClick={handleCardClick}
      >
        {mediaType === 'image' && mediaSrc && (
          <OptimizedImage
            src={mediaSrc}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
            objectPosition={objectPosition}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
        
        {mediaType === 'slider' && beforeImage && afterImage && (
          <div className="relative w-full h-full z-20" onClick={(e) => e.stopPropagation()}>
            <SimpleBeforeAfter
              beforeImage={beforeImage}
              afterImage={afterImage}
              className="w-full h-full"
            />
          </div>
        )}
        
        {mediaType === 'video' && videoSrc && (
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover cursor-pointer"
            style={{ objectPosition: objectPosition }}
          />
        )}
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col flex-grow p-6 cursor-pointer" onClick={handleCardClick}>
        <div className="mb-2">
          <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs font-semibold rounded uppercase tracking-wider">
            {category}
          </span>
        </div>
        <h3 className="font-display text-xl md:text-2xl font-bold text-dark mb-3 leading-tight">
          {title}
        </h3>
        {description.includes('.') ? (
          <>
            <p className="font-display text-base font-bold text-accent mb-2 leading-tight">
              {description.substring(0, description.indexOf('.'))}
            </p>
            <p className="font-body text-sm text-gray leading-relaxed mb-4 flex-grow">
              {description.substring(description.indexOf('.') + 1).trim()}
            </p>
          </>
        ) : (
          <p className="font-body text-sm text-gray leading-relaxed mb-4 flex-grow">
            {description}
          </p>
        )}
        <div className="mt-auto">
          <p className="font-display text-lg font-bold text-accent">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceCardProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (service: ServiceCardProps) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const services: ServiceCardProps[] = [
    // 1. HDR Photography - IMAGE
    {
      title: 'HDR Photography',
      category: 'Core Photography',
      description: 'Sell 32% Faster, 47% Higher Price Per Sqft. 61% more views, £3-11k higher price.',
      price: 'from £180',
      pricing: {
        tiers: [
          { name: 'Tier 1 (1-2 bed)', price: '£180', description: 'Perfect for smaller properties' },
          { name: 'Tier 2 (3-4 bed)', price: '£300', description: 'Ideal for family homes' },
          { name: 'Tier 3 (5+ bed)', price: '£500', description: 'Luxury properties and large homes' }
        ]
      },
      mediaType: 'image',
      mediaSrc: '/services/hdr photography example.jpeg',
      index: 0,
      objectPosition: '20% 30%',
      onOpenModal: handleOpenModal
    },
    
    // 2. Floor Plans - IMAGE
    {
      title: 'Floor Plans',
      category: 'Floor Plans',
      description: '88% of Buyers Won\'t View Without Them. 40% faster sales, -35% wasted viewings.',
      price: 'from £50 per floor',
      pricing: {
        tiers: [
          { name: 'Universal', price: '£50', description: 'All property sizes' }
        ],
        note: 'Multiply by number of floors if multi-level'
      },
      mediaType: 'image',
      mediaSrc: '/services/floor plan example.png',
      index: 1,
      onOpenModal: handleOpenModal
    },
    
    // 3. 360° Virtual Tours - VIDEO (using GIF as image since it's animated)
    {
      title: '360° Virtual Tours',
      category: 'Virtual Tours',
      description: '87% More Views, 74% Higher Conversion. Sell 49% faster, 2.7x more showings.',
      price: 'from £180',
      pricing: {
        tiers: [
          { name: 'Tier 1 (1-2 bed)', price: '£180', description: 'Compact properties' },
          { name: 'Tier 2 (3-4 bed)', price: '£275', description: 'Standard family homes' },
          { name: 'Tier 3 (5+ bed)', price: '£400', description: 'Large properties' }
        ]
      },
      mediaType: 'image',
      mediaSrc: '/services/360 tour gif.gif',
      index: 2,
      onOpenModal: handleOpenModal
    },
    
    // 4. Video Tours - VIDEO (using GIF as image since it's animated)
    {
      title: 'Video Tours',
      category: 'Video Tours',
      description: '403% More Inquiries, Sell 31% Faster. Buyers spend 10x longer, 118% more engagement.',
      price: 'from £250',
      pricing: {
        tiers: [
          { name: 'Tier 1 (1-2 bed)', price: '£250', description: 'Smaller properties' },
          { name: 'Tier 2 (3-4 bed)', price: '£350', description: 'Family homes' },
          { name: 'Tier 3 (5+ bed)', price: '£650', description: 'Luxury and large properties' }
        ]
      },
      mediaType: 'image',
      mediaSrc: '/services/video tour gif.gif',
      index: 3,
      objectPosition: '0% 60%',
      onOpenModal: handleOpenModal
    },
    
    // 5. Virtual Staging - SLIDER (keep as is)
    {
      title: 'Virtual Staging',
      category: 'Virtual Staging',
      description: '58% Faster Sales, 4-8% Higher Offers. £16k-£32k more on £400k homes, 90% more views.',
      price: 'from £15 per photo',
      pricing: {
        tiers: [
          { name: 'Universal', price: '£15 per photo', description: 'All property sizes' }
        ]
      },
      mediaType: 'slider',
      beforeImage: '/before-after/before and after image 2A.png',
      afterImage: '/before-after/before and after image 2B.jpeg',
      index: 4,
      onOpenModal: handleOpenModal
    },
    
    // 6. Premium Touch-ups - SLIDER (keep as is)
    {
      title: 'Premium Touch-ups',
      category: 'Premium Editing',
      description: 'Professional Luxury-Grade Editing. 15-25% higher perceived value.',
      price: 'from £10 per photo',
      pricing: {
        tiers: [
          { name: 'Tier 1', price: '£10 per photo', description: 'Single technique, 5-8 images' },
          { name: 'Tier 2', price: '£15 per photo', description: 'Combo technique, 10-15 images' },
          { name: 'Tier 3', price: '£20 per photo', description: 'Full suite, 20-25 images' }
        ]
      },
      mediaType: 'slider',
      beforeImage: '/before-after/before and after image 4A.jpeg',
      afterImage: '/before-after/before and after image 4B.jpeg',
      index: 5,
      onOpenModal: handleOpenModal
    },
    
    // 7. Drone & Aerial - IMAGE
    {
      title: 'Drone & Aerial',
      category: 'Drone & Aerial',
      description: '68% Faster Sales, 10% Price Premium. 83% of sellers expect it, shows full context.',
      price: 'from £180',
      pricing: {
        tiers: [
          { name: 'Drone Photography', price: '£180', description: 'Aerial still images' },
          { name: 'Drone Videography', price: '£200', description: 'Aerial video footage' }
        ]
      },
      mediaType: 'image',
      mediaSrc: '/services/drone photo .png',
      index: 6,
      onOpenModal: handleOpenModal
    },
    
    // 8. Twilight Photography - SLIDER (keep as is)
    {
      title: 'Twilight Photography',
      category: 'Premium Visuals',
      description: '66% More Views, Premium Luxury Feel. Highlights features, creates emotional connection.',
      price: 'from £150',
      pricing: {
        tiers: [
          { name: 'Universal', price: '£150', description: 'All property sizes' }
        ]
      },
      mediaType: 'slider',
      beforeImage: '/before-after/before and after image 1A.png',
      afterImage: '/before-after/before and after image 1B.png',
      index: 7,
      onOpenModal: handleOpenModal
    },
    
    // 9. Marketing Add-ons - VIDEO (using GIF as image since it's animated)
    {
      title: 'Marketing Add-ons',
      category: 'Marketing Add-ons',
      description: '403% More Inquiries via Social Media. 2.7x more engagement, 67% of millennials on Instagram.',
      price: 'from £150',
      pricing: {
        tiers: [
          { name: 'Tier 1 (1-2 bed, single element)', price: '£150', description: 'Single marketing element' },
          { name: 'Tier 2 (3-4 bed, combo)', price: '£300', description: 'Multiple marketing elements' },
          { name: 'Tier 3 (5+ bed, full suite)', price: '£450', description: 'Complete marketing package' }
        ]
      },
      mediaType: 'image',
      mediaSrc: '/services/marketing property landing page example.gif',
      index: 8,
      objectPosition: '0% 3%',
      onOpenModal: handleOpenModal
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark leading-tight">
            What I Offer
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.index} {...service} />
          ))}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedService.title}
          category={selectedService.category}
          description={selectedService.description}
          pricing={selectedService.pricing}
          mediaType={selectedService.mediaType}
          mediaSrc={selectedService.mediaSrc}
          beforeImage={selectedService.beforeImage}
          afterImage={selectedService.afterImage}
          videoSrc={selectedService.videoSrc}
        />
      )}
    </section>
  );
};

export default Services;
