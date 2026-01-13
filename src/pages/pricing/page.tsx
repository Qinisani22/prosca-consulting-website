import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function PricingPage() {
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
            <Link to="/services" className="text-white hover:text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Services</Link>
            <Link to="/pricing" className="text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Pricing</Link>
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
              <i className="ri-price-tag-3-line text-[#D4AF37] w-5 h-5 flex items-center justify-center"></i>
              <span className="text-white text-sm font-medium whitespace-nowrap">Transparent Pricing</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-4">
              Investment Packages
            </h1>
            <p className="text-3xl italic text-[#D4AF37] mb-6 font-serif">Quality Over Cheap Pricing</p>
            <p className="text-xl text-white/90 leading-relaxed">
              Choose the accounting package that best fits your business needs. All packages include professional service from SIA-registered accountants.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-24 bg-gradient-to-b from-[#FFF8E7] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Silver Package */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
              <div className="border-t-8 border-gray-400 rounded-t-3xl p-10">
                <h3 className="text-3xl font-bold text-[#1B3A5F] mb-2">Silver</h3>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-8">MONTHLY</p>
                
                <div className="text-center py-8">
                  <div className="text-6xl font-bold text-[#1B3A5F] mb-2">R2,750</div>
                  <div className="text-lg text-gray-500">/month</div>
                </div>

                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Basic bookkeeping services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Monthly financial statements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Bank reconciliation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">VAT returns preparation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Email support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Up to 50 transactions/month</span>
                  </li>
                </ul>

                <a href="/#contact" className="block w-full bg-[#1B3A5F] text-white py-4 rounded-xl hover:bg-[#152E4A] transition-colors text-center font-semibold whitespace-nowrap cursor-pointer">
                  Choose Plan
                </a>
              </div>
            </div>

            {/* Gold Package */}
            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 relative">
              <div className="absolute -top-4 right-6 bg-[#D4AF37] text-white px-4 py-2 rounded-full text-xs font-bold transform rotate-3 whitespace-nowrap">
                MOST POPULAR
              </div>
              <div className="border-t-8 border-[#D4AF37] rounded-t-3xl p-10">
                <h3 className="text-3xl font-bold text-[#1B3A5F] mb-2">Gold</h3>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-8">MONTHLY</p>
                
                <div className="text-center py-8">
                  <div className="text-6xl font-bold text-[#1B3A5F] mb-2">R4,350</div>
                  <div className="text-lg text-gray-500">/month</div>
                </div>

                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">All Silver features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Payroll processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Quarterly management reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Tax planning consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Phone & email support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Up to 150 transactions/month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Annual financial statements</span>
                  </li>
                </ul>

                <a href="/#contact" className="block w-full bg-[#1B3A5F] text-white py-4 rounded-xl hover:bg-[#152E4A] transition-colors text-center font-semibold whitespace-nowrap cursor-pointer">
                  Choose Plan
                </a>
              </div>
            </div>

            {/* Diamond Package */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
              <div className="border-t-8 border-[#4A90E2] rounded-t-3xl p-10">
                <h3 className="text-3xl font-bold text-[#1B3A5F] mb-2">Diamond</h3>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-8">MONTHLY</p>
                
                <div className="text-center py-8">
                  <div className="text-6xl font-bold text-[#1B3A5F] mb-2">R10,200</div>
                  <div className="text-lg text-gray-500">/month</div>
                </div>

                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">All Gold features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Monthly management meetings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Budget & forecast preparation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Cash flow management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Up to 300 transactions/month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Business advisory services</span>
                  </li>
                </ul>

                <a href="/#contact" className="block w-full bg-[#D4AF37] text-white py-4 rounded-xl hover:bg-[#C19B2E] transition-colors text-center font-semibold whitespace-nowrap cursor-pointer">
                  Choose Plan
                </a>
              </div>
            </div>

            {/* Platinum Package */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
              <div className="border-t-8 border-[#9B59B6] rounded-t-3xl p-10">
                <h3 className="text-3xl font-bold text-[#1B3A5F] mb-2">Platinum</h3>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-8">MONTHLY</p>
                
                <div className="text-center py-8">
                  <div className="text-6xl font-bold text-[#1B3A5F] mb-2">R16,000</div>
                  <div className="text-lg text-gray-500">/month</div>
                </div>

                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">All Diamond features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Full outsourced CFO services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Strategic financial planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Risk assessment & mitigation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Board meeting attendance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">24/7 priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Unlimited transactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Custom reporting & analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-600">Corporate governance support</span>
                  </li>
                </ul>

                <a href="/#contact" className="block w-full bg-[#D4AF37] text-white py-4 rounded-xl hover:bg-[#C19B2E] transition-colors text-center font-semibold whitespace-nowrap cursor-pointer">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#D4AF37] mb-4">OUR COMMITMENT</p>
            <h2 className="text-5xl font-bold text-[#1B3A5F] mb-4">Quality Over Cheap Pricing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in delivering exceptional value through professional expertise, not competing on price alone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFF8E7] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line text-[#D4AF37] text-4xl w-10 h-10 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3A5F] mb-4">Professional Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                All services delivered by SIA-registered accountants with proven expertise and credentials.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFF8E7] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-[#D4AF37] text-4xl w-10 h-10 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3A5F] mb-4">Compliance Assurance</h3>
              <p className="text-gray-600 leading-relaxed">
                Rigorous quality control and adherence to professional standards protect your business interests.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFF8E7] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-line-chart-line text-[#D4AF37] text-4xl w-10 h-10 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B3A5F] mb-4">Long-Term Value</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic insights and proactive guidance that contribute to sustainable business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#D4AF37] mb-4">COMMON QUESTIONS</p>
            <h2 className="text-5xl font-bold text-[#1B3A5F] mb-4">Pricing FAQs</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#1B3A5F] mb-3">Can I upgrade or downgrade my package?</h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, you can change your package at any time. We'll work with you to ensure a smooth transition that meets your evolving business needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#1B3A5F] mb-3">Are there any setup fees?</h3>
              <p className="text-gray-600 leading-relaxed">
                Setup fees vary depending on the complexity of your existing financial records. We'll provide a transparent quote during our initial consultation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#1B3A5F] mb-3">What if I exceed my transaction limit?</h3>
              <p className="text-gray-600 leading-relaxed">
                Additional transactions are billed at a reasonable per-transaction rate, or we can recommend upgrading to a package that better suits your volume.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#1B3A5F] mb-3">Do you offer custom packages?</h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely. If none of our standard packages fit your needs, we can create a tailored solution specifically for your business requirements.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#1B3A5F] mb-3">What payment terms do you offer?</h3>
              <p className="text-gray-600 leading-relaxed">
                We offer flexible monthly billing with various payment options. Long-term contracts may qualify for discounted rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1B3A5F] to-[#2C5F7F]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Choose Your Package?</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Contact us today to discuss which package is right for your business, or to create a custom solution.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <a href="/#contact" className="bg-[#D4AF37] text-white px-10 py-4 rounded-lg hover:bg-[#C19B2E] transition-all shadow-lg hover:shadow-xl text-base font-semibold whitespace-nowrap cursor-pointer">
              Request Consultation
            </a>
            <Link to="/services" className="bg-white text-[#1B3A5F] px-10 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-lg text-base font-semibold whitespace-nowrap cursor-pointer">
              View Services
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
