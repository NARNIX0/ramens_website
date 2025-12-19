import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import OptimizedImage from '../components/OptimizedImage';

// Extended property data with additional photos
const propertyData: Record<string, {
  label: string;
  location: string;
  date: string;
  description: string;
  images: string[];
}> = {
  '1': {
    label: '4 Bedroom Family Home',
    location: 'Preston',
    date: '2024',
    description: 'A spacious detached property featuring modern finishes throughout. This family home offers generous living spaces and contemporary design elements.',
    images: [
      '/properties/ash-house/preston property 4 hero photo.webp',
      '/properties/ash-house/preston property 4 photo number  (1).webp',
      '/properties/ash-house/preston property 4 photo number  (3).webp',
      '/properties/ash-house/preston property 4 photo number  (4).webp',
      '/properties/ash-house/preston property 4 photo number  (5).webp',
      '/properties/ash-house/preston property 4 photo number  (6).webp',
      '/properties/ash-house/preston property 4 photo number  (7).webp',
      '/properties/ash-house/preston property 4 photo number  (8).webp',
      '/properties/ash-house/preston property 4 photo number  (9).webp',
      '/properties/ash-house/preston property 4 photo number  (10).webp',
      '/properties/ash-house/preston property 4 photo number  (11).webp',
      '/properties/ash-house/preston property 4 photo number  (12).webp',
      '/properties/ash-house/preston property 4 photo number  (13).webp',
      '/properties/ash-house/preston property 4 photo number  (14).webp',
      '/properties/ash-house/preston property 4 photo number  (15).webp',
      '/properties/ash-house/preston property 4 photo number  (16).webp',
      '/properties/ash-house/preston property 4 photo number  (17).webp',
      '/properties/ash-house/preston property 4 photo number  (18).webp',
      '/properties/ash-house/preston property 4 photo number  (19).webp',
      '/properties/ash-house/preston property 4 photo number  (20).webp',
      '/properties/ash-house/preston property 4 photo number  (21).webp',
      '/properties/ash-house/preston property 4 photo number  (22).webp',
    ],
  },
  '2': {
    label: '5 Bedroom Luxury Property',
    location: 'Preston',
    date: '2024',
    description: 'A premium family residence offering exceptional space and luxury finishes. This property combines elegance with practical family living.',
    images: [
      '/properties/hoyles-lane/Preston property 3 hero photo .webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (1).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (2).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (4).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (5).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (6).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (7).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (8).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (9).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (10).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (11).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (12).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (13).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (14).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (15).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (16).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (17).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (18).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (19).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (20).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (21).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (22).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (23).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (24).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (25).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (26).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (27).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (28).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (29).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (30).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (31).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (32).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (33).webp',
      '/properties/hoyles-lane/Preston property 3 photo number  (34).webp',
    ],
  },
  '3': {
    label: '3 Bedroom Modern Home',
    location: 'Preston',
    date: '2024',
    description: 'A contemporary property in a prime location, featuring modern design and comfortable living spaces throughout.',
    images: [
      '/properties/lightfoot-lane/Preston property 1 photo hero photo.webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (1).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (2).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (3).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (4).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (5).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (6).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (7).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (8).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (9).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (10).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (11).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (12).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (13).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (14).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (15).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (16).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (17).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (18).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (19).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (20).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (21).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (22).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (23).webp',
      '/properties/lightfoot-lane/Preston property 1 photo number (24).webp',
    ],
  },
  '4': {
    label: '5 Bedroom Converted Barn',
    location: 'Preston',
    date: '2024',
    description: 'A character property with unique charm, featuring original features combined with modern comforts in a spacious layout.',
    images: [
      '/properties/pendle-view-barn/Preston property 2 hero photo.webp',
      '/properties/pendle-view-barn/Preston property 2 photo number (2).webp',
      '/properties/pendle-view-barn/Preston property 2 photo number (3).webp',
      '/properties/pendle-view-barn/Preston property 2 photo number (4).webp',
      '/properties/pendle-view-barn/Preston property 2 photo number (5).webp',
      '/properties/pendle-view-barn/Preston property 2 photo number (6).webp',
      '/properties/pendle-view-barn/Preston property 2 photo number (7).webp',
      '/properties/pendle-view-barn/Preston property 2 photo number (8).webp',
      '/properties/pendle-view-barn/Preston property 2 photo number (9).webp',
      '/properties/pendle-view-barn/Preston property 2 photo number (10).webp',
      '/properties/pendle-view-barn/Preston property 2 photo number (11).webp',
      '/properties/pendle-view-barn/Preston property 2 photo number (12).webp',
      '/properties/pendle-view-barn/Preston property 2 photo number (13).webp',
      '/properties/pendle-view-barn/Preston property 2 photo number (14).webp',
      '/properties/pendle-view-barn/Preston property 2 photo number (15).webp',
    ],
  },
};

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const property = id ? propertyData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-dark mb-4">Property Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="font-body font-semibold bg-accent text-white px-8 py-4 rounded-full hover:bg-accent/90 transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light">
      {/* Header with Back Button */}
      <div className="bg-white border-b border-gray/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <button
            onClick={() => {
              navigate('/');
              // Use setTimeout to ensure navigation completes before scrolling
              setTimeout(() => {
                const element = document.getElementById('recent-work');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 100);
            }}
            className="flex items-center gap-2 font-body font-medium text-dark hover:text-accent transition-colors"
          >
            <span>←</span>
            <span>Back to Portfolio</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Property Info */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider">
              {property.location}
            </span>
            <span className="text-gray">•</span>
            <span className="font-body text-sm text-gray">
              {property.date}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-dark mb-6">
            {property.label}
          </h1>
          <p className="font-body text-xl text-gray leading-relaxed max-w-4xl">
            {property.description}
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {property.images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl ${
                index === 0 ? 'md:col-span-2 aspect-[2/1]' : 'aspect-[4/3]'
              }`}
            >
              <OptimizedImage
                src={image}
                alt={`${property.label} - Photo ${index + 1}`}
                className="w-full h-full object-cover md:hover:scale-105 transition-transform duration-500"
                priority={index === 0}
                sizes={index === 0 ? '(max-width: 768px) 100vw, 100vw' : '(max-width: 768px) 100vw, 50vw'}
              />
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-white p-12 rounded-3xl border border-gray/10 text-center">
          <h3 className="font-display text-3xl font-bold text-dark mb-4">
            Want Photography Like This?
          </h3>
          <p className="font-body text-gray mb-8 max-w-2xl mx-auto">
            Get in touch to discuss your property photography needs
          </p>
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="font-body font-semibold bg-accent text-white px-8 py-4 rounded-full hover:bg-accent/90 transition-all hover:scale-105"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
