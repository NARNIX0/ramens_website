import { useState, useEffect } from 'react';
import { FlowButton } from './ui/flow-button';

const OfferBanner = () => {
  const [isVisible, setIsVisible] = useState(false); // Default to false to avoid flash
  const whatsAppLink = "https://wa.me/447780038076?text=Hi%20Ramen%20Studios%20-%20I%20want%20to%20claim%20the%20Free%20First%20Shoot%20offer";

  useEffect(() => {
    const isClosed = localStorage.getItem('offerBannerClosed');
    if (!isClosed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('offerBannerClosed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-40 w-full h-14 bg-accent border-b border-dark/10 flex items-center justify-center text-white px-4 transition-all duration-300">
      <div className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg font-body font-bold text-center leading-tight">
        <span>🎯 Get Your First Shoot Free • 50% Off Second Shoot </span>
        <FlowButton 
          text="Claim Now"
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
      <button 
        onClick={handleClose}
        className="absolute right-2 sm:right-4 p-1 hover:opacity-80 transition-opacity"
        aria-label="Close offer banner"
        hidden={true}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default OfferBanner;

