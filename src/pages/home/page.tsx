import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
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

      const response = await fetch('https://readdy.ai/api/form/d5f2i12llb01bjs85kb0', {
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
          service: '',
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1B3A5F] shadow-lg' : 'bg-transparent'}`}>
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
            <Link to="/contact" className="text-white hover:text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Contact</Link>
            <a href="#contact" className="bg-[#D4AF37] text-white px-6 py-3 rounded-lg hover:bg-[#C19B2E] transition-colors text-sm font-semibold whitespace-nowrap">Request Consultation</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=professional%20business%20consulting%20team%20meeting%20in%20modern%20corporate%20office%20with%20diverse%20professionals%20discussing%20financial%20strategies%20and%20business%20plans%2C%20clean%20minimalist%20background%20with%20natural%20lighting%20creating%20trustworthy%20atmosphere%2C%20high-end%20corporate%20photography%20style%20with%20navy%20blue%20and%20gold%20color%20tones&width=1920&height=1080&seq=hero-prosca-main&orientation=landscape" 
            alt="Professional Business Consulting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A5F]/95 via-[#1B3A5F]/80 to-[#1B3A5F]/40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
              <i className="ri-shield-check-line text-[#D4AF37] w-5 h-5 flex items-center justify-center"></i>
              <span className="text-white text-sm font-medium whitespace-nowrap">Est. 2014 | 100% Swazi-Owned</span>
            </div>
            
            <h1 className="text-7xl font-bold text-white mb-4 leading-tight">
              Competitive Financial Services
            </h1>
            <h2 className="text-5xl font-medium text-white mb-3">
              and Management Solutions
            </h2>
            <h2 className="text-5xl italic text-[#D4AF37] mb-8 font-serif">
              That Add Value.
            </h2>
            
            <p className="text-xl text-white/90 mb-4 leading-relaxed max-w-2xl">
              Prosca Consulting delivers comprehensive business consulting, accounting, and tax services tailored to your organization's unique needs.
            </p>
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl">
              Partner with qualified professionals registered with the Swaziland Institute of Accountants.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <a href="#contact" className="bg-[#1B3A5F] text-white px-8 py-4 rounded-lg hover:bg-[#152E4A] transition-all shadow-lg hover:shadow-xl flex items-center gap-3 text-base font-semibold whitespace-nowrap cursor-pointer">
                Request Consultation
                <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center"></i>
              </a>
              <Link to="/services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#1B3A5F] transition-all flex items-center gap-2 text-base font-semibold whitespace-nowrap">
                View Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="bg-[#F8F9FA] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">OUR EXPERTISE</p>
            <h2 className="text-5xl font-bold text-[#1B3A5F] mb-4">Comprehensive Business Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide integrated consulting and accounting services designed to drive growth and ensure compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Business Consulting Card */}
            <div className="bg-white rounded-3xl p-14 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FFF8E7] rounded-full flex items-center justify-center mb-6">
                <i className="ri-briefcase-line text-[#1B3A5F] text-3xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-3xl font-bold text-[#1B3A5F] mb-6">Business Consulting</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-gray-600">
                  <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <span>Business Advisory Services</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <span>Risk Assessment & Management</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <span>Corporate Governance</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <span>Training & Development Programs</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <span>Management Tools and Strategy</span>
                </li>
              </ul>
              <Link to="/services" className="text-[#D4AF37] hover:text-[#C19B2E] font-semibold inline-flex items-center gap-2 whitespace-nowrap cursor-pointer">
                Learn More
                <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
              </Link>
            </div>

            {/* Accounting & Tax Card */}
            <div className="bg-white rounded-3xl p-14 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FFF8E7] rounded-full flex items-center justify-center mb-6">
                <i className="ri-calculator-line text-[#1B3A5F] text-3xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-3xl font-bold text-[#1B3A5F] mb-6">Accounting & Tax Services</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-gray-600">
                  <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <span>Financial Statements Preparation</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <span>Bookkeeping Services</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <span>Tax Services & Compliance</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <span>Financial Reporting</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <i className="ri-check-line text-[#D4AF37] text-xl mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <span>Outsourced Accounting Solutions</span>
                </li>
              </ul>
              <Link to="/services" className="text-[#D4AF37] hover:text-[#C19B2E] font-semibold inline-flex items-center gap-2 whitespace-nowrap cursor-pointer">
                Learn More
                <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-[#1B3A5F] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <p className="text-xs uppercase tracking-widest text-[#D4AF37] mb-4">OUR VALUES</p>
              <h2 className="text-5xl font-bold text-white mb-3">Built on Trust</h2>
              <h2 className="text-5xl font-light italic text-white mb-6">and Integrity</h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-md">
                Our core values guide every decision we make and every service we deliver to our clients.
              </p>
            </div>

            <div className="md:col-span-3 grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <i className="ri-shield-check-line text-[#D4AF37] text-4xl mb-4 w-8 h-8 flex items-center justify-center"></i>
                <h3 className="text-xl font-bold text-white mb-2 whitespace-nowrap">Honesty & Integrity</h3>
                <p className="text-sm text-white/70">Transparent and ethical in all our dealings</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <i className="ri-customer-service-2-line text-[#D4AF37] text-4xl mb-4 w-8 h-8 flex items-center justify-center"></i>
                <h3 className="text-xl font-bold text-white mb-2 whitespace-nowrap">Service Delivery</h3>
                <p className="text-sm text-white/70">Committed to excellence in every project</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <i className="ri-message-3-line text-[#D4AF37] text-4xl mb-4 w-8 h-8 flex items-center justify-center"></i>
                <h3 className="text-xl font-bold text-white mb-2 whitespace-nowrap">Reliable Communication</h3>
                <p className="text-sm text-white/70">Clear and consistent client engagement</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <i className="ri-lightbulb-line text-[#D4AF37] text-4xl mb-4 w-8 h-8 flex items-center justify-center"></i>
                <h3 className="text-xl font-bold text-white mb-2 whitespace-nowrap">Quality & Innovation</h3>
                <p className="text-sm text-white/70">Leveraging latest technology and best practices</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <i className="ri-hand-heart-line text-[#D4AF37] text-4xl mb-4 w-8 h-8 flex items-center justify-center"></i>
                <h3 className="text-xl font-bold text-white mb-2 whitespace-nowrap">Ownership & Responsibility</h3>
                <p className="text-sm text-white/70">Accountable for results and outcomes</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <i className="ri-money-dollar-circle-line text-[#D4AF37] text-4xl mb-4 w-8 h-8 flex items-center justify-center"></i>
                <h3 className="text-xl font-bold text-white mb-2 whitespace-nowrap">Value for Money</h3>
                <p className="text-sm text-white/70">Quality services at competitive rates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-16 items-center">
            <div className="md:col-span-3">
              <div className="inline-block bg-gray-100 text-[#1B3A5F] px-4 py-2 rounded-full text-sm font-semibold mb-6 whitespace-nowrap">
                ABOUT PROSCA
              </div>
              <h2 className="text-6xl font-bold text-[#1B3A5F] mb-2">Your Trusted Partner</h2>
              <h2 className="text-6xl font-medium text-[#1B3A5F] mb-2">in Financial Excellence</h2>
              <h2 className="text-6xl italic text-[#D4AF37] mb-10 font-serif">Since 2014</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Prosca Consulting (Pty) Ltd is a 100% Swazi-owned business consulting and accounting firm established in 2014. We specialize in providing comprehensive financial services and management solutions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team of qualified accountants and consultants are registered with the Swaziland Institute of Accountants, ensuring the highest standards of professionalism and expertise.
                </p>
              </div>

              <div className="flex flex-wrap gap-12 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-4xl font-bold text-[#1B3A5F] mb-1">10+</div>
                  <div className="text-sm text-gray-600 whitespace-nowrap">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#1B3A5F] mb-1">100%</div>
                  <div className="text-sm text-gray-600 whitespace-nowrap">Swazi-Owned</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#1B3A5F] mb-1">SIA</div>
                  <div className="text-sm text-gray-600 whitespace-nowrap">Registered</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-[#E8F5F1] rounded-3xl p-12 relative">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">ACCREDITATION</p>
                <p className="text-2xl text-[#1B3A5F] leading-relaxed font-medium mb-8">
                  "Qualified accountants and consultants registered with the Swaziland Institute of Accountants"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#1B3A5F] rounded-full flex items-center justify-center">
                    <i className="ri-verified-badge-line text-[#D4AF37] text-2xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <span className="text-sm font-semibold text-[#1B3A5F] whitespace-nowrap">SIA Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#F8F9FA] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-16 items-center">
            <div className="md:col-span-2">
              <div className="rounded-3xl overflow-hidden h-[600px] relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20accounting%20team%20working%20together%20in%20modern%20office%20environment%20with%20financial%20documents%20and%20technology%2C%20diverse%20business%20professionals%20collaborating%20on%20corporate%20strategy%2C%20clean%20corporate%20photography%20with%20navy%20blue%20and%20gold%20accents%20showing%20trust%20and%20expertise&width=800&height=1000&seq=prosca-team-photo&orientation=portrait" 
                  alt="Prosca Consulting Team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1B3A5F]/40"></div>
              </div>
            </div>

            <div className="md:col-span-3">
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">(CLIENT-FOCUSED APPROACH)</p>
              <h2 className="text-5xl font-bold text-[#1B3A5F] mb-2">Why Leading Businesses</h2>
              <h2 className="text-5xl font-medium mb-12">
                <span className="text-[#1B3A5F]">Choose </span>
                <span className="text-[#D4AF37]">Prosca</span>
              </h2>

              <div className="relative mb-10">
                <i className="ri-double-quotes-l text-8xl text-gray-200 absolute -top-6 -left-4 w-16 h-16 flex items-center justify-center"></i>
                <div className="relative pl-12">
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <i className="ri-check-double-line text-[#D4AF37] text-2xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                      <div>
                        <h3 className="text-xl font-bold text-[#1B3A5F] mb-2 whitespace-nowrap">Tailor-Made Solutions</h3>
                        <p className="text-gray-600">Customized services designed to meet your specific business needs and objectives.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <i className="ri-check-double-line text-[#D4AF37] text-2xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                      <div>
                        <h3 className="text-xl font-bold text-[#1B3A5F] mb-2 whitespace-nowrap">Qualified Professionals</h3>
                        <p className="text-gray-600">SIA-registered accountants and consultants with proven expertise and credentials.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <i className="ri-check-double-line text-[#D4AF37] text-2xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                      <div>
                        <h3 className="text-xl font-bold text-[#1B3A5F] mb-2 whitespace-nowrap">Quality Assurance</h3>
                        <p className="text-gray-600">Rigorous compliance standards and quality control processes in every engagement.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <i className="ri-check-double-line text-[#D4AF37] text-2xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                      <div>
                        <h3 className="text-xl font-bold text-[#1B3A5F] mb-2 whitespace-nowrap">Latest Technology</h3>
                        <p className="text-gray-600">Leveraging cutting-edge tools and software for efficient service delivery.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <i className="ri-check-double-line text-[#D4AF37] text-2xl mt-1 w-6 h-6 flex items-center justify-center"></i>
                      <div>
                        <h3 className="text-xl font-bold text-[#1B3A5F] mb-2 whitespace-nowrap">Strong Partnerships</h3>
                        <p className="text-gray-600">Building long-term relationships based on trust, transparency, and results.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg font-bold text-[#1B3A5F]">— Prosca Consulting Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-11 gap-12">
            {/* Form Area */}
            <div className="md:col-span-6">
              <p className="text-sm uppercase tracking-widest text-[#D4AF37] mb-4 whitespace-nowrap">LET'S TALK OUTSOURCING</p>
              <h2 className="text-5xl font-bold text-[#1B3A5F] mb-4 whitespace-nowrap">Request a Consultation</h2>
              <p className="text-lg text-gray-600 mb-10">
                Get in touch with our team to discuss how we can help your business thrive.
              </p>

              <form id="consultation-form" data-readdy-form onSubmit={handleSubmit} className="space-y-5">
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
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-base text-gray-700"
                >
                  <option value="">Service Interest</option>
                  <option value="Business Consulting">Business Consulting</option>
                  <option value="Accounting Services">Accounting Services</option>
                  <option value="Tax Services">Tax Services</option>
                  <option value="Training & Development">Training & Development</option>
                  <option value="Other">Other</option>
                </select>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  maxLength={500}
                  rows={4}
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
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] mb-8">REACH US</p>
                
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
