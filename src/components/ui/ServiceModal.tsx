import { useEffect, useState } from 'react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  description: string;
  pricing: {
    tiers: Array<{
      name: string;
      price: string;
      description?: string;
    }>;
    note?: string;
  };
  mediaType: 'image' | 'slider' | 'video';
  mediaSrc?: string;
  beforeImage?: string;
  afterImage?: string;
  videoSrc?: string;
}

const WHATSAPP_BASE = 'https://wa.me/447780038076';

export default function ServiceModal({
  isOpen,
  onClose,
  title,
  category,
  description,
  pricing,
  mediaType,
  mediaSrc,
  beforeImage,
  afterImage,
  videoSrc,
}: ServiceModalProps) {
  const [selectedTierIndex, setSelectedTierIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const selectedTier = pricing.tiers[selectedTierIndex] ?? pricing.tiers[0];

  const waMessage = encodeURIComponent(
    `Hi Ramen Studios - I'd like to book ${title}.\n` +
      (selectedTier
        ? `Selected option: ${selectedTier.name} (${selectedTier.price}).\n`
        : '') +
      `Found via your website services section. Please share next availability and any details you need from me.`
  );

  const whatsAppLink = `${WHATSAPP_BASE}?text=${waMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-gray-200 flex items-center justify-center transition-all hover:scale-110"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content Section */}
        <div className="p-8 pt-12">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full uppercase tracking-wider">
              {category}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4 leading-tight">
            {title}
          </h2>

          {/* Soundbite */}
          {description.includes('.') && (
            <>
              <p className="font-display text-xl font-bold text-accent mb-4 leading-tight">
                {description.substring(0, description.indexOf('.'))}
              </p>
              <p className="font-body text-base text-gray leading-relaxed mb-6">
                {description.substring(description.indexOf('.') + 1).trim()}
              </p>
            </>
          )}

          {/* Pricing Section */}
          <div className="bg-light rounded-2xl p-6 mb-6">
            <h3 className="font-display text-xl font-bold text-dark mb-4">Pricing</h3>
            <div className="space-y-2">
              {pricing.tiers.map((tier, index) => {
                const isSelected = index === selectedTierIndex;
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setSelectedTierIndex(index)}
                    className={`w-full text-left flex items-start justify-between gap-4 px-3 py-3 rounded-xl border transition-all ${
                      isSelected
                        ? 'border-accent bg-accent/5'
                        : 'border-gray/10 hover:border-accent/40 hover:bg-light'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full border ${
                          isSelected ? 'border-accent bg-accent' : 'border-gray'
                        }`}
                      >
                        {isSelected && (
                          <span className="h-2 w-2 rounded-full bg-white" />
                        )}
                      </span>
                      <div className="flex-1">
                        <p className="font-display font-semibold text-dark mb-1">
                          {tier.name}
                        </p>
                        {tier.description && (
                          <p className="font-body text-sm text-gray">
                            {tier.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="font-display text-lg font-bold text-accent whitespace-nowrap">
                      {tier.price}
                    </p>
                  </button>
                );
              })}
            </div>
            {pricing.note && (
              <p className="mt-4 font-body text-sm text-gray italic">{pricing.note}</p>
            )}
          </div>

          {/* CTA Button */}
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-display font-bold text-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
          >
            Book This Service
          </a>
        </div>
      </div>
    </div>
  );
}

