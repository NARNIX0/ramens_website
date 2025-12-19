import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import NumberFlow from '@number-flow/react';
import { cn } from '../lib/utils';
import Button from './Button';

type BedroomSize = '1-2' | '3-4' | '5+';

interface PackagePlan {
  name: string;
  packagePrices: {
    '1-2': number;
    '3-4': number;
    '5+': number;
  };
  features: string[];
  buttonText: string;
  isPopular: boolean;
  // Individual values for each bedroom size
  individualValues: {
    '1-2': number;
    '3-4': number;
    '5+': number;
  };
}

const WHATSAPP_BASE = 'https://wa.me/447780038076';

const packages: PackagePlan[] = [
  {
    name: 'ESSENTIAL',
    packagePrices: {
      '1-2': 429,
      '3-4': 579,
      '5+': 999,
    },
    individualValues: {
      '1-2': 480, // £180 + £50 + £250
      '3-4': 700, // £300 + £50 + £350
      '5+': 1200, // £500 + £50 + £650
    },
    features: [
      'HDR Photography',
      'Floor Plans',
      '360° Virtual Tours',
    ],
    buttonText: 'Get Essential',
    isPopular: false,
  },
  {
    name: 'PROFESSIONAL',
    packagePrices: {
      '1-2': 699,
      '3-4': 999,
      '5+': 1499,
    },
    individualValues: {
      '1-2': 875, // £180 + £50 + £250 + £200 + £180 + £150
      '3-4': 1230, // £300 + £50 + £350 + £200 + £180 + £150
      '5+': 1790, // Updated from 1730 to match user's data
    },
    features: [
      'HDR Photography',
      'Floor Plans',
      'Video Tours',
      '360° Virtual Tours',
      'Drone Videography',
      'Virtual Staging',
      'Twilight Photography',
    ],
    buttonText: 'Get Professional',
    isPopular: true,
  },
  {
    name: 'PREMIUM',
    packagePrices: {
      '1-2': 1199,
      '3-4': 1599,
      '5+': 2399,
    },
    individualValues: {
      '1-2': 1330, // £180 + £50 + £250 + £180 + £200 + £180 + £150 + £300 + £180
      '3-4': 1985, // £300 + £50 + £350 + £275 + £200 + £180 + £150 + £300 + £180
      '5+': 2960, // Updated from 2735 to match user's data
    },
    features: [
      'HDR Photography',
      'Floor Plans',
      'Video Tours',
      '360° Virtual Tours',
      'Drone Videography',
      'Virtual Staging',
      'Twilight Photography',
      'Marketing Add-ons',
      'Premium Touch-ups',
    ],
    buttonText: 'Get Premium',
    isPopular: false,
  },
];

const Pricing = () => {
  const [selectedBedrooms, setSelectedBedrooms] = useState<BedroomSize>('1-2');

  const calculateDiscount = (packagePrice: number, individualValue: number) => {
    return Math.round(((individualValue - packagePrice) / individualValue) * 100);
  };

  const calculateSavings = (packagePrice: number, individualValue: number) => {
    return individualValue - packagePrice;
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark leading-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="font-body text-lg text-gray max-w-3xl mx-auto">
            Choose the package that works for you. All packages include professional photography, 
            editing, and dedicated support.
          </p>
        </div>

        {/* Bedroom Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-light rounded-full p-1 border border-gray/20">
            {(['1-2', '3-4', '5+'] as BedroomSize[]).map((size) => (
              <button
                key={size}
                onClick={() => setSelectedBedrooms(size)}
                className={cn(
                  'px-6 py-2 rounded-full font-display font-semibold text-sm md:text-base transition-all duration-300',
                  selectedBedrooms === size
                    ? 'bg-accent text-white shadow-md'
                    : 'text-gray hover:text-dark'
                )}
              >
                {size === '1-2' ? '1-2 Bedrooms' : size === '3-4' ? '3-4 Bedrooms' : '5+ Bedrooms'}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, index) => {
            const packagePrice = pkg.packagePrices[selectedBedrooms];
            const individualValue = pkg.individualValues[selectedBedrooms];
            const discount = calculateDiscount(packagePrice, individualValue);
            const savings = calculateSavings(packagePrice, individualValue);

            const bedroomLabel =
              selectedBedrooms === '1-2'
                ? '1-2 bedrooms'
                : selectedBedrooms === '3-4'
                ? '3-4 bedrooms'
                : '5+ bedrooms';

            const waMessage = encodeURIComponent(
              `Hi Ramen Studios - I'd like to book the ${pkg.name} package for a property with ${bedroomLabel}.\n` +
              `Package price: £${packagePrice} (individually £${individualValue}).\n` +
              `Please share next availability and any details you need from me.`
            );

            const waLink = `${WHATSAPP_BASE}?text=${waMessage}`;

            return (
              <motion.div
                key={pkg.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: pkg.isPopular ? -20 : 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1,
                }}
                className={cn(
                  'relative rounded-3xl border-2 p-6 md:p-8 bg-white flex flex-col',
                  pkg.isPopular
                    ? 'border-accent shadow-xl scale-105 z-10'
                    : 'border-gray/20 shadow-md',
                  index === 0 && 'md:scale-95',
                  index === 2 && 'md:scale-95'
                )}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent py-1.5 px-4 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Star className="h-4 w-4 text-white fill-current" />
                    <span className="font-display font-bold text-white text-sm">
                      Popular
                    </span>
                  </div>
                )}

                <div className="flex-1 flex flex-col">
                  {/* Package Name */}
                  <div className="mb-4">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-dark">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Price Display */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-display text-5xl md:text-6xl font-bold text-dark">
                        £
                        <NumberFlow
                          value={packagePrice}
                          format={{
                            style: 'decimal',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }}
                          transformTiming={{
                            duration: 500,
                            easing: 'ease-out',
                          }}
                          willChange
                          className="font-variant-numeric: tabular-nums inline-block"
                        />
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="font-body text-sm text-gray line-through">
                        Individually: £
                        <NumberFlow
                          value={individualValue}
                          format={{
                            style: 'decimal',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }}
                          transformTiming={{
                            duration: 500,
                            easing: 'ease-out',
                          }}
                          willChange
                          className="font-variant-numeric: tabular-nums inline-block"
                        />
                      </p>
                      <p className="font-display font-bold text-accent text-lg">
                        Save £
                        <NumberFlow
                          value={savings}
                          format={{
                            style: 'decimal',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }}
                          transformTiming={{
                            duration: 500,
                            easing: 'ease-out',
                          }}
                          willChange
                          className="font-variant-numeric: tabular-nums inline-block"
                        />{' '}
                        (
                        <NumberFlow
                          value={discount}
                          format={{
                            style: 'decimal',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }}
                          transformTiming={{
                            duration: 500,
                            easing: 'ease-out',
                          }}
                          willChange
                          className="font-variant-numeric: tabular-nums inline-block"
                        />
                        % off)
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="flex-1 space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="font-body text-sm text-gray leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      variant={pkg.isPopular ? 'primary' : 'secondary'}
                      className="w-full"
                    >
                      {pkg.buttonText}
                    </Button>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

