import StackedVideos from './ui/StackedVideos';

const AIVirtualStaging = () => {
  const videos = [
    { src: "/videos/twilight-timelapse.gif", title: "Twilight Timelapse" },
    { src: "/videos/living-room-staging.gif", title: "Living Room Staging" },
    { src: "/videos/living-room-2-staging.gif", title: "Living Room Staging 2" },
  ];

  const features = [
    "Empty rooms furnished in under 24 hours",
    "Save £5,000+ on physical staging",
    "Multiple style options per room",
    "Buyers can visualize the space",
    "Staged Photos get 3x more showings"
  ];

  return (
    <section id="ai-staging" className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Stacked Videos */}
          <div className="order-2 lg:order-1 flex justify-center items-center lg:justify-start py-8 lg:py-0 w-full">
            <div className="relative flex justify-center items-center w-full">
              {/* Glow effect behind videos */}
              <div className="absolute -inset-10 bg-accent/20 rounded-full blur-3xl opacity-30" />
              <StackedVideos videos={videos} />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Empty rooms don't sell.
              <span className="text-accent"> I fix that.</span>
            </h2>
            
            <p className="font-body text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Virtual staging that helps buyers see the potential. Professional, 
              photorealistic furniture placement—delivered same-day.
            </p>

            {/* Features list */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-body text-white/80">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div>
                <p className="font-display text-3xl md:text-4xl font-bold text-accent">24hr</p>
                <p className="font-body text-sm text-white/60">Turnaround</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl font-bold text-accent">£2K+</p>
                <p className="font-body text-sm text-white/60">Saved vs. Physical</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl font-bold text-accent">100%</p>
                <p className="font-body text-sm text-white/60">Photorealistic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIVirtualStaging;
