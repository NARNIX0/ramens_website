import OptimizedImage from './OptimizedImage';

const About = () => {
  const credentials = [
    'Adobe Suite Certified',
    'DBS checked',
    'Matterport & Ricoh Certified',
    '2000+ photos taken',
    '5 years experience',
    '20+ estate agents trust Ramen Studios'
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Photo Side (Desktop: Left, Mobile: Top) */}
          <div className="lg:col-span-2 order-1 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border-4 border-accent shadow-xl relative z-10 bg-gray/10">
                <OptimizedImage 
                  src="/selfie-whilst-kayaking.webp" 
                  alt="Founder of Ramen Studios" 
                  className="w-full h-full object-cover"
                  priority={true}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full -z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full -z-0"></div>
              
              {/* Experience Badge */}
              <div className="absolute top-4 right-4 z-20 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-3">
                Est. 2020
              </div>
            </div>
          </div>

          {/* Text Side (Desktop: Right, Mobile: Bottom) */}
          <div className="lg:col-span-3 order-2 lg:order-2 flex flex-col justify-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-6">
              Why I Do This
            </h2>

            <div className="prose prose-lg text-gray mb-8 font-body leading-relaxed">
              <p className="mb-4 font-bold text-dark">
                From Museum Halls to London's Finest Homes
              </p>
              <p className="mb-4">
                I didn't start out trying to be a "real estate photographer." I was an artist.
              </p>
              <p className="mb-4">
                For years, I shot 360° tours for museums and captured high-speed action sports. I was obsessed with detail, lighting, and the technical side of the perfect shot.
              </p>
              <p className="mb-4">
                Then, a friend asked me to photograph a single property. I applied the same high-end techniques I used for museum exhibits to that living room. The result? The property flew off the market.
              </p>
              <p className="mb-4">
                That one favor turned into a referral. Then another. Then 200 more.
              </p>
              <p className="mb-4">
                Today, after working with 20+ top realtors from Preston to London, I realized something: Most property photos are just documentation. Mine are advertisements.
              </p>
              <p>
                I combine my background in Computer Science with an artistic eye to use cutting-edge software that makes every room look its absolute best. I don't just "take photos." I build assets that help you sell.
              </p>
            </div>

            {/* Credentials Stack */}
            <div className="mb-10">
              <h3 className="font-display text-lg font-bold text-dark mb-4">
                Qualifications & Trust
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-body text-base text-dark font-medium">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* "Why work with me" Statement */}
            <div className="relative pl-6 border-l-4 border-accent py-2">
              <p className="font-body text-lg md:text-xl text-gray italic">
                "I don't just take pretty pictures. I take business-focused photography. I understand that better photos = more viewings = higher prices = bigger commissions for you. That's what I optimize for."
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
