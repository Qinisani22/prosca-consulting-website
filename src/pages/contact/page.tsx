import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d5f2i12llb01bjs85kbg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1B3A5F] shadow-lg' : 'bg-[#1B3A5F]'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <img src="https://static.readdy.ai/image/0c620877c55c589905a6ff5b1c5bedeb/d2cd1fa965a6dd71fa95ff5bde054fa9.png" alt="Prosca Consulting Logo" className="h-16" />
            <span className="text-white text-2xl font-bold whitespace-nowrap">Prosca Consulting</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Home</Link>
            <Link to="/about" className="text-white hover:text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">About</Link>
            <Link to="/services" className="text-white hover:text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Services</Link>
            <Link to="/pricing" className="text-white hover:text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Pricing</Link>
            <Link to="/contact" className="text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1B3A5F] to-[#2C5F7F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <i className="ri-mail-line text-[#D4AF37] w-5 h-5 flex items-center justify-center"></i>
              <span className="text-white text-sm font-medium whitespace-nowrap">Get in Touch</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Let's Talk Outsourcing
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Ready to transform your business with professional financial services? Contact us today to discuss your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-11 gap-12">
            {/* Form Area */}
            <div className="md:col-span-6">
              <p className="text-sm uppercase tracking-widest text-[#D4AF37] mb-4 whitespace-nowrap">SEND US A MESSAGE</p>
              <h2 className="text-5xl font-bold text-[#1B3A5F] mb-4">Contact Our Team</h2>
              <p className="text-lg text-gray-600 mb-10">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form id="contact-form" data-readdy-form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-base"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-base"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-base"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company Name"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-base"
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-base text-gray-700"
                >
                  <option value="">Select Subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Business Consulting">Business Consulting</option>
                  <option value="Accounting Services">Accounting Services</option>
                  <option value="Tax Services">Tax Services</option>
                  <option value="Pricing Information">Pricing Information</option>
                  <option value="Partnership Opportunity">Partnership Opportunity</option>
                </select>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  maxLength={500}
                  rows={5}
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-none text-base"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1B3A5F] text-white py-4 rounded-xl hover:bg-[#152E4A] transition-colors flex items-center justify-center gap-3 text-base font-semibold whitespace-nowrap cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center"></i>
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center font-medium">Thank you! We'll be in touch soon.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center font-medium">Something went wrong. Please try again.</p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-5">
              <div className="bg-[#1B3A5F] rounded-3xl p-12 h-full">
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] mb-8">CONTACT INFORMATION</p>
                
                <div className="space-y-10">
                  <div className="flex items-start gap-4">
                    <i className="ri-map-pin-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
                    <div>
                      <h3 className="text-white font-semibold mb-2 text-base whitespace-nowrap">Business Address</h3>
                      <p className="text-white/80 leading-relaxed text-sm">
                        527 Ngwane Street, 1st Floor<br />
                        (Debonair Pizza Building)<br />
                        Manzini, Eswatini
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <i className="ri-mail-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
                    <div>
                      <h3 className="text-white font-semibold mb-2 text-base whitespace-nowrap">Email Address</h3>
                      <a href="mailto:info@proscaconsulting.com" className="text-white/80 hover:text-white transition-colors text-sm">
                        info@proscaconsulting.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <i className="ri-phone-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
                    <div>
                      <h3 className="text-white font-semibold mb-2 text-base whitespace-nowrap">Phone Number</h3>
                      <a href="tel:+26876123456" className="text-white/80 hover:text-white transition-colors text-sm">
                        +268 7612 3456
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <i className="ri-time-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
                    <div>
                      <h3 className="text-white font-semibold mb-2 text-base whitespace-nowrap">Business Hours</h3>
                      <p className="text-white/80 text-sm mb-1">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-white/80 text-sm">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-white/20">
                  <p className="text-white/60 text-sm mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all cursor-pointer">
                      <i className="ri-linkedin-fill w-5 h-5 flex items-center justify-center"></i>
                    </a>
                    <a href="#" className="w-10 h-10 border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all cursor-pointer">
                      <i className="ri-facebook-fill w-5 h-5 flex items-center justify-center"></i>
                    </a>
                    <a href="#" className="w-10 h-10 border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all cursor-pointer">
                      <i className="ri-twitter-fill w-5 h-5 flex items-center justify-center"></i>
                    </a>
                    <a href="#" className="w-10 h-10 border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all cursor-pointer">
                      <i className="ri-instagram-fill w-5 h-5 flex items-center justify-center"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1B3A5F] mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600">527 Ngwane Street, 1st Floor (Debonair Pizza Building), Manzini</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.8!2d31.3667!3d-26.4833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee85d5c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s527%20Ngwane%20St%2C%20Manzini%2C%20Eswatini!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Prosca Consulting Location - 527 Ngwane Street, Manzini"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C5F7F] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src="https://static.readdy.ai/image/0c620877c55c589905a6ff5b1c5bedeb/d2cd1fa965a6dd71fa95ff5bde054fa9.png" alt="Prosca Consulting" className="h-10 mb-4" />
              <p className="text-white/70 text-sm leading-relaxed">
                Competitive Financial Services and Management Solutions That Add Value.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold mb-4 whitespace-nowrap">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-white/70 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer">Home</Link></li>
                <li><Link to="/about" className="text-white/70 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer">About Us</Link></li>
                <li><Link to="/services" className="text-white/70 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer">Services</Link></li>
                <li><Link to="/pricing" className="text-white/70 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold mb-4 whitespace-nowrap">Services</h3>
              <ul className="space-y-3">
                <li><Link to="/services" className="text-white/70 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer">Business Consulting</Link></li>
                <li><Link to="/services" className="text-white/70 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer">Accounting Services</Link></li>
                <li><Link to="/services" className="text-white/70 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer">Tax Services</Link></li>
                <li><Link to="/services" className="text-white/70 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer">Training Programs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold mb-4 whitespace-nowrap">Contact Info</h3>
              <ul className="space-y-3">
                <li className="text-white/70 text-sm">527 Ngwane Street, 1st Floor<br />(Debonair Pizza Building)<br />Manzini, Eswatini</li>
                <li><a href="mailto:info@proscaconsulting.com" className="text-white/70 hover:text-white transition-colors text-sm">info@proscaconsulting.com</a></li>
                <li><a href="tel:+26876123456" className="text-white/70 hover:text-white transition-colors text-sm">+268 7612 3456</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">© 2025 Prosca Consulting (Pty) Ltd. All rights reserved.</p>
            <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer">
              Powered by Readdy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
