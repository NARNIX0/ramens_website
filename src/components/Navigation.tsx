import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';

const Navigation = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const isBottom = windowHeight + scrollTop >= documentHeight - 100;
      setIsAtBottom(isBottom);

      // Active section detection
      const sections = ['hero', 'pricing', 'recent-work', 'about', 'contact', 'services'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string, sectionId?: string) => {
    if (path === '/') {
      if (location.pathname === '/') {
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        navigate(path);
        // Scroll to section after navigation handled in HomePage useEffect
      }
    } else {
      navigate(path);
    }
  };

  const whatsAppLink = "https://wa.me/447780038076?text=Hi%20Ramen%20Studios%20-%20I%20need%20professional%20property%20photography";

  return (
    <>
      {/* WhatsApp Floating Action Button */}
      <a
        href={whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-24 right-4 z-[100] md:bottom-8 md:right-8 transition-all duration-300 hover:scale-110 cursor-pointer pointer-events-auto ${
          isAtBottom ? 'translate-y-32 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
        aria-label="Chat on WhatsApp"
        style={{ pointerEvents: isAtBottom ? 'none' : 'auto' }}
      >
        <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl border-2 border-white animate-pulse hover:animate-none active:scale-95 transition-transform duration-200">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      </a>

      {/* Desktop Navigation */}
      <nav className={`hidden lg:block fixed bottom-8 left-0 right-0 z-50 transition-all duration-500 ${
        isAtBottom ? 'translate-y-32 opacity-0' : 'translate-y-0 opacity-100'
      }`}>
        <div className="max-w-fit mx-auto bg-white/95 backdrop-blur-lg shadow-2xl rounded-full px-8 py-4 border border-gray/10">
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => handleNavigation('/')}
              className={`font-body text-sm font-medium transition-colors px-5 py-2 rounded-full hover:bg-light ${location.pathname === '/' && !activeSection ? 'text-accent bg-accent/5' : 'text-dark hover:text-accent'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/', 'pricing')}
              className={`font-body text-sm font-medium transition-colors px-5 py-2 rounded-full hover:bg-light ${activeSection === 'pricing' ? 'text-accent bg-accent/5' : 'text-dark hover:text-accent'}`}
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavigation('/', 'recent-work')}
              className={`font-body text-sm font-medium transition-colors px-5 py-2 rounded-full hover:bg-light ${activeSection === 'recent-work' ? 'text-accent bg-accent/5' : 'text-dark hover:text-accent'}`}
            >
              Portfolio
            </button>
            <button
              onClick={() => handleNavigation('/', 'about')}
              className={`font-body text-sm font-medium transition-colors px-5 py-2 rounded-full hover:bg-light ${activeSection === 'about' ? 'text-accent bg-accent/5' : 'text-dark hover:text-accent'}`}
            >
              About
            </button>
            <div className="w-px h-6 bg-gray/20 mx-2"></div>
            <Button
              onClick={() => handleNavigation('/', 'contact')}
              size="sm"
              className={activeSection === 'contact' ? 'ring-2 ring-accent ring-offset-2' : ''}
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed bottom-6 left-4 right-4 z-50 transition-all duration-500 ${
        isAtBottom ? 'translate-y-32 opacity-0' : 'translate-y-0 opacity-100'
      }`}>
        {/* Mobile Menu Button */}
        <div className="bg-white/95 backdrop-blur-lg shadow-2xl border border-gray/10 rounded-full p-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between gap-1 px-1 min-w-max mx-auto">
            <button
              onClick={() => handleNavigation('/')}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl hover:bg-light transition-colors min-w-[56px] ${location.pathname === '/' && !activeSection ? 'text-accent' : 'text-dark'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="font-body text-[9px] font-medium uppercase tracking-wide">Home</span>
            </button>
            <button
              onClick={() => handleNavigation('/', 'pricing')}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl hover:bg-light transition-colors min-w-[56px] ${activeSection === 'pricing' ? 'text-accent' : 'text-dark'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-body text-[9px] font-medium uppercase tracking-wide">Pricing</span>
            </button>
            <button
              onClick={() => handleNavigation('/', 'recent-work')}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl hover:bg-light transition-colors min-w-[56px] ${activeSection === 'recent-work' ? 'text-accent' : 'text-dark'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-body text-[9px] font-medium uppercase tracking-wide">Work</span>
            </button>
            <button
              onClick={() => handleNavigation('/', 'about')}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl hover:bg-light transition-colors min-w-[56px] ${activeSection === 'about' ? 'text-accent' : 'text-dark'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-body text-[9px] font-medium uppercase tracking-wide">About</span>
            </button>
            <div className="w-px h-8 bg-gray/20 mx-1"></div>
            <button
              onClick={() => handleNavigation('/', 'contact')}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-full transition-colors min-w-[56px] bg-accent text-white hover:bg-accent/90 ${activeSection === 'contact' ? 'ring-2 ring-accent ring-offset-2' : ''}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-body text-[9px] font-medium uppercase tracking-wide">Contact</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
