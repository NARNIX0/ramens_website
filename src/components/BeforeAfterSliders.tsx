import ThumbnailCarousel from './ui/ThumbnailCarousel';

const BeforeAfterSliders = () => {
  const sliders = [
    {
      id: 1,
      label: "Twilight Magic",
      //caption: "Turn any property into a showstopper. Warm glowing windows + sunset skies = scroll-stopping listings that get clicks.",
      beforeImage: "/before-after/before and after image 1A.png",
      afterImage: "/before-after/before and after image 1B.png"
    },
    {
      id: 2,
      label: "Virtual Staging",
      //caption: "Empty rooms don't sell. Professionally staged spaces help buyers imagine themselves living there—without the £2,000+ staging bill.",
      beforeImage: "/before-after/before and after image 2A.png",
      afterImage: "/before-after/before and after image 2B.jpeg"
    },
    {
      id: 3,
      label: "Clutter Removal",
      //caption: "Tenants left it messy? No problem. I digitally declutter so your listing looks move-in ready from day one.",
      beforeImage: "/before-after/before and after image 3A.jpeg",
      afterImage: "/before-after/before and after image 3B.jpeg"
    },
    {
      id: 4,
      label: "Sky Replacement",
      //caption: "British weather won't ruin your listing. Grey skies become blue in post—because buyers want to see the dream, not the drizzle.",
      beforeImage: "/before-after/before and after image 4A.jpeg",
      afterImage: "/before-after/before and after image 4B.jpeg"
    },
    {
      id: 5,
      label: "Garden Enhancement",
      //aption: "Tired grass and dull gardens get the glow-up treatment. Lush greens and sunny skies make outdoor spaces irresistible.",
      beforeImage: "/before-after/before and after image 5A.png",
      afterImage: "/before-after/before and after image 5B.png"
    },
    {
      id: 6,
      label: "Bedroom Rescue",
      //caption: "From chaos to calm. Even the messiest rooms can look pristine—so you never have to delay a listing again.",
      beforeImage: "/before-after/before and after image 6A.jpeg",
      afterImage: "/before-after/before and after image 6B.jpeg"
    },
    {
      id: 7,
      label: "Interior Transformation",
      //caption: "Transform empty spaces into inviting homes. Professional editing brings warmth and character to every room.",
      beforeImage: "/before-after/before and after image 7A.jpeg",
      afterImage: "/before-after/before and after image 7B.jpeg"
    },
    {
      id: 8,
      label: "Space Enhancement",
      //caption: "Maximize the appeal of every property. Our editing makes spaces feel larger, brighter, and more desirable.",
      beforeImage: "/before-after/before and after image 8A.jpeg",
      afterImage: "/before-after/before and after image 8B.png"
    },
    {
      id: 9,
      label: "Property Makeover",
      //caption: "From basic to beautiful. Professional photography editing elevates your listings and attracts serious buyers.",
      beforeImage: "/before-after/before and after image 9A.jpeg",
      afterImage: "/before-after/before and after image 9B.png"
    }
  ];

  return (
    <section id="before-after" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4 leading-tight">
            See the transformation
          </h2>
          <p className="font-body text-lg text-gray">
            Your photos. Our treatment.
          </p>
        </div>

        <ThumbnailCarousel items={sliders} />
      </div>
    </section>
  );
};

export default BeforeAfterSliders;
