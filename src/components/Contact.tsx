import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will be in touch shortly.');
  };

  return (
    <section id="contact" className="py-32 bg-light relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <h2 className="font-display text-6xl md:text-7xl font-bold text-dark mb-6 leading-tight">
            Let's Work Together
          </h2>
          <p className="font-body text-xl text-gray">
            Get in touch today for a fast quote and flexible booking options
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-body font-semibold text-dark text-sm mb-3"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-light border-2 border-gray/20 rounded-2xl text-dark placeholder-gray/50 focus:outline-none focus:border-accent transition-all font-body"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-body font-semibold text-dark text-sm mb-3"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-light border-2 border-gray/20 rounded-2xl text-dark placeholder-gray/50 focus:outline-none focus:border-accent transition-all font-body"
                  placeholder="john@estateagent.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-body font-semibold text-dark text-sm mb-3"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-light border-2 border-gray/20 rounded-2xl text-dark placeholder-gray/50 focus:outline-none focus:border-accent transition-all font-body"
                  placeholder="07XXX XXXXXX"
                />
              </div>

              <div>
                <label
                  htmlFor="preferredDate"
                  className="block font-body font-semibold text-dark text-sm mb-3"
                >
                  Preferred Date/Time
                </label>
                <input
                  type="text"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-light border-2 border-gray/20 rounded-2xl text-dark placeholder-gray/50 focus:outline-none focus:border-accent transition-all font-body"
                  placeholder="Next Tuesday 10am"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-body font-semibold text-dark text-sm mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-light border-2 border-gray/20 rounded-2xl text-dark placeholder-gray/50 focus:outline-none focus:border-accent transition-all resize-none font-body"
                  placeholder="Tell us about your property..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-white px-8 py-5 text-lg font-body font-semibold rounded-full hover:bg-accent/90 transition-all hover:scale-105"
              >
                Send Message →
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-3xl font-bold text-dark mb-8">
                Contact Details
              </h3>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-gray/10 md:hover:border-accent/30 transition-all">
                <span className="font-body text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">
                  Email
                </span>
                <a
                  href="mailto:ramen@ramenstudios.co.uk"
                  className="font-body text-dark md:hover:text-accent transition-colors text-lg font-medium"
                >
                  ramen@ramenstudios.co.uk
                </a>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray/10 md:hover:border-accent/30 transition-all">
                <span className="font-body text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">
                  Phone
                </span>
                <a
                  href="tel:+447780038076"
                  className="font-body text-dark md:hover:text-accent transition-colors text-lg font-medium"
                >
                  07780 038076
                </a>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray/10 md:hover:border-accent/30 transition-all">
                <span className="font-body text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">
                  Service Area
                </span>
                <p className="font-body text-dark text-lg font-medium">
                  South West London<br />& Surrey
                </p>
              </div>
            </div>

            {/* Response Badge */}
            <div className="bg-secondary/10 border-2 border-secondary/20 text-dark p-8 rounded-3xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-body font-bold text-dark mb-2">Fast Response</p>
                  <p className="font-body text-gray text-sm">
                    We typically respond within 2 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
