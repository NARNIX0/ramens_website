import { useEffect, useRef, useState } from 'react';

const ProblemSolution = () => {
  // Toggle this to show/hide the section (set to false to hide)
  const SHOW_SECTION = false;
  
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  if (!SHOW_SECTION) {
    return null;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleEnded = () => {
        video.currentTime = 0;
        video.play();
      };
      video.addEventListener('ended', handleEnded);
      return () => video.removeEventListener('ended', handleEnded);
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="problem-solution" 
      className="bg-light py-16 md:py-32 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        
        {/* Left Column: Text (Pain/Solution) */}
        <div className={`w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-dark leading-tight">
            Your listings sit on Rightmove. Buyers scroll in 3 seconds.
          </h2>
          
          <div className="w-20 h-1 bg-accent/20"></div>

          <p className="font-body text-base md:text-xl text-gray leading-relaxed">
            <span className="font-bold text-dark">Bad photos = fewer showings = fewer commissions.</span> 
            <br className="mb-4 block" />
            Most agents accept "good enough" photography, but in a crowded market, "good enough" gets scrolled past. Here's the difference professional visual marketing makes to your bottom line.
          </p>
        </div>

        {/* Right Column: Visual Element (Video) */}
        <div className={`w-full lg:w-1/2 mt-8 lg:mt-0 transition-all duration-1000 ease-out delay-200 transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
          <div className="relative group w-full max-w-[500px] mx-auto lg:ml-auto aspect-[22/24] overflow-hidden border-2 border-accent bg-white">
            
            {/* Video */}
            <video 
              ref={videoRef}
              src="/boring-listings.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-150"
              style={{ filter: 'none', opacity: 1 }}
            />
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;
