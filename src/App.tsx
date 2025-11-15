import { useState } from 'react';
import './index.css';
import QuoteForm from './components/QuoteForm';

export default function App() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Navigation */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-amber-400">
                SunEdge Power
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition font-medium">About</a>
              <a href="#capabilities" className="text-gray-300 hover:text-white transition font-medium">Capabilities</a>
              <a href="#services" className="text-gray-300 hover:text-white transition font-medium">Services</a>
              <a href="#industries" className="text-gray-300 hover:text-white transition font-medium">Industries</a>
              <button
                onClick={() => setIsQuoteFormOpen(true)}
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3 rounded-lg font-bold transition transform hover:scale-105"
              >
                Partner With Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-700">
              <a href="#about" className="block py-3 text-gray-300 hover:text-white transition">About</a>
              <a href="#capabilities" className="block py-3 text-gray-300 hover:text-white transition">Capabilities</a>
              <a href="#services" className="block py-3 text-gray-300 hover:text-white transition">Services</a>
              <a href="#industries" className="block py-3 text-gray-300 hover:text-white transition">Industries</a>
              <button
                onClick={() => { setIsQuoteFormOpen(true); setIsMobileMenuOpen(false); }}
                className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3 rounded-lg font-bold transition"
              >
                Partner With Us
              </button>
            </div>
          )}
        </div>
      </nav>

      <main>
        {/* Hero Section - Enterprise C&I Positioning */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcn4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
            <div className="text-center">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-semibold tracking-wide">
                  LICENSED, BONDED & INSURED • CLASS A GENERAL CONTRACTOR
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Florida's Premier
                <span className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                  Commercial & Industrial
                </span>
                Solar Installation Partner
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                19 years of construction excellence. 500+ projects deployed. 15+ MW of commercial solar capacity across Florida.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => setIsQuoteFormOpen(true)}
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg text-lg font-bold transition transform hover:scale-105 shadow-2xl"
                >
                  Become a Partner
                </button>
                <a
                  href="#capabilities"
                  className="w-full sm:w-auto bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition transform hover:scale-105 border border-slate-600"
                >
                  View Capabilities
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="bg-white py-12 sm:py-16 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-amber-600 mb-2">500+</div>
                <div className="text-sm sm:text-base text-gray-600 font-semibold">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-cyan-600 mb-2">15+ MW</div>
                <div className="text-sm sm:text-base text-gray-600 font-semibold">Solar Capacity Installed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-slate-700 mb-2">19 Years</div>
                <div className="text-sm sm:text-base text-gray-600 font-semibold">Industry Experience</div>
              </div>
              <div className="text-center col-span-2 lg:col-span-1">
                <div className="text-4xl sm:text-5xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-sm sm:text-base text-gray-600 font-semibold">Licensed & Insured</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="bg-slate-50 py-12 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-lg sm:text-xl text-gray-600 font-semibold mb-6">
              Trusted Installation Partner for Leading Solar Companies & EPCs
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="text-2xl font-bold">CLIENT LOGOS</div>
              <div className="text-2xl font-bold">TO BE ADDED</div>
              <div className="text-2xl font-bold">HERE</div>
            </div>
          </div>
        </div>

        {/* Capabilities - Our Competitive Edge */}
        <div id="capabilities" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                What Sets SunEdge Apart
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Two decades of construction expertise combined with cutting-edge solar installation capabilities
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 sm:p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition">
                <div className="w-14 h-14 bg-amber-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Advanced Equipment</h3>
                <p className="text-gray-600 leading-relaxed">
                  State-of-the-art drilling equipment purpose-built for commercial ground-mount installations. Superior efficiency and safety on complex projects.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-100 p-6 sm:p-8 rounded-2xl border border-cyan-200 hover:shadow-xl transition">
                <div className="w-14 h-14 bg-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Florida Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deep understanding of Florida's regulatory landscape, permitting frameworks, and utility interconnection protocols. Accelerated timelines.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 sm:p-8 rounded-2xl border border-green-200 hover:shadow-xl transition">
                <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Partnership Model</h3>
                <p className="text-gray-600 leading-relaxed">
                  Flexible collaboration framework for solar companies, EPCs, and roofing contractors. Leverage our installation expertise while you focus on sales.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 sm:p-8 rounded-2xl border border-purple-200 hover:shadow-xl transition">
                <div className="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Detach & Reset</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive D&R services for solar arrays during roof replacement. Seamless collaboration with roofing contractors and property owners.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div id="about" className="bg-slate-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Leadership Team
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Decades of combined expertise in construction, solar installation, and commercial project management
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Ron McCabe */}
              <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border-2 border-amber-200">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-5xl text-white font-bold">R</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Ron McCabe</h3>
                    <p className="text-amber-600 font-bold text-lg">Managing Member & Partner</p>
                    <p className="text-gray-600">Founder (Since 2006)</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                  <p>
                    As founder and managing member of SunEdge Power, Ron McCabe has been driving the company's vision since 2006.
                    Holding a <span className="font-bold text-amber-600">Class "A" General Contractor license</span>, Ron transitioned
                    his extensive construction background—spanning residential and commercial building as well as specialized sinkhole
                    remediation—into the emerging solar industry.
                  </p>
                  <p>
                    His comprehensive grasp of construction fundamentals, combined with hands-on experience in heavy equipment operations,
                    gives SunEdge Power a distinct competitive edge when executing sophisticated solar installations throughout Florida.
                  </p>
                  <p className="font-semibold text-slate-900">
                    Ron spearheads business development initiatives and strategic alliance formation while maintaining oversight of all
                    operational elements, from initial site development through final system commissioning.
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap mt-6">
                  <span className="bg-amber-100 text-amber-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold">Class A Contractor</span>
                  <span className="bg-blue-100 text-blue-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold">19+ Years</span>
                  <span className="bg-green-100 text-green-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold">Founder</span>
                  <span className="bg-purple-100 text-purple-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold">Construction Expert</span>
                </div>
              </div>

              {/* Kyle Amundsen */}
              <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border-2 border-cyan-200">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-5xl text-white font-bold">K</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Kyle Amundsen</h3>
                    <p className="text-cyan-600 font-bold text-lg">Partner & Solar Operations Director</p>
                    <p className="text-gray-600">Since 2017</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                  <p>
                    Kyle Amundsen brings battle-tested solar industry leadership to SunEdge Power, with a portfolio spanning
                    <span className="font-bold text-cyan-600"> residential installations, commercial-scale projects, and utility-grade deployments</span>.
                    Since entering the solar sector in 2017, Kyle has built a reputation as a forward-thinking leader within Florida's renewable energy community.
                  </p>
                  <p>
                    His comprehensive understanding of system engineering, installation best practices, and project execution strategies
                    delivers exceptional value to both the company and its strategic partners.
                  </p>
                  <p className="font-semibold text-slate-900">
                    As Director of Solar Operations, Kyle manages the full scope of solar activities, with particular emphasis on complex
                    commercial installations and microgrid solutions, while also directing specialized ground-mount drilling operations.
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap mt-6">
                  <span className="bg-cyan-100 text-cyan-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold">Solar Operations</span>
                  <span className="bg-amber-100 text-amber-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold">8+ Years</span>
                  <span className="bg-green-100 text-green-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold">Commercial Expert</span>
                  <span className="bg-purple-100 text-purple-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold">Microgrid Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div id="services" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Comprehensive C&I Solar Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Full-spectrum installation capabilities for commercial, industrial, and utility-scale solar projects
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 sm:p-8 rounded-2xl border-2 border-amber-200 hover:shadow-xl transition">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-amber-700">Commercial Solar</h3>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span>Custom system architecture for commercial properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span>Rooftop and ground-based installation expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span>Purpose-built equipment for efficient deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span>Complete permitting and utility coordination</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 sm:p-8 rounded-2xl border-2 border-green-200 hover:shadow-xl transition">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-green-700">Ground Mount Systems</h3>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span>Precision drilling for diverse Florida soil conditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span>Hurricane-rated mounting infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span>Strategic panel positioning for maximum generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span>Full site preparation and system integration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 sm:p-8 rounded-2xl border-2 border-cyan-200 hover:shadow-xl transition">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-cyan-700">Microgrid Solutions</h3>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span>Complex commercial microgrid installations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span>Battery storage system integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span>Utility-grade deployment experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span>Advanced monitoring and optimization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 sm:p-8 rounded-2xl border-2 border-purple-200 hover:shadow-xl transition">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-purple-700">Detach & Reset (D&R)</h3>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span>Professional solar array removal for roof work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span>Secure component storage and protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span>Seamless roofing contractor collaboration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span>Expert reinstallation with full system validation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Served */}
        <div id="industries" className="bg-slate-900 text-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized installation expertise across diverse commercial and industrial sectors
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="bg-slate-800 p-6 rounded-xl text-center hover:bg-slate-700 transition">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg font-bold mb-2">Commercial</h3>
                <p className="text-sm text-gray-400">Office buildings, retail centers, warehouses</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl text-center hover:bg-slate-700 transition">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-lg font-bold mb-2">Industrial</h3>
                <p className="text-sm text-gray-400">Manufacturing facilities, distribution centers</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl text-center hover:bg-slate-700 transition">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-bold mb-2">Utility-Scale</h3>
                <p className="text-sm text-gray-400">Large-scale solar farms, utility deployments</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl text-center hover:bg-slate-700 transition">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-lg font-bold mb-2">Municipal</h3>
                <p className="text-sm text-gray-400">Government buildings, public infrastructure</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Ready to Partner with Florida's Best?
            </h2>
            <p className="text-lg sm:text-xl text-slate-800 mb-10 max-w-2xl mx-auto">
              Whether you're an EPC, solar company, or roofing contractor, SunEdge Power provides the installation expertise
              and operational excellence your projects demand.
            </p>
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-lg text-lg sm:text-xl font-bold transition transform hover:scale-105 shadow-2xl"
            >
              Discuss Partnership Opportunities
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-amber-400">
              SunEdge Power
            </h2>
            <p className="text-gray-400 mb-2">Florida's Premier C&I Solar Installation Partner</p>
            <p className="text-gray-500 text-sm">&copy; 2024 SunEdge Power. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">Licensed, Bonded & Insured • Class A General Contractor</p>
          </div>
        </div>
      </footer>

      {/* Quote Form Modal */}
      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
    </div>
  );
}
