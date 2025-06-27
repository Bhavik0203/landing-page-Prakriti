import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle, Star, Users, MapPin, Calendar, Phone, Mail } from 'lucide-react';

const AnimatedFAQ = () => {
  const [isVisible, setIsVisible] = useState({ faq: false });
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const faqs = [
    {
      q: "What is the best time to visit Prakriti?",
      a: "The best time to visit Prakriti is during the monsoon season (June to September) when the waterfalls are at their peak flow, and the post-monsoon period (October to February) for pleasant weather and clear views. Each season offers a unique experience with different flora and fauna.",
      category: "planning",
      icon: Calendar,
      popular: true
    },
    {
      q: "How do I reach Prakriti Nature Camp?",
      a: "Prakriti is located 45km from the nearest railway station. We provide pickup services from major transportation hubs. You can also drive via NH-4, taking the Lonavala exit. Detailed directions and GPS coordinates will be shared upon booking confirmation.",
      category: "travel",
      icon: MapPin,
      popular: true
    },
    {
      q: "What activities are included in the package?",
      a: "Our packages include guided nature walks, waterfall rappelling, rock climbing, bird watching tours, photography sessions, campfire evenings, and organic farm visits. Adventure activities are conducted by certified instructors with proper safety equipment.",
      category: "activities",
      icon: Star,
      popular: true
    },
    {
      q: "What should I pack for the trip?",
      a: "Pack comfortable trekking shoes, quick-dry clothing, rain gear, sunscreen, insect repellent, personal medications, and a small backpack. We provide camping equipment, meals, and safety gear. A detailed packing list will be sent before your visit.",
      category: "planning",
      icon: HelpCircle,
      popular: false
    },
    {
      q: "Are there accommodation options available?",
      a: "Yes! We offer eco-friendly cottages, traditional tents, and luxury glamping options. All accommodations include organic meals, hot water, and basic amenities while maintaining harmony with nature. Booking in advance is recommended.",
      category: "accommodation",
      icon: Users,
      popular: true
    },
    {
      q: "Is it safe for children and elderly visitors?",
      a: "Absolutely! We have age-appropriate activities and easy trails suitable for children and elderly visitors. Our experienced guides ensure safety at all times. Adventure activities have age and fitness requirements that will be clearly communicated.",
      category: "safety",
      icon: Users,
      popular: false
    },
    {
      q: "What is your cancellation policy?",
      a: "We offer flexible cancellation with full refund if cancelled 7 days before the trip. 50% refund for cancellations 3-7 days prior. No refund for same-day cancellations unless due to weather conditions on our recommendation.",
      category: "booking",
      icon: MessageCircle,
      popular: false
    },
    {
      q: "Do you provide vegetarian/vegan meal options?",
      a: "Yes! We specialize in organic, locally-sourced vegetarian cuisine. Vegan, Jain, and special dietary requirements can be accommodated with advance notice. Our farm-to-table approach ensures fresh, healthy meals throughout your stay.",
      category: "food",
      icon: Star,
      popular: false
    },
    {
      q: "What safety measures do you follow?",
      a: "We maintain strict safety protocols including certified guides, first aid facilities, emergency communication systems, quality safety equipment, and comprehensive insurance coverage. All activities are conducted following international safety standards.",
      category: "safety",
      icon: HelpCircle,
      popular: true
    },
    {
      q: "Can I book a customized package?",
      a: "Certainly! We offer customized packages for corporate groups, families, and special occasions. Contact our team to discuss your specific requirements, and we'll create a personalized experience that matches your interests and budget.",
      category: "booking",
      icon: Phone,
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'planning', name: 'Trip Planning', icon: Calendar },
    { id: 'travel', name: 'Travel & Transport', icon: MapPin },
    { id: 'activities', name: 'Activities', icon: Star },
    { id: 'accommodation', name: 'Stay Options', icon: Users },
    { id: 'safety', name: 'Safety & Security', icon: HelpCircle },
    { id: 'booking', name: 'Booking & Payment', icon: MessageCircle },
    { id: 'food', name: 'Food & Dining', icon: Star }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.a.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const popularFaqs = faqs.filter(faq => faq.popular);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible({ faq: true });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const toggleAll = () => {
    if (openItems.size === filteredFaqs.length) {
      setOpenItems(new Set());
    } else {
      setOpenItems(new Set(filteredFaqs.map((_, index) => index)));
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-green-50 to-blue-50">
      <div 
        id="faq" 
        className={`py-20 transition-all duration-1000 transform ${
          isVisible.faq ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Animated Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 blur-3xl -z-10 rounded-full"></div>
            <h2 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-green-600 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible.faq ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
            }`}>
              FAQ ❓
            </h2>
            <div className={`h-1 w-32 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6 rounded-full transition-all duration-1000 ${
              isVisible.faq ? 'scale-100' : 'scale-0'
            }`}></div>
            <p className="text-2xl text-gray-600 font-light mb-8">Get answers to all your questions</p>
            
            {/* Quick Stats */}
            <div className="flex justify-center space-x-8 text-sm text-gray-500 mb-8">
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-4 h-4" />
                <span>{faqs.length} Questions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>{popularFaqs.length} Popular</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Instant Answers</span>
              </div>
            </div>
          </div>

          {/* Search and Controls */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search your questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg transition-all duration-300"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 mb-6">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{category.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Control Buttons */}
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Showing {filteredFaqs.length} of {faqs.length} questions
                </div>
                <button
                  onClick={toggleAll}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300 text-sm font-medium"
                >
                  {openItems.size === filteredFaqs.length ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  <span>{openItems.size === filteredFaqs.length ? 'Collapse All' : 'Expand All'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16">
                <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-500 mb-2">No questions found</h3>
                <p className="text-gray-400">Try adjusting your search or category filter</p>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const Icon = faq.icon;
                const isOpen = openItems.has(index);
                return (
                  <div 
                    key={index} 
                    className={`group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-white/20 overflow-hidden ${
                      isVisible.faq ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Popular Badge */}
                    {faq.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center space-x-1 z-10">
                        <Star className="w-3 h-3 fill-current" />
                        <span>Popular</span>
                      </div>
                    )}

                    {/* Question Header */}
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full p-8 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className={`p-3 rounded-xl transition-all duration-300 ${
                            isOpen 
                              ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white' 
                              : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                              {faq.q}
                            </h3>
                            <div className="flex items-center space-x-3 text-sm text-gray-500">
                              <span className="bg-gray-100 px-2 py-1 rounded-full capitalize">
                                {faq.category.replace('-', ' ')}
                              </span>
                              {faq.popular && <span className="text-yellow-500">★ Popular</span>}
                            </div>
                          </div>
                        </div>
                        <div className={`ml-4 p-2 rounded-full transition-all duration-300 ${
                          isOpen 
                            ? 'bg-green-100 text-green-600 rotate-180' 
                            : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
                        }`}>
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </div>
                    </button>

                    {/* Answer Content */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-8 pb-8">
                        <div className="pl-16">
                          <div className="h-px bg-gradient-to-r from-green-200 to-blue-200 mb-6"></div>
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {faq.a}
                          </p>
                          
                          {/* Action Buttons */}
                          <div className="flex items-center space-x-4 mt-6">
                            <button className="flex items-center space-x-2 text-sm text-green-600 hover:text-green-700 transition-colors duration-200">
                              <MessageCircle className="w-4 h-4" />
                              <span>Still have questions?</span>
                            </button>
                            <button className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200">
                              <Phone className="w-4 h-4" />
                              <span>Call us</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
                  </div>
                );
              })
            )}
          </div>

          {/* Contact Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                <p className="text-lg mb-6 opacity-90">Our team is here to help you plan your perfect nature getaway</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="flex items-center justify-center space-x-2 bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                    <Mail className="w-5 h-5" />
                    <span>Email Us</span>
                  </button>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
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
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AnimatedFAQ;