import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Extended property data with additional photos
const propertyData: Record<string, {
  label: string;
  location: string;
  date: string;
  description: string;
  images: string[];
}> = {
  '1': {
    label: 'Modern 4-bed Detached',
    location: 'Kingston',
    date: 'December 2024',
    description: 'A stunning contemporary detached home featuring four spacious bedrooms, open-plan living areas, and a beautifully landscaped garden. The property showcases modern architecture with floor-to-ceiling windows, allowing natural light to flood throughout. High-end finishes and smart home technology throughout.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
  },
  '2': {
    label: 'Luxury Apartment',
    location: 'Thames Riverside',
    date: 'November 2024',
    description: 'An exceptional riverside apartment offering panoramic Thames views from every room. This luxury residence features a sleek modern design with premium materials, underfloor heating, and a private balcony perfect for entertaining. Located in a prestigious development with concierge service.',
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
  },
  '3': {
    label: 'Contemporary 2-bed Flat',
    location: 'Town Centre',
    date: 'October 2024',
    description: 'A stylish two-bedroom flat in the heart of Kingston town centre. Perfectly positioned for urban living with all amenities on your doorstep. Features include a modern open-plan kitchen/living area, two double bedrooms, and a contemporary bathroom with walk-in shower.',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
  },
  '4': {
    label: 'Victorian Terrace',
    location: 'Surbiton',
    date: 'September 2024',
    description: 'A beautifully restored Victorian terrace house combining period charm with modern convenience. Original features include high ceilings, sash windows, and ornate cornicing, complemented by a contemporary kitchen extension and luxurious bathroom. Private rear garden perfect for families.',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
            onClick={() => navigate('/')}
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
              <img
                src={image}
                alt={`${property.label} - Photo ${index + 1}`}
                className="w-full h-full object-cover md:hover:scale-105 transition-transform duration-500"
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

