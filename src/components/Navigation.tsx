import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Check if user is within 100px of the bottom
      const isBottom = windowHeight + scrollTop >= documentHeight - 100;
      setIsAtBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden md:block fixed bottom-8 left-0 right-0 z-50 transition-all duration-500 ${
        isAtBottom ? 'translate-y-32 opacity-0' : 'translate-y-0 opacity-100'
      }`}>
        <div className="max-w-fit mx-auto bg-white/95 backdrop-blur-lg shadow-2xl rounded-full px-8 py-4 border border-gray/10">
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => scrollToSection('services')}
              className="font-body text-sm font-medium text-dark hover:text-accent transition-colors px-5 py-2 rounded-full hover:bg-light"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('turnaround')}
              className="font-body text-sm font-medium text-dark hover:text-accent transition-colors px-5 py-2 rounded-full hover:bg-light"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="font-body text-sm font-medium text-dark hover:text-accent transition-colors px-5 py-2 rounded-full hover:bg-light"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('clients')}
              className="font-body text-sm font-medium text-dark hover:text-accent transition-colors px-5 py-2 rounded-full hover:bg-light"
            >
              Clients
            </button>
            <div className="w-px h-6 bg-gray/20 mx-2"></div>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-body text-sm font-semibold bg-accent text-white px-6 py-2.5 rounded-full hover:bg-accent/90 transition-all hover:scale-105"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        isAtBottom ? 'translate-y-32 opacity-0' : 'translate-y-0 opacity-100'
      }`}>
        {/* Mobile Menu Button */}
        <div className="bg-white/95 backdrop-blur-lg shadow-2xl border-t border-gray/10 p-4">
          <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="flex flex-col items-center gap-1 py-3 rounded-2xl hover:bg-light transition-colors"
            >
              <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-body text-xs font-medium text-dark">Work</span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="flex flex-col items-center gap-1 py-3 rounded-2xl hover:bg-light transition-colors"
            >
              <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <span className="font-body text-xs font-medium text-dark">Services</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex flex-col items-center gap-1 py-3 rounded-2xl bg-accent text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-body text-xs font-semibold">Contact</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
