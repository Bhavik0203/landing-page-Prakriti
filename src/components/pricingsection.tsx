import { ArrowRight, Zap, Home, CreditCard } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
            <Zap className="w-4 h-4" />
            <span>LIMITED TIME OFFER</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            Pre-Launch
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Special Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Secure your dream property with our exclusive early-bird rates
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Rate Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Per Sqft Rate</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">₹1,199</span>
                  <div className="text-gray-400 mt-2">per square foot</div>
                </div>
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Budget Card - Featured */}
          <div className="group relative transform lg:scale-110">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur opacity-90 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-slate-800 border-2 border-yellow-400 rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-6 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              </div>
              <div className="text-center pt-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Starting Budget</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">₹15.35</span>
                  <div className="text-gray-400 mt-2">Lacs onwards</div>
                </div>
                <div className="h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Infrastructure Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Infrastructure</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">₹99K</span>
                  <div className="text-gray-400 mt-2">One-time cost</div>
                </div>
                <div className="h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Process */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-10">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Simple <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">3-Step</span> Booking
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-blue-600">
                  1
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Book Now</h4>
                <p className="text-blue-100 mb-4">Secure your plot with just</p>
                <div className="text-2xl font-black text-yellow-300">₹1 Lac</div>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-yellow-400" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-orange-600">
                  2
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Quick Payment</h4>
                <p className="text-orange-100 mb-4">Pay 20% within</p>
                <div className="text-2xl font-black text-yellow-300">15 Days</div>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-yellow-400" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-green-600">
                  3
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Easy Financing</h4>
                <p className="text-green-100 mb-4">Get approved for</p>
                <div className="text-2xl font-black text-yellow-300">70% Loan</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-slate-900 px-12 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300">
            <span>Reserve Your Plot Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}