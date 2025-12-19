import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import OfferBanner from '../components/OfferBanner';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import ProblemSolution from '../components/ProblemSolution';
import BeforeAfterSliders from '../components/BeforeAfterSliders';
import AIVirtualStaging from '../components/AIVirtualStaging';
import ThreeKeyResults from '../components/ThreeKeyResults';
import Pricing from '../components/Pricing';
import Services from '../components/Services';
import Process from '../components/Process';
import RecentWork from '../components/RecentWork'; // Replaces Portfolio
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Only handle hash navigation - clean URLs should start at top
    if (location.pathname === '/about') {
      const element = document.getElementById('about');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname === '/contact') {
      const element = document.getElementById('contact');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#recent-work') {
      // Only scroll if hash is explicitly in URL
      const element = document.getElementById('recent-work');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else if (location.pathname === '/' && !location.hash) {
      // Ensure clean home page starts at top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <OfferBanner />
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <BeforeAfterSliders />
        <AIVirtualStaging />
        <ThreeKeyResults />
        <Pricing />
        <Services />
        <Process />
        <RecentWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
