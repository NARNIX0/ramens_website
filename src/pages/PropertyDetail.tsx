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
      '/properties/ash-house/preston property 4 hero photo.jpeg',
      '/properties/ash-house/preston property 4 photo number  (1).jpeg',
      '/properties/ash-house/preston property 4 photo number  (3).jpeg',
      '/properties/ash-house/preston property 4 photo number  (4).jpeg',
      '/properties/ash-house/preston property 4 photo number  (5).jpeg',
      '/properties/ash-house/preston property 4 photo number  (6).jpeg',
      '/properties/ash-house/preston property 4 photo number  (7).jpeg',
      '/properties/ash-house/preston property 4 photo number  (8).jpeg',
      '/properties/ash-house/preston property 4 photo number  (9).jpeg',
      '/properties/ash-house/preston property 4 photo number  (10).jpeg',
      '/properties/ash-house/preston property 4 photo number  (11).jpeg',
      '/properties/ash-house/preston property 4 photo number  (12).jpeg',
      '/properties/ash-house/preston property 4 photo number  (13).jpeg',
      '/properties/ash-house/preston property 4 photo number  (14).jpeg',
      '/properties/ash-house/preston property 4 photo number  (15).jpeg',
      '/properties/ash-house/preston property 4 photo number  (16).jpeg',
      '/properties/ash-house/preston property 4 photo number  (17).jpeg',
      '/properties/ash-house/preston property 4 photo number  (18).jpeg',
      '/properties/ash-house/preston property 4 photo number  (19).jpeg',
      '/properties/ash-house/preston property 4 photo number  (20).jpeg',
      '/properties/ash-house/preston property 4 photo number  (21).jpeg',
      '/properties/ash-house/preston property 4 photo number  (22).jpeg',
    ],
  },
  '2': {
    label: '5 Bedroom Luxury Property',
    location: 'Preston',
    date: '2024',
    description: 'A premium family residence offering exceptional space and luxury finishes. This property combines elegance with practical family living.',
    images: [
      '/properties/hoyles-lane/Preston property 3 hero photo .jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (1).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (2).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (4).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (5).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (6).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (7).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (8).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (9).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (10).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (11).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (12).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (13).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (14).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (15).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (16).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (17).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (18).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (19).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (20).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (21).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (22).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (23).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (24).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (25).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (26).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (27).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (28).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (29).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (30).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (31).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (32).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (33).jpeg',
      '/properties/hoyles-lane/Preston property 3 photo number  (34).jpeg',
    ],
  },
  '3': {
    label: '3 Bedroom Modern Home',
    location: 'Preston',
    date: '2024',
    description: 'A contemporary property in a prime location, featuring modern design and comfortable living spaces throughout.',
    images: [
      '/properties/lightfoot-lane/Preston property 1 photo hero photo.jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (1).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (2).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (3).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (4).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (5).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (6).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (7).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (8).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (9).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (10).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (11).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (12).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (13).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (14).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (15).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (16).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (17).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (18).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (19).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (20).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (21).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (22).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (23).jpeg',
      '/properties/lightfoot-lane/Preston property 1 photo number (24).jpeg',
    ],
  },
  '4': {
    label: '5 Bedroom Converted Barn',
    location: 'Preston',
    date: '2024',
    description: 'A character property with unique charm, featuring original features combined with modern comforts in a spacious layout.',
    images: [
      '/properties/pendle-view-barn/Preston property 2 hero photo.jpeg',
      '/properties/pendle-view-barn/Preston property 2 photo number (2).jpeg',
      '/properties/pendle-view-barn/Preston property 2 photo number (3).jpeg',
      '/properties/pendle-view-barn/Preston property 2 photo number (4).jpeg',
      '/properties/pendle-view-barn/Preston property 2 photo number (5).jpeg',
      '/properties/pendle-view-barn/Preston property 2 photo number (6).jpeg',
      '/properties/pendle-view-barn/Preston property 2 photo number (7).jpeg',
      '/properties/pendle-view-barn/Preston property 2 photo number (8).jpeg',
      '/properties/pendle-view-barn/Preston property 2 photo number (9).jpeg',
      '/properties/pendle-view-barn/Preston property 2 photo number (10).jpeg',
      '/properties/pendle-view-barn/Preston property 2 photo number (11).jpeg',
      '/properties/pendle-view-barn/Preston property 2 photo number (12).jpeg',
      '/properties/pendle-view-barn/Preston property 2 photo number (13).jpeg',
      '/properties/pendle-view-barn/Preston property 2 photo number (14).jpeg',
      '/properties/pendle-view-barn/Preston property 2 photo number (15).jpeg',
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
