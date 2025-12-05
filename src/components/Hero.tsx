const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/ramen.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-5xl">
          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold text-white mb-8 leading-none tracking-tight opacity-0 animate-fade-in-up">
            I take nice photos
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-white/90 mb-12 max-w-2xl opacity-0 animate-stagger-1">
            Professional property photography for modern estate agents
          </p>

          <div className="flex flex-wrap gap-4 opacity-0 animate-stagger-2">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-body font-semibold text-lg transition-all hover:scale-105"
            >
              View Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-full font-body font-semibold text-lg transition-all"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
