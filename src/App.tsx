import './index.css';
import ChatWidget from './components/ChatWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-blue-50">
      {/* Navbar with solar gradient */}
      <nav className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-4xl">☀️</span>
              <h1 className="text-2xl font-bold text-gray-900">SunEdge Power</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-white font-medium transition">Home</a>
              <a href="#about" className="text-gray-900 hover:text-white font-medium transition">About</a>
              <a href="#services" className="text-gray-900 hover:text-white font-medium transition">Services</a>
              <a href="#contact" className="text-gray-900 hover:text-white font-medium transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section with vibrant gradient */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-8xl animate-pulse">🌞</span>
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent mb-6">
              Power Your Home with the Sun
            </h1>
            <p className="text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              SunEdge Power helps homeowners <span className="font-bold text-green-600">save money</span> and <span className="font-bold text-blue-600">go green</span> with professional solar panel installations.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:from-orange-600 hover:to-yellow-600 transition transform hover:scale-105 shadow-xl">
                ⚡ Get Free Quote
              </button>
              <button className="bg-white border-4 border-orange-500 text-orange-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-orange-50 transition transform hover:scale-105 shadow-lg">
                📞 Call Us Now
              </button>
            </div>
          </div>

          {/* Feature Cards with solar colors */}
          <div className="mt-24 grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-3">Lower Electric Bills</h3>
              <p className="text-green-50 text-lg">Save $100-$200+ per month on electricity with solar power.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold text-white mb-3">30% Federal Tax Credit</h3>
              <p className="text-blue-50 text-lg">Get thousands back with the federal solar tax incentive.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-400 to-yellow-500 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-white mb-3">Increase Home Value</h3>
              <p className="text-orange-50 text-lg">Solar panels add significant value to your property.</p>
            </div>
          </div>

          {/* Why Solar Section */}
          <div className="mt-32 bg-white rounded-3xl shadow-2xl p-12">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Why Choose Solar Energy?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🌍</span>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Eco-Friendly</h4>
                  <p className="text-gray-600">Reduce your carbon footprint and help save the planet for future generations.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-4xl">⚡</span>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Energy Independence</h4>
                  <p className="text-gray-600">Generate your own clean energy and reduce reliance on the grid.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-4xl">💡</span>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Smart Investment</h4>
                  <p className="text-gray-600">Solar panels pay for themselves in 6-10 years with decades of free energy.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-4xl">🛡️</span>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Proven Technology</h4>
                  <p className="text-gray-600">25-year warranties on panels with minimal maintenance required.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-32">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              What Our Customers Say ⭐⭐⭐⭐⭐
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 italic mb-4">"Our electric bill went from $250/month to just $40! Best investment we've ever made."</p>
                <p className="font-bold text-orange-700">- Sarah M., Phoenix AZ</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 italic mb-4">"Professional installation, great communication. Highly recommend SunEdge Power!"</p>
                <p className="font-bold text-blue-700">- James L., Tucson AZ</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 italic mb-4">"The federal tax credit made it so affordable. Our panels paid for themselves in 7 years."</p>
                <p className="font-bold text-green-700">- Maria G., Scottsdale AZ</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-32 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-3xl p-16 text-center shadow-2xl">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Go Solar?</h2>
            <p className="text-2xl text-orange-50 mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote today. Join thousands of homeowners saving money with solar!
            </p>
            <button className="bg-white text-orange-600 px-12 py-5 rounded-full text-2xl font-bold hover:bg-orange-50 transition transform hover:scale-110 shadow-xl">
              🌟 Get Your Free Quote Now
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="text-5xl">☀️</span>
          </div>
          <p className="text-xl font-semibold mb-2">SunEdge Power</p>
          <p className="text-gray-400">Your Partner in Clean Energy Solutions</p>
          <p className="text-gray-500 mt-6">&copy; 2024 SunEdge Power. All rights reserved.</p>
        </div>
      </footer>

      {/* AI Chat Widget */}
      <ChatWidget />
    </div>
  );
}
