import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ServicesPage() {
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
            <Link to="/about" className="text-white hover:text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">About</Link>
            <Link to="/services" className="text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Services</Link>
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
              <i className="ri-service-line text-[#D4AF37] w-5 h-5 flex items-center justify-center"></i>
              <span className="text-white text-sm font-medium whitespace-nowrap">Our Services</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Comprehensive Business Solutions
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              From business consulting to accounting and tax services, we provide integrated solutions designed to drive growth and ensure compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Business Consulting Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="rounded-3xl overflow-hidden h-[500px]">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20business%20consulting%20meeting%20with%20executives%20discussing%20corporate%20strategy%20and%20business%20advisory%20services%2C%20modern%20boardroom%20with%20financial%20charts%20and%20presentations%2C%20clean%20corporate%20photography%20with%20navy%20blue%20and%20gold%20tones%20showing%20expertise%20and%20professionalism&width=800&height=800&seq=prosca-consulting-services&orientation=squarish" 
                alt="Business Consulting" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="w-16 h-16 bg-[#FFF8E7] rounded-full flex items-center justify-center mb-6">
                <i className="ri-briefcase-line text-[#1B3A5F] text-3xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h2 className="text-5xl font-bold text-[#1B3A5F] mb-6">Business Consulting</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our business consulting services help organizations navigate challenges, seize opportunities, and achieve sustainable growth through strategic guidance and expert advice.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <i className="ri-arrow-right-circle-fill text-[#D4AF37] text-2xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h3 className="text-xl font-bold text-[#1B3A5F] mb-2">Business Advisory</h3>
                    <p className="text-gray-600">Strategic guidance on business operations, growth strategies, and organizational development.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <i className="ri-arrow-right-circle-fill text-[#D4AF37] text-2xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h3 className="text-xl font-bold text-[#1B3A5F] mb-2">Risk Assessment</h3>
                    <p className="text-gray-600">Comprehensive risk analysis and management strategies to protect your business interests.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <i className="ri-arrow-right-circle-fill text-[#D4AF37] text-2xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h3 className="text-xl font-bold text-[#1B3A5F] mb-2">Corporate Governance</h3>
                    <p className="text-gray-600">Establishing robust governance frameworks and compliance structures for your organization.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <i className="ri-arrow-right-circle-fill text-[#D4AF37] text-2xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h3 className="text-xl font-bold text-[#1B3A5F] mb-2">Training & Development</h3>
                    <p className="text-gray-600">Customized training programs to enhance skills and capabilities across your organization.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <i className="ri-arrow-right-circle-fill text-[#D4AF37] text-2xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h3 className="text-xl font-bold text-[#1B3A5F] mb-2">Management Tools and Strategy</h3>
                    <p className="text-gray-600">Implementation of effective management systems and strategic planning frameworks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accounting & Tax Services */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="w-16 h-16 bg-[#FFF8E7] rounded-full flex items-center justify-center mb-6">
                <i className="ri-calculator-line text-[#1B3A5F] text-3xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h2 className="text-5xl font-bold text-[#1B3A5F] mb-6">Accounting & Tax Services</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our comprehensive accounting and tax services ensure your financial records are accurate, compliant, and optimized for business success.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <i className="ri-arrow-right-circle-fill text-[#D4AF37] text-2xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h3 className="text-xl font-bold text-[#1B3A5F] mb-2">Financial Statements</h3>
                    <p className="text-gray-600">Preparation of accurate and compliant financial statements for internal and external reporting.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <i className="ri-arrow-right-circle-fill text-[#D4AF37] text-2xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h3 className="text-xl font-bold text-[#1B3A5F] mb-2">Bookkeeping</h3>
                    <p className="text-gray-600">Professional bookkeeping services to maintain accurate and up-to-date financial records.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <i className="ri-arrow-right-circle-fill text-[#D4AF37] text-2xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h3 className="text-xl font-bold text-[#1B3A5F] mb-2">Tax Services</h3>
                    <p className="text-gray-600">Comprehensive tax planning, preparation, and compliance services to optimize your tax position.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <i className="ri-arrow-right-circle-fill text-[#D4AF37] text-2xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h3 className="text-xl font-bold text-[#1B3A5F] mb-2">Financial Reporting</h3>
                    <p className="text-gray-600">Detailed financial analysis and reporting to support informed business decision-making.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <i className="ri-arrow-right-circle-fill text-[#D4AF37] text-2xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h3 className="text-xl font-bold text-[#1B3A5F] mb-2">Outsourced Accounting</h3>
                    <p className="text-gray-600">Complete accounting function outsourcing for cost-effective financial management.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-[500px] order-1 md:order-2">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20accountant%20working%20with%20financial%20documents%20and%20calculator%20in%20modern%20office%2C%20tax%20preparation%20and%20bookkeeping%20services%2C%20clean%20corporate%20photography%20with%20organized%20workspace%20showing%20attention%20to%20detail%20with%20navy%20blue%20and%20gold%20color%20scheme&width=800&height=800&seq=prosca-accounting-services&orientation=squarish" 
                alt="Accounting Services" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#D4AF37] mb-4">WHAT SETS US APART</p>
            <h2 className="text-5xl font-bold text-[#1B3A5F] mb-4">Our Service Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver services that are tailored, professional, and results-oriented.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#1B3A5F] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-user-star-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3A5F] mb-4">Client-Centric</h3>
              <p className="text-gray-600 leading-relaxed">
                Every service is customized to meet your unique business needs and objectives, ensuring maximum relevance and value.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#1B3A5F] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3A5F] mb-4">Compliance-Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                We ensure all services meet regulatory requirements and professional standards, protecting your business interests.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#1B3A5F] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-line-chart-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3A5F] mb-4">Results-Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                Our focus is on delivering measurable outcomes that contribute to your business growth and success.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#1B3A5F] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-time-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3A5F] mb-4">Timely Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                We respect deadlines and ensure all deliverables are completed on time without compromising quality.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#1B3A5F] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-computer-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3A5F] mb-4">Technology-Enabled</h3>
              <p className="text-gray-600 leading-relaxed">
                We leverage the latest software and tools to deliver efficient, accurate, and secure services.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#1B3A5F] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-customer-service-2-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3A5F] mb-4">Ongoing Support</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide continuous support and guidance, ensuring you have expert assistance whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1B3A5F] to-[#2C5F7F]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Contact us today to discuss your business needs and discover how our services can help you achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <a href="/#contact" className="bg-[#D4AF37] text-white px-10 py-4 rounded-lg hover:bg-[#C19B2E] transition-all shadow-lg hover:shadow-xl text-base font-semibold whitespace-nowrap cursor-pointer">
              Request Consultation
            </a>
            <Link to="/pricing" className="bg-white text-[#1B3A5F] px-10 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-lg text-base font-semibold whitespace-nowrap cursor-pointer">
              View Pricing
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
                <li className="text-white/70 text-sm">Eswatini (Swaziland)</li>
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
