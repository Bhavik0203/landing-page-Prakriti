import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, TreePine, Shield, Droplets, Zap, Home, Car, Users, Star, ChevronDown, Play, CheckCircle, ArrowRight, Instagram, Facebook, Twitter, MapPin, TrendingUp,  Leaf, Award, Users } from 'lucide-react';

const PrakritiLanding = () => {

const [isVisible, setIsVisible] = useState({});
const [activeTab, setActiveTab] = useState('overview');
const [currentSlide, setCurrentSlide] = useState(0);
const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-cycle through features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Nature + Affordability",
      description: "Your dream plot in nature's lap at an unbeatable price",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Calm Escape",
      description: "Away from city chaos, near Takve - perfectly located",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Smart Investment",
      description: "Low budget entry with high return potential",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Perfect Weekend Home",
      description: "Ideal for building your serene weekend retreat",
      color: "from-orange-500 to-red-600"
    }
  ];

  const specs = [
    { label: "Total Area", value: "5 Acres", icon: <Shield className="w-5 h-5" /> },
    { label: "Total Plots", value: "81 Plots", icon: <Users className="w-5 h-5" /> },
    { label: "Plot Size", value: "861-2275 sqft", icon: <Home className="w-5 h-5" /> },
    { label: "FSI", value: "1.0", icon: <Award className="w-5 h-5" /> },
    { label: "Authority", value: "PMRDA", icon: <Shield className="w-5 h-5" /> },
    { label: "Maintenance", value: "₹1/sqft/month", icon: <TrendingUp className="w-5 h-5" /> }
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const galleryImages = [
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1502780402662-acc01917169e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop"
  ];

  const amenities = [
    { icon: Shield, title: "24/7 Security", desc: "Round-the-clock security for peace of mind" },
    { icon: Droplets, title: "Swimming Pool", desc: "Premium swimming pool facilities" },
    { icon: Home, title: "Club House", desc: "Modern clubhouse for community activities" },
    { icon: TreePine, title: "Landscaping", desc: "Beautiful roadside plantation and green spaces" },
    { icon: Zap, title: "Utilities", desc: "Water & electricity provision ready" },
    { icon: Car, title: "Internal Roads", desc: "Well-planned internal road network" }
  ];

  const faqs = [
    { q: "What is the total project area?", a: "The project spans across 5 acres with 81 premium NA plots." },
    { q: "What are the available plot sizes?", a: "Plot sizes range from 861 to 2275 sqft net area to suit different needs." },
    { q: "What is the booking process?", a: "₹1 Lac booking amount, 20% within 15 days, and 70% bank loan available." },
    { q: "What approvals does the project have?", a: "The project is sanctioned by PMRDA with all necessary approvals." },
    { q: "What is the maintenance cost?", a: "Very affordable at ₹1 per sqft per month." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TreePine className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              PRAKRITI
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
            <a href="#amenities" className="text-gray-700 hover:text-green-600 transition-colors">Amenities</a>
            <a href="#gallery" className="text-gray-700 hover:text-green-600 transition-colors">Gallery</a>
            <a href="#location" className="text-gray-700 hover:text-green-600 transition-colors">Location</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
          </div>
          <a href="tel:+918007337788" className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all">
            Call Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 to-blue-900/80 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src={galleryImages[currentSlide]} 
            alt="Prakriti" 
            className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
          />
        </div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              🌿 PRAKRITI 🌿
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              EK NA PLOT, EK NAYI KAHANI, EK NAYA SAFAR
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-lg">
              <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">🏡 5 Acres Natural Haven</span>
              <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">💰 Starting ₹15.35 Lacs</span>
              <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">🌱 Pre-Launch Offer</span>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-yellow-400 animate-pulse">
                ₹1,199/sqft - PRE-LAUNCH OFFER! 🚀
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+918007337788" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  📞 Call +91 800 733 7788
                </a>
                <a href="#about" className="bg-white/20 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300">
                  Explore More ↓
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className={`relative z-10 container mx-auto px-6 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Prakriti
            </h2>
            <div className="flex items-center justify-center space-x-2 text-2xl">
              <Leaf className="w-8 h-8 text-green-400 animate-bounce" />
              <span className="text-white font-light">Nature's Paradise Awaits</span>
              <Leaf className="w-8 h-8 text-green-400 animate-bounce delay-300" />
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mt-8 leading-relaxed">
            Where <span className="text-green-400 font-semibold">Nature's Beauty</span> meets 
            <span className="text-blue-400 font-semibold"> Smart Investment</span> for your 
            <span className="text-purple-400 font-semibold"> Perfect Weekend Escape</span>
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Features Section */}
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-white mb-8 flex items-center">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Why Choose Prakriti?
                </span>
              </h3>
              
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`group relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                      activeFeature === index
                        ? 'bg-gradient-to-r from-white/20 to-white/10 border-white/30 shadow-2xl'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                    onMouseEnter={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white shadow-lg transform transition-transform group-hover:rotate-12`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Active indicator */}
                    {activeFeature === index && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-blue-400 rounded-r-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications Section */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">Project Specifications</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {specs.map((spec, index) => (
                      <div
                        key={index}
                        className="group bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="p-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg text-white">
                            {spec.icon}
                          </div>
                          <div className="font-semibold text-gray-300 text-sm leading-tight">
                            {spec.label}
                          </div>
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center p-8 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-2xl border border-white/10">
                <h4 className="text-2xl font-bold text-white mb-4">Ready to Invest in Your Future?</h4>
                <p className="text-gray-300 mb-6">Join the smart investors who've already discovered Prakriti</p>
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-full hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  Explore Plots Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/20 rounded-full animate-ping`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </section>
      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">🔥 Pre-Launch Pricing 🔥</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Rate</h3>
              <div className="text-4xl font-bold text-yellow-400 mb-2">₹1,199</div>
              <div className="text-lg">per sqft</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Starting Budget</h3>
              <div className="text-4xl font-bold text-yellow-400 mb-2">₹15.35</div>
              <div className="text-lg">Lacs onwards</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Infrastructure</h3>
              <div className="text-4xl font-bold text-yellow-400 mb-2">₹99K</div>
              <div className="text-lg">One-time cost</div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">Easy Booking Process</h3>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-400 text-gray-800 rounded-full flex items-center justify-center font-bold">1</div>
                <span>₹1 Lac Booking</span>
              </div>
              <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-400 text-gray-800 rounded-full flex items-center justify-center font-bold">2</div>
                <span>20% in 15 days</span>
              </div>
              <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-400 text-gray-800 rounded-full flex items-center justify-center font-bold">3</div>
                <span>70% Bank Loan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className={`py-20 ${isVisible.amenities ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Premium Amenities ✨
            </h2>
            <p className="text-xl text-gray-600">Ready infrastructure & amenities for your comfort</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="mb-6">
                  <amenity.icon className="w-12 h-12 text-green-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-center">Additional Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mb-2">🚪</div>
                <span className="text-sm font-medium">Entrance Gate</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mb-2">🏠</div>
                <span className="text-sm font-medium">Individual Compound</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mb-2">💡</div>
                <span className="text-sm font-medium">Street Lamps</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mb-2">📛</div>
                <span className="text-sm font-medium">Name Board</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className={`py-20 bg-gray-50 ${isVisible.gallery ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Gallery 📸
            </h2>
            <p className="text-xl text-gray-600">Experience the natural beauty of Prakriti</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src={image} 
                  alt={`Prakriti Gallery ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <Play className="w-8 h-8" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className={`py-20 ${isVisible.location ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Prime Location 📍
            </h2>
            <p className="text-xl text-gray-600">Near Takve - Close yet away from chaos!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Location Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Strategic Location</h4>
                    <p className="text-gray-600">Near Takve with excellent connectivity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TreePine className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Natural Environment</h4>
                    <p className="text-gray-600">Surrounded by greenery and fresh air</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Car className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Easy Accessibility</h4>
                    <p className="text-gray-600">Well-connected roads and transport</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Home className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Peaceful Living</h4>
                    <p className="text-gray-600">Away from city noise and pollution</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Visit Our Location</h3>
              <div className="bg-white p-6 rounded-xl mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span className="font-semibold">Address</span>
                </div>
                <p className="text-gray-600 mb-4">Near Takve, Pune</p>
                <a 
                  href="https://maps.app.goo.gl/dVpH5s47ry8QjMe88" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>View on Maps</span>
                </a>
              </div>
              <div className="text-center">
                <p className="text-gray-600 mb-4">Ready to visit? Call us for site visit arrangement</p>
                <a href="tel:+918007337788" className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                  📞 Schedule Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={`py-20 bg-gray-50 ${isVisible.faq ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Frequently Asked Questions ❓
            </h2>
            <p className="text-xl text-gray-600">Get answers to common queries</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white ${isVisible.contact ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us 📞
            </h2>
            <p className="text-xl">Limited plots available! Reserve your piece of peace now!</p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Now</div>
                    <a href="tel:+918007337788" className="text-yellow-300 hover:text-yellow-100">+91 800 733 7788</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Project Location</div>
                    <div>Near Takve, Pune</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Builder</div>
                    <div>Chirag Khandage</div>
                    <div className="text-sm">Strategic Partner: Rising Spaces</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Quick Inquiry</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <select className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                  <option value="" className="text-gray-800">Interested in Plot Size</option>
                  <option value="861" className="text-gray-800">861 sqft</option>
                  <option value="1200" className="text-gray-800">1200 sqft</option>
                  <option value="1500" className="text-gray-800">1500 sqft</option>
                  <option value="2000" className="text-gray-800">2000 sqft</option>
                  <option value="2275" className="text-gray-800">2275 sqft</option>
                </select>
                <textarea 
                  placeholder="Your Message (Optional)" 
                  rows="3"
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full bg-yellow-400 text-gray-800 p-3 rounded-lg font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300"
                >
                  Send Inquiry 📩
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🔥 Don't Miss This Opportunity! 🔥
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Limited plots available at pre-launch prices. Your dream plot in nature's lap is just a call away!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:+918007337788" className="bg-green-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-green-700 transform hover:scale-110 transition-all duration-300 shadow-2xl">
              📞 Call +91 800 733 7788
            </a>
            <div className="text-lg font-semibold">
              OR
            </div>
            <a href="https://maps.app.goo.gl/dVpH5s47ry8QjMe88" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 shadow-2xl">
              📍 Visit Location
            </a>
          </div>
          <div className="mt-8 text-lg font-semibold animate-pulse">
            ⏰ Pre-Launch Offer Ending Soon!
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TreePine className="w-8 h-8 text-green-400" />
                <span className="text-2xl font-bold">PRAKRITI</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your gateway to peaceful living in nature's embrace. Premium NA plots with world-class amenities.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Project</a></li>
                <li><a href="#amenities" className="hover:text-white transition-colors">Amenities</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Project Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Builder: Chirag Khandage</li>
                <li>Partner: Rising Spaces</li>
                <li>Authority: PMRDA</li>
                <li>Total Area: 5 Acres</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 800 733 7788</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Near Takve, Pune</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@prakriti.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Prakriti. All rights reserved. | Designed for nature lovers</p>
            <div className="mt-2 text-sm">
              🌿 EK NA PLOT, EK NAYI KAHANI, EK NAYA SAFAR 🌿
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="tel:+918007337788" className="bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transform hover:scale-110 transition-all duration-300 animate-pulse">
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PrakritiLanding;