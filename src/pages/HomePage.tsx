import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Turnaround from '../components/Turnaround';
import Services from '../components/Services';
import ClientCarousel from '../components/ClientCarousel';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Turnaround />
        <Services />
        <ClientCarousel />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

