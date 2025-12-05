const About = () => {
  const credentials = [
    '10+ years experience',
    '2,000+ properties photographed',
    'Fully insured & DBS checked',
    'APPP Member',
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-accent"></div>
              <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider">
                About
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-dark mb-8 leading-tight">
              The Photographer
            </h2>

            <div className="space-y-6 text-gray text-lg leading-relaxed mb-12 font-body">
              <p className="text-xl text-dark font-medium">
                With over a decade of experience specializing in property
                photography, I've helped hundreds of estate agents showcase their
                listings in the best possible light.
              </p>

              <p>
                My approach combines technical expertise with an eye for
                composition, ensuring every property—from period homes to modern
                apartments—receives photography that highlights its unique
                character.
              </p>

              <p>
                I understand the fast-paced nature of estate agency work, which
                is why I'm committed to delivering exceptional images with quick
                turnaround times.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-light rounded-2xl">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="font-body text-sm font-medium text-dark">{credential}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-secondary to-accent rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-dark/30"></div>
              <span className="relative z-10 font-body text-sm font-semibold text-white uppercase tracking-widest px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full">
                Your Photo Here
              </span>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 bg-accent text-white p-8 rounded-3xl shadow-2xl">
              <div className="text-center">
                <div className="font-display text-6xl font-bold leading-none mb-2">10+</div>
                <div className="font-body text-sm font-semibold uppercase tracking-wider">Years</div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
