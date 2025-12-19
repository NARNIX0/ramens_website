import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 md:py-16 border-t border-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-dark mb-3 md:mb-4 leading-tight">
              Ramen Studios
            </h3>
            <p className="font-body text-sm md:text-base text-gray leading-relaxed mb-4 md:mb-6">
              Professional estate agent photography delivering exceptional
              results with fast turnaround times.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-light hover:bg-accent rounded-full flex items-center justify-center transition-all group"
                aria-label="Instagram"
              >
                <span className="text-dark group-hover:text-white transition-colors">📷</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-light hover:bg-accent rounded-full flex items-center justify-center transition-all group"
                aria-label="Facebook"
              >
                <span className="text-dark group-hover:text-white transition-colors">👍</span>
              </a>
            </div>
          </div>

          {/* Service Area */}
          <div className="md:col-span-4">
            <h4 className="font-body font-bold text-dark text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
              Service Area
            </h4>
            <p className="font-body text-sm md:text-base text-gray leading-relaxed">
              Kingston upon Thames, Surbiton, New Malden, Hampton Wick, and
              surrounding areas across South West London and Surrey.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-body font-bold text-dark text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
              Contact
            </h4>
            <div className="space-y-2 md:space-y-3">
              <a
                href="mailto:ramen@ramenstudios.co.uk?subject=Inquiry"
                className="block font-body text-sm md:text-base text-gray hover:text-accent transition-colors cursor-pointer"
              >
                Email →
              </a>
              <a
                href="tel:+447780038076"
                className="block font-body text-sm md:text-base text-gray hover:text-accent transition-colors"
              >
                Call →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-gray/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="font-body text-gray text-xs md:text-sm">
              © {currentYear} Ramen Studios. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <Link
                to="/privacy-policy"
                className="font-body text-gray hover:text-accent transition-colors text-xs md:text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="font-body text-gray hover:text-accent transition-colors text-xs md:text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
