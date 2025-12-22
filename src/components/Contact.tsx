import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from './Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Essential Package',
    bedrooms: '3-4',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const whatsAppLink = "https://wa.me/447780038076?text=Hi%20Ramen%20Studios%20-%20I%20need%20professional%20property%20photography";

  // Initialize EmailJS
  const EMAILJS_SERVICE_ID = 'service_vshkbl8';
  const EMAILJS_TEMPLATE_ID = 'template_s8n94b2';
  const EMAILJS_PUBLIC_KEY = 'tRRpFVZxQAyJrZrv6';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Initialize EmailJS with public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          service: formData.service,
          bedrooms: formData.bedrooms,
          message: formData.message || 'No message provided',
        }
      );

      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Essential Package',
        bedrooms: '3-4',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-light relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Left Column: Messaging & WhatsApp */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4 leading-tight">
              Ready to Sell Faster?
            </h2>
            <p className="font-body text-lg text-gray mb-8 leading-relaxed">
              Let's get your property photographed in the next 48 hours.
            </p>

            {/* WhatsApp CTA */}
            <a 
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="w-full bg-[#25D366] hover:brightness-90 text-white px-8 py-4 rounded-full font-display font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 mb-8 transform hover:scale-[1.02]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </button>
            </a>

            {/* Info Blocks */}
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-accent/20">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xl">⚡</span>
                  <span className="font-display font-bold text-dark text-sm uppercase tracking-wider">Response Time</span>
                </div>
                <p className="font-body text-sm text-gray pl-8">Same day, usually within an hour</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-accent/20">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xl">📍</span>
                  <span className="font-display font-bold text-dark text-sm uppercase tracking-wider">We Serve</span>
                </div>
                <p className="font-body text-sm text-gray pl-8">South West London & Surrey</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-accent/20">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xl">📅</span>
                  <span className="font-display font-bold text-dark text-sm uppercase tracking-wider">Shoots Available</span>
                </div>
                <p className="font-body text-sm text-gray pl-8">7 days a week, flexible hours</p>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-3 bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-lg border border-accent/10">
            <h3 className="font-display text-2xl font-bold text-dark mb-6">
              Book a Shoot
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block font-body font-semibold text-dark text-sm mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray/30 rounded-lg text-dark placeholder-gray/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all font-body"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-body font-semibold text-dark text-sm mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray/30 rounded-lg text-dark placeholder-gray/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all font-body"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block font-body font-semibold text-dark text-sm mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray/30 rounded-lg text-dark placeholder-gray/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all font-body"
                    placeholder="We'll text WhatsApp"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block font-body font-semibold text-dark text-sm mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray/30 rounded-lg text-dark focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all font-body appearance-none"
                  >
                    <option value="Essential Package">Essential Package</option>
                    <option value="Professional Package">Professional Package</option>
                    <option value="Premium Package">Premium Package</option>
                    <option value="Individual Service">Individual Service</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="bedrooms" className="block font-body font-semibold text-dark text-sm mb-2">
                  Property Size *
                </label>
                <select
                  id="bedrooms"
                  name="bedrooms"
                  required
                  value={formData.bedrooms}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray/30 rounded-lg text-dark focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all font-body appearance-none"
                >
                  <option value="1-2">1-2 Bedrooms</option>
                  <option value="3-4">3-4 Bedrooms</option>
                  <option value="5+">5+ Bedrooms</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-body font-semibold text-dark text-sm mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray/30 rounded-lg text-dark placeholder-gray/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all font-body resize-none"
                  placeholder="Tell me about your property..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full mt-4"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Book My Shoot'}
              </Button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-body text-sm">
                    ✓ Thank you! Your message has been sent. We'll be in touch shortly.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-body text-sm">
                    ✗ Something went wrong. Please try again or contact us via WhatsApp.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
