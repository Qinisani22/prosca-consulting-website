import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <Link to="/about" className="text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">About</Link>
            <Link to="/services" className="text-white hover:text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Services</Link>
            <Link to="/pricing" className="text-white hover:text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Pricing</Link>
            <Link to="/contact" className="text-white hover:text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Contact</Link>
            <a href="/#contact" className="bg-[#D4AF37] text-white px-6 py-3 rounded-lg hover:bg-[#C19B2E] transition-colors text-sm font-semibold whitespace-nowrap">Request Consultation</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1B3A5F] to-[#2C5F7F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <i className="ri-building-line text-[#D4AF37] w-5 h-5 flex items-center justify-center"></i>
              <span className="text-white text-sm font-medium whitespace-nowrap">About Prosca Consulting</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Building Trust Through Excellence
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Since 2014, we've been delivering competitive financial services and management solutions that add real value to businesses across Eswatini.
            </p>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-[#D4AF37] mb-4">OUR STORY</p>
              <h2 className="text-5xl font-bold text-[#1B3A5F] mb-6">Established in 2014</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Prosca Consulting (Pty) Ltd is a 100% Swazi-owned business consulting and accounting firm that has been serving the business community of Eswatini for over a decade.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We specialize in providing comprehensive business consulting, accounting, and tax services to small and medium enterprises, corporate organizations, startups, and public/private institutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence, integrity, and client satisfaction has made us a trusted partner for businesses seeking professional financial and management solutions.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden h-[500px]">
              <img 
                src="https://readdy.ai/api/search-image?query=modern%20corporate%20office%20building%20in%20Eswatini%20Africa%20with%20professional%20business%20environment%2C%20contemporary%20architecture%20representing%20financial%20services%20company%2C%20clean%20corporate%20photography%20with%20navy%20blue%20and%20gold%20color%20scheme%20showing%20trust%20and%20stability&width=800&height=800&seq=prosca-office-building&orientation=squarish" 
                alt="Prosca Consulting Office" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-12 shadow-lg">
              <div className="w-16 h-16 bg-[#FFF8E7] rounded-full flex items-center justify-center mb-6">
                <i className="ri-eye-line text-[#1B3A5F] text-3xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-3xl font-bold text-[#1B3A5F] mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading provider of business consulting and accounting services in Eswatini, recognized for our commitment to excellence, innovation, and client success.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-lg">
              <div className="w-16 h-16 bg-[#FFF8E7] rounded-full flex items-center justify-center mb-6">
                <i className="ri-compass-3-line text-[#1B3A5F] text-3xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-3xl font-bold text-[#1B3A5F] mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To deliver competitive financial services and management solutions that add value to our clients' businesses through professional expertise, ethical practices, and innovative approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#D4AF37] mb-4">WHAT DRIVES US</p>
            <h2 className="text-5xl font-bold text-[#1B3A5F] mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every service we deliver to our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-10 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#1B3A5F] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3A5F] mb-4">Honesty & Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest ethical standards in all our professional dealings, ensuring transparency and trustworthiness in every engagement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-10 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#1B3A5F] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-customer-service-2-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3A5F] mb-4">Service Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to delivering exceptional service quality, meeting deadlines, and exceeding client expectations in every project.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-10 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#1B3A5F] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-message-3-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3A5F] mb-4">Reliable Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain clear, consistent, and timely communication with our clients, ensuring they are always informed and involved.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-10 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#1B3A5F] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3A5F] mb-4">Quality & Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We leverage the latest technology and best practices to deliver innovative solutions that drive business success.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-10 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#1B3A5F] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-hand-heart-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3A5F] mb-4">Ownership & Responsibility</h3>
              <p className="text-gray-600 leading-relaxed">
                We take full accountability for our work and its outcomes, ensuring our clients can rely on us completely.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-10 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#1B3A5F] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-money-dollar-circle-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3A5F] mb-4">Value for Money</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide quality services at competitive rates, ensuring our clients receive maximum value from their investment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-10 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#1B3A5F] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-team-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3A5F] mb-4">Dynamic Teamwork</h3>
              <p className="text-gray-600 leading-relaxed">
                We foster collaboration and synergy within our team to deliver comprehensive solutions that benefit our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Credentials */}
      <section className="py-24 bg-[#1B3A5F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-[#D4AF37] mb-4">PROFESSIONAL EXCELLENCE</p>
              <h2 className="text-5xl font-bold text-white mb-6">Qualified & Registered Professionals</h2>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Our team comprises qualified accountants and consultants who are registered with the Swaziland Institute of Accountants (SIA).
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                This accreditation ensures that we maintain the highest professional standards, adhere to ethical guidelines, and stay current with industry best practices and regulatory requirements.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <i className="ri-verified-badge-line text-white text-3xl w-8 h-8 flex items-center justify-center"></i>
                </div>
                <div>
                  <p className="text-white font-bold text-lg whitespace-nowrap">SIA Registered</p>
                  <p className="text-white/70 text-sm">Swaziland Institute of Accountants</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-[500px]">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20accountant%20team%20with%20certifications%20and%20credentials%20working%20in%20modern%20office%2C%20diverse%20business%20professionals%20with%20financial%20documents%20and%20technology%2C%20corporate%20photography%20showing%20expertise%20and%20professionalism%20with%20navy%20blue%20and%20gold%20accents&width=800&height=800&seq=prosca-team-credentials&orientation=squarish" 
                alt="Professional Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#D4AF37] mb-4">OUR COMMITMENT</p>
            <h2 className="text-5xl font-bold text-[#1B3A5F] mb-4">Why Businesses Trust Prosca</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine professional expertise with personalized service to deliver solutions that truly make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#FFF8E7] rounded-lg flex items-center justify-center">
                  <i className="ri-user-settings-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1B3A5F] mb-3">Tailor-Made Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand that every business is unique. Our services are customized to meet your specific needs, challenges, and objectives, ensuring maximum relevance and impact.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#FFF8E7] rounded-lg flex items-center justify-center">
                  <i className="ri-award-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1B3A5F] mb-3">Qualified Professionals</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team consists of SIA-registered accountants and consultants with proven expertise, ensuring you receive advice and services from qualified professionals.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#FFF8E7] rounded-lg flex items-center justify-center">
                  <i className="ri-checkbox-circle-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1B3A5F] mb-3">Quality Assurance</h3>
                <p className="text-gray-600 leading-relaxed">
                  We implement rigorous quality control processes and maintain strict compliance with professional standards, ensuring accuracy and reliability in all our deliverables.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#FFF8E7] rounded-lg flex items-center justify-center">
                  <i className="ri-computer-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1B3A5F] mb-3">Latest Technology</h3>
                <p className="text-gray-600 leading-relaxed">
                  We leverage cutting-edge accounting software and management tools to deliver efficient, accurate, and timely services that keep your business ahead.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#FFF8E7] rounded-lg flex items-center justify-center">
                  <i className="ri-handshake-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1B3A5F] mb-3">Strong Client Partnerships</h3>
                <p className="text-gray-600 leading-relaxed">
                  We build long-term relationships based on trust, transparency, and mutual success. Your growth is our priority, and we're committed to supporting you every step of the way.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#FFF8E7] rounded-lg flex items-center justify-center">
                  <i className="ri-flag-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1B3A5F] mb-3">100% Swazi-Owned</h3>
                <p className="text-gray-600 leading-relaxed">
                  As a locally-owned business, we understand the unique challenges and opportunities in the Eswatini market, providing insights and solutions that are truly relevant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1B3A5F] to-[#2C5F7F]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Let's discuss how we can help your business achieve its financial and operational goals.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link to="/contact" className="bg-[#D4AF37] text-white px-10 py-4 rounded-lg hover:bg-[#C19B2E] transition-all shadow-lg hover:shadow-xl text-base font-semibold whitespace-nowrap cursor-pointer">
              Get in Touch
            </Link>
            <Link to="/services" className="bg-white text-[#1B3A5F] px-10 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-lg text-base font-semibold whitespace-nowrap cursor-pointer">
              Explore Services
            </Link>
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
