import Button from './Button';

const Hero = () => {
  const whatsAppLink = "https://wa.me/447780038076?text=Hi%20Ramen%20Studios%20-%20I%20need%20professional%20property%20photography";

  const scrollToWork = () => {
    const element = document.getElementById('recent-work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero-banner.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay - Removed dark/40 overlay */}
      {/* <div className="absolute inset-0 z-0 bg-dark/40" /> */}

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-0 py-32 text-left">
        <div className="max-w-5xl">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight opacity-0 animate-fade-in-up">
            Sell Homes Faster & For Far More Money
          </h1>
          
          <p className="font-body text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 font-medium opacity-0 animate-stagger-1 leading-relaxed tracking-tight max-w-3xl">
            more viewings - more valuations - zero hassle<br className="hidden sm:block" />media partner for driven london agents<br className="hidden sm:block" />South West London & Surrey
          </p>

          <div className="flex flex-col sm:flex-row justify-start gap-4 opacity-0 animate-stagger-2">
            <a 
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                variant="primary"
                size="lg"
                className="w-full sm:w-auto px-8 py-3 text-lg rounded-full"
              >
                Get Free Shoot
              </Button>
            </a>

            <Button
              onClick={scrollToWork}
              className="w-full sm:w-auto px-8 py-3 text-lg rounded-full bg-white/15 backdrop-blur-md border border-white/60 text-white hover:bg-white/20 hover:text-white hover:border-white transition-all shadow-lg"
              variant="secondary"
            >
              View Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden for now */}
      {/* <div className="absolute bottom-40 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg 
          className="w-6 h-6 text-white/70" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div> */}
    </section>
  );
};

export default Hero;
